import { FastifyInstance } from "fastify";
import { register } from "./controllers/register";
import { getAllUsers } from "./controllers/getAllUsers";
import { getUserTasks } from "./controllers/getUserTasks";
import { createSession } from "./controllers/createSession";
import { updateUser } from "./controllers/updateUser";
import { updateTask } from "./controllers/updateTask";
import { updateEventDate } from "./controllers/updateEventDate";
import { getUserEventDate } from "./controllers/getUserEventDate";

export async function appRoutes(app:FastifyInstance){

  app.post('/user', register),
  app.get('/users', getAllUsers),
  app.get('/tasks/:id', getUserTasks),
  app.post('/login', createSession),
  app.put('/user/update/:id/:isChecked', updateUser ),
  app.put('/task/update/:userId/:taskId/:taskStatus', updateTask ),
  app.put('/user/update/event', updateEventDate),
  app.get('/user/update/event/:id', getUserEventDate );
}