import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const generateToken = (userId: string) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET!, { expiresIn: "1h" });
};

export const verifyToken = (token: string) => {
    return jwt.verify(token, process.env.JWT_SECRET!);
};
