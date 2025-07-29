import User from '../domain/user';
import { Role } from '@/domain/role';
import { Schema, model, Document } from 'mongoose';
import '@types/mongoose';

/**
 *
 */
interface UserDocument extends User, Document { }


const UserSchema = new Schema<UserDocument>({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: Object.values(Role) }
})

const UserModel = model<UserDocument>('Users', UserSchema)

export { UserModel, UserDocument }