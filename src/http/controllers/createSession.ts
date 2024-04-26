import { prisma } from "../../lib/prisma";
import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { compare } from "bcrypt";

export async function createSession(request:FastifyRequest, reply:FastifyReply){

    const dataUserLogin = z.object({
      email: z.string().email(),
      password: z.string()
    })

    const {email, password } = dataUserLogin.parse(request.body);

    const userExists = await prisma.user.findUnique({
      where:{
        email: email
      }
    })

    if(!userExists){
      return reply.status(400).send('user not exists');
    }

    const isPasswordValid = await compare(password, userExists.password);

    if(!isPasswordValid){
      return reply.status(400).send('Wrong password');
    }

    const token = await reply.jwtSign({
      email: userExists.email
    }, {
      sub: userExists.id,
      expiresIn: '1d'
    })

    return reply.status(200).send({
      token,
    })


}