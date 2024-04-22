import { FastifyRequest, FastifyReply } from "fastify";
import { prisma } from "../../lib/prisma";
import {  z } from "zod";

export async function updateTask(request:FastifyRequest, reply:FastifyReply) {
  const validateTaskUpdate = z.object({
    userId: z.string().uuid(),
    taskId: z.string().uuid(),
  })

  const validateTaskStatus = z.object({
    taskStatus: z.string()
  })

  const { userId, taskId} = validateTaskUpdate.parse(request.params);
  
  const {taskStatus } = validateTaskStatus.parse(request.body);

  const statusFormated = parseInt(taskStatus);


  await prisma.task.update({
    where:{
      id: taskId,
      user_id: userId,
    },
    data:{
      status: statusFormated
    }
  })

  reply.status(200).send();
}