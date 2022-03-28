import { Router } from "express";
import authenticate from "../controllers/user/authenticate";
import login from "../controllers/user/login";

const user = Router();

user.get('/me', async (req, res) => await authenticate(req, res));
user.post('/login', async (req, res) => await login(req, res));

export default user