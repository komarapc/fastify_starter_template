import UserRepository from "./user.repository";

const userRepo = new UserRepository();

class UserService {
  async index() {
    return await userRepo.allUser();
  }
}
export default UserService;
