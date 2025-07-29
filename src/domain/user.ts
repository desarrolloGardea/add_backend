import { Role } from './role';

export default interface User{
    username: string; 
    password: string;
    role: Role;
}