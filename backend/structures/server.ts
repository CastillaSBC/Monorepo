import cors from "cors"
import helmet from "helmet"
import express from "express"
import compression from "compression"
import { Logger } from "./logger"
const logger = Logger.getInstance()

class App {
    public express: express.Application;
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
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
        if(!process.env.APP_PORT){
            process.env.APP_PORT = `3000`
        }
        this.express.listen(parseInt(process.env.APP_PORT), () => {
            logger.log("Server started on port " + process.env.APP_PORT)
        })
    }
}

const server = new App()

export {server};