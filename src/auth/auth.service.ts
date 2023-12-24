import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/domain/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async login(user: any) {
    const payload = { userId: user.id, mobile: user.mobileNumber };
    return {
      access_token: this.jwtService.sign(payload),
      userExists: true,
    };
  }
}
