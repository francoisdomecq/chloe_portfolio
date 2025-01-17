import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/domains/users/dto/create-user-dto';
import { AuthService } from '../service/auth.service';
import { LogUserDto } from '../../users/dto/log-user-dto';
import { LoginResponse } from '../types';
import { Public } from '../decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/sign-in')
  async createUser(@Body() user: CreateUserDto) {
    return this.authService.register(user);
  }

  @Post('/login')
  @Public()
  async login(@Body() user: LogUserDto): Promise<LoginResponse> {
    const accessToken = await this.authService.login(user);
    return { accessToken };
  }
}
