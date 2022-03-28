import { Request, Response } from "express";
import { prisma } from "./../../prisma/prisma";
import { sign } from "jsonwebtoken";

export default async function login(req: Request, res: Response) {
    // Take JSON body values "username" and "password" and find the username in the database
    // if the user doesnt exist in the database return
    // if the password is not correct then return
    // if the user exists and the password is correct then return the user
    const {username, password} = req.body
    const user = await prisma.user.findUnique({
        where: {
            username: username
        }
    })

    if (!user) {
        return res.status(404).send({
            message: 'User not found'
        })
    }

    if (user.password !== password) {
        return res.status(400).send({
            message: 'Invalid password'
        })
    }

    const token = sign({
        id: user.id,
        ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress
    }, process.env.JWT_SECRET!, {
        expiresIn: '2h'
    })

    return res.status(200).send({
        message: 'Authenticated',
        token
    })
}