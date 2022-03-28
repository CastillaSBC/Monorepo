"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("./../../prisma/prisma");
const jsonwebtoken_1 = require("jsonwebtoken");
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // Take JSON body values "username" and "password" and find the username in the database
        // if the user doesnt exist in the database return
        // if the password is not correct then return
        // if the user exists and the password is correct then return the user
        const { username, password } = req.body;
        const user = yield prisma_1.prisma.user.findUnique({
            where: {
                username: username
            }
        });
        if (!user) {
            return res.status(404).send({
                message: 'User not found'
            });
        }
        if (user.password !== password) {
            return res.status(400).send({
                message: 'Invalid password'
            });
        }
        const token = (0, jsonwebtoken_1.sign)({
            id: user.id,
            ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress
        }, process.env.JWT_SECRET, {
            expiresIn: '2h'
        });
        return res.status(200).send({
            message: 'Authenticated',
            token
        });
    });
}
exports.default = login;
