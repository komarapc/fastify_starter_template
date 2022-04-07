import { ResponseData } from "./../../../app/global/response-data";
import { user } from "../../../data/user.json";
class UserRepository {
  async allUser() {
    return new ResponseData(true, 200, "Success", { user });
  }
}

export default UserRepository;
