import { FastifyRequest, FastifyReply } from "fastify";
import { prisma } from "../../lib/prisma";

export async function getAllUsers (request:FastifyRequest, reply:FastifyReply) {

  const allUsers = await prisma.user.findMany();

  return reply.status(200).send(allUsers);
}