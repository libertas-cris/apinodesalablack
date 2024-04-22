import { FastifyInstance } from "fastify";
import { register } from "./controllers/register";
import { getAllUsers } from "./controllers/getAllUsers";
import { getUserTasks } from "./controllers/getUserTasks";
import { createSession } from "./controllers/createSession";
import { updateUser } from "./controllers/updateUser";
import { updateTask } from "./controllers/updateTask";
import { updateEventDate } from "./controllers/updateEventDate";
import { getUserEventDate } from "./controllers/getUserEventDate";

import { env } from "../env";

export async function appRoutes(app:FastifyInstance){

  app.post(`${env.CONTEXT_PATH}/user`, register),
  app.get(`${env.CONTEXT_PATH}/users`, getAllUsers),
  app.get(`${env.CONTEXT_PATH}/tasks/:id`, getUserTasks),
  app.post(`${env.CONTEXT_PATH}/login`, createSession),
  app.put(`${env.CONTEXT_PATH}/user/update/:id/:isChecked`, updateUser ),
  app.patch(`${env.CONTEXT_PATH}/task/update/:userId/:taskId`, updateTask ),
  app.put(`${env.CONTEXT_PATH}/user/update/event`, updateEventDate),
  app.get(`${env.CONTEXT_PATH}/user/update/event/:id`, getUserEventDate );
}