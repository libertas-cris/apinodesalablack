import { FastifyRequest, FastifyReply } from "fastify";
import { prisma} from "../../lib/prisma";
import { z } from "zod";

export async function updateUser(request:FastifyRequest, reply:FastifyReply){
  const validateUser = z.object({
    id: z.string().uuid(),
    isChecked: z.string(),
  })

  const { id, isChecked } = validateUser.parse(request.params);

  const selectedUser = await prisma.user.findUnique({
    where:{
      id: id
    }
  })

  if(!selectedUser){
    return reply.status(400).send('usuário não encontrado');
  }

  let isCheckedBoolean;

  if(isChecked === 'false'){
    isCheckedBoolean = false;
  } else {
    isCheckedBoolean = true;
  }

  await prisma.user.update({
    where: {
      id: selectedUser.id
    },
    data: {
      is_Active: isCheckedBoolean
    }
  })
}

