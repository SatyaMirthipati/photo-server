import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { CreateUserDto } from './dto/user.dto';
import { UserService } from './user.service';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() body: CreateUserDto) {
    return this.userService.create(body);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: ObjectId) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: ObjectId, @Body() body: CreateUserDto) {
    return this.userService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    return this.userService.remove(id);
  }
}
