import { Router } from "express";
import authenticate from "../controllers/user/authenticate";
import login from "../controllers/user/login";
import register from "../controllers/user/register";

const user = Router();

user.get('/me', async (req, res) => await authenticate(req, res));
user.post('/login', async (req, res) => await login(req, res));
user.post('/register', async (req, res) => await register(req, res));
export default user