import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema({ id: true, timestamps: true, collection: 'users' })
export class User extends Document {}

export const UserSchema = SchemaFactory.createForClass(User);
