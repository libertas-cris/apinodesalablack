import fastify from "fastify";
import { appRoutes } from "./http/routes";
import { fastifyJwt } from "@fastify/jwt";
import fastifyCors from '@fastify/cors';
import { env } from "./env";
import { ZodError } from "zod";
import { AppError } from "./errors/AppError";

export const app = fastify();

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
})

app.register(fastifyCors, {
  origin: '*',
  methods: 'GET, OPTIONS, PATCH, DELETE, POST, PUT',
  allowedHeaders: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  credentials: true
});

app.register(appRoutes);

app.setErrorHandler((error, request, reply) => {
  if(error instanceof ZodError) {
    return reply
    .status(400)
    .send({message: 'Validation error.', issues: error.format()})
  }

  if(error instanceof AppError) { 
    return reply.status(error.statusCode).send({
      status: "error",
      message: error.message
    });
  }

  if(env.NODE_ENV !== 'production') {
    console.error(error)
  }

  return reply.status(500).send({
    message: 'Internal server error'
  })
})
