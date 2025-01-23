import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { CreateUserDto } from 'src/domains/users/dto/create-user-dto';
import { AuthService } from '../service/auth.service';
import { LogUserDto } from '../../users/dto/log-user-dto';
import { LoginResponse } from '../types';
import { Public } from '../decorators/public.decorator';
import { Request } from 'express';
import { User } from '../../users/models/user-entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  async getLoggedUser(@Req() req: Request) {
    const loggedUser = req.user as User;
    return this.authService.findLoggedUser(loggedUser.email);
  }

  @Post('/sign-in')
  async createUser(@Body() user: CreateUserDto) {
    return this.authService.register(user);
  }

  @Post('/login')
  @Public()
  async login(@Body() user: LogUserDto): Promise<LoginResponse> {
    const { accessToken, user: loggedUser } =
      await this.authService.login(user);
    return { accessToken, user: loggedUser };
  }
}
