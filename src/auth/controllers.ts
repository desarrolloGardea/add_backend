//domain: app structure
import Session from "@/domain/session";
import { ApiResponse } from "@/domain/apiResponse";

//application:
import { UserModel } from "../models/users.model";

//infraestructure
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

export async function registerEndpoint(req: Request, res: Response) {

    try {
        const { name, password, role } = req.body;

        const isUserExist = await UserModel.findOne({ username: name });
        if (isUserExist) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel({
            username: name,
            password: hashedPassword,
            role
        })
        await newUser.save();
        return res.status(201).json({ message: 'User created successfully' });


    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });

    }
}

export async function loginEndpoint(req: Request, res: Response) {
    try {
        const secretKey = process.env.SECRET_KEY || 'secretKey';
        const { name, password } = req.body;
        const user = await UserModel.findOne({ username: name });

        if (!user) {
            res.status(400).json({ message: 'User not found' });
            return
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(400).json({ message: 'Invalid password' });
            return
        }
        const token = jwt.sign({ id: user._id, role: user.role }, secretKey, { expiresIn: '5h' });
        const decoded: any = jwt.verify(token, secretKey);
        if (!decoded) {
            res.status(400).json({ message: 'Invalid token' });
            return

        }

        const session: Session = {
            userId: user._id as string,
            token: token,
            role: user.role,
            expiresAt: decoded.exp
        }
        res.status(200).json({
            isOk: true,
            message: 'Login successful',
            data: session
        } as ApiResponse);
        return session;
    } catch (error) {
        console.error(error);

        res.status(500).json({ message: 'Internal server error' });
    }

}