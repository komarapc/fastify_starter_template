import { FastifyReply, FastifyRequest } from "fastify";
import UserService from "./user.service";

const userService = new UserService();
class UserController {
  async index(req: FastifyRequest, reply: FastifyReply) {
    const user = await userService.index();
    reply.status(200).send(user);
  }
}

export default UserController;
