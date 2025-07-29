import { Role } from "./role";


export default interface Session{
    userId: string; 
    token: string;
    experisAt: number;
    role: Role;
}