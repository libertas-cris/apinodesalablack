import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";

interface Tasks {
  id: String;
  title: String;
  status: number;
  owner: String;
  dueDate: Date;
  description: String;
  user_id: String;
}[]

export async function getUserTasks(request:FastifyRequest, reply:FastifyReply){
  const useruuid = z.object({
    id: z.string().uuid()
  })

  const { id } = useruuid.parse(request.params);

  const tasks:Array<Tasks> = await prisma.task.findMany({
    where: {
      user_id: id
    }
  })

  return reply.status(200).send(tasks);

  
}