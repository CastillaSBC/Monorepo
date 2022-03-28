import cors from "cors"
import helmet from "helmet"
import express from "express"
import compression from "compression"
import { Logger } from "./logger"
const logger = Logger.getInstance()
logger.log("Logger initialized")
logger.log("thanks")
class App {
    public express: express.Application;
    public port: number;
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.port = parseInt(process.env.PORT!)|| 3000
    }
    middleware() {
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: false }));
        this.express.use(compression());
        this.express.use(helmet());
        this.express.use(cors());
    }

    async routes() {
        this.express.use("/user", (await import("./../routes/user")).default);

    }

    init(){
        this.express.listen(this.port, () => {
            logger.log("Server started on port " + this.port)
        })
    }
}

const server = new App()
server.init()

export {server};