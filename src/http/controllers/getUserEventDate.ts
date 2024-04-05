import { z } from "zod";
import { prisma } from "../../lib/prisma";
import { FastifyRequest, FastifyReply } from "fastify";
import { AppError } from "../../errors/AppError";

export async function getUserEventDate(request: FastifyRequest, reply: FastifyReply){
  const validateUserId = z.object({
    id: z.string().uuid()
  })

  const { id } = validateUserId.parse(request.params);

  if(!id){
    throw new AppError('User does not exists', 400);
  }

  const userEventDate = await prisma.user.findUnique({
    where: {
      id: id
    }
  }).catch(error => {
    throw new AppError('Server is down');
  })

  reply.status(200).send(userEventDate?.event_date);

}