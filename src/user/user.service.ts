import { HttpException, Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  async create(body: CreateUserDto) {
    try {
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, error.status);
    }
  }

  async findAll() {
    try {
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, error.status);
    }
  }

  async findOne(id: ObjectId) {
    try {
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, error.status);
    }
  }

  async update(id: ObjectId, body: CreateUserDto) {
    try {
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, error.status);
    }
  }

  async remove(id: ObjectId) {
    try {
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, error.status);
    }
  }
}
