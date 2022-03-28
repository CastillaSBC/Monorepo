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
function authenticate(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        if (!ip) {
            res.status(400).send({
                message: 'No ip address detected. Please try again.'
            });
        }
        if (!token) {
            return res.status(401).json({
                message: "No token provided"
            });
        }
        try {
            const decoded = (0, jsonwebtoken_1.decode)(token, { complete: true });
            if (decoded.payload.ip != ip) {
                return res.status(401).json({
                    message: "Mismatched IP detected. Please authenticate again"
                });
            }
            const user = yield prisma_1.prisma.user.findUnique({
                where: {
                    id: decoded.payload.id
                }
            });
            if (!user) {
                return res.status(401).json({
                    message: "Invalid token"
                });
            }
            return res.status(200).json({
                message: "Authenticated",
                user
            });
        }
        catch (err) {
            return res.status(500).json({
                message: "Something went wrong, is your token valid?"
            });
        }
    });
}
exports.default = authenticate;
