import { FastifyRequest, FastifyReply } from "fastify";
import { prisma } from "../../lib/prisma";
import { date, string, z } from "zod";

export async function updateEventDate(request:FastifyRequest, reply:FastifyReply) {
  const eventDateValidate = z.object({
    id: string().uuid(),
    eventDate: z.string()
  })

  const { id, eventDate } = eventDateValidate.parse(request.body);
  const parseEventDate = new Date(eventDate);

  await prisma.user.update({
    where: {
      id: id
    },
    data: {
      event_date: parseEventDate
    }
  })

  return reply.status(200).send('Event date updated successful');
}