import { FastifyInstance } from "fastify";
import UserController from "./user.controller";
const controller = new UserController();
async function userRoutes(fastify: FastifyInstance, opts: any, done: any) {
  fastify.get("/", controller.index);
  done();
}

export default userRoutes;
