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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticate_1 = __importDefault(require("../controllers/user/authenticate"));
const login_1 = __importDefault(require("../controllers/user/login"));
const user = (0, express_1.Router)();
user.get('/me', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, authenticate_1.default)(req, res); }));
user.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, login_1.default)(req, res); }));
exports.default = user;
