import fastify from "fastify";
import { stdout } from "process";
import { PORT } from "../app/config/config";
import router from "./router";

const app = fastify({ logger: false, connectionTimeout: 10000 });

class AppServer {
  private port: number = PORT;
  constructor() {
    this.plugins();
    this.routes();
  }
  private async plugins() {}
  private async routes() {
    app.register(router, { prefix: "api" });
  }
  private async connection() {}

  public async main() {
    try {
      app.listen(this.port, async () => {
        stdout.write(`Server is running at port ${this.port}...\n`);
        stdout.write(`Please don't close this console...  ^_^ \n`);
      });
    } catch (err) {
      console.log(err);
      process.exit(1);
    }
  }
}

const server = new AppServer();
server.main();
