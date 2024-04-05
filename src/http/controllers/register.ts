import { FastifyRequest, FastifyReply } from "fastify";
import { prisma } from "../../lib/prisma";
import { z } from "zod";
import { hash } from "bcrypt";
import { DATA } from '../../utils/tasks';
import { startOfDay, addDays } from 'date-fns';
import { AppError } from "../../errors/AppError";

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    phone: z.string()
  })

  const { name, email, password, phone } = registerBodySchema.parse(request.body);

  const passwordEncrypted = await hash(password, 6);

  const userWithSameEmail = await prisma.user.findUnique({
    where: {
      email: email
    }
  })

  if (userWithSameEmail) {
    throw new AppError("Usuário já cadastrado no sistema", 409);
  }

  const formattedDate = addDays(startOfDay(new Date()), 15);

  const createdUser = await prisma.user.create({
    data: {
      name,
      email,
      password: passwordEncrypted,
      phone,
      event_date: formattedDate,
      Task: {
        create: DATA.map(item => ({
          title: item.title,
          description: item.description,
          owner: item.owner,
          dueDate: item.dueDate,
          daysControl: item.daysControl,
        }))
      }
    }
  }).catch(error => {
    throw new AppError('Unavailable server', 500);
  })

  fetch("https://api.z-api.io/instances/3C1825917D649026AAA446A65441921E/token/92B58C5DAD3489D5AD780116/send-text", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      phone: phone,
      message: `Sua conta na plataforma da Sala black já está disponível:

email: ${email}
senha: ${password}
    
Lembre-se de guardar a sua senha. *Agora você precisa entrar em contato com o seu consultor para *ATIVAR* o seu acesso.`
    })
  })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });


  return reply.status(201).send({Message: 'User created successful', UserCreated:createdUser});
}