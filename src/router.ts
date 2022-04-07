import { FastifyInstance } from "fastify";
import userRoutes from "./api/user/user.routes";

async function router(fastify: FastifyInstance, opts: any, done: any) {
  fastify.register(userRoutes, { prefix: "/user" });
  done();
}

export default router;
