import { Role } from "./role";


export default interface Session{
    userId: string; 
    token: string;
    expiresAt: number;
    role: Role;
}