import { ConflictException, Injectable } from '@nestjs/common';
import { UsersService } from '../../users/services/users/users.service';
import { CreateUserDto } from '../../users/dto/create-user-dto';
import { User } from '../../users/models/user-entity';
import { JwtService } from '@nestjs/jwt';
import { LogUserDto } from '../../users/dto/log-user-dto';
import { TokenPayload } from '../types';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  public async register(createdUserDto: CreateUserDto) {
    const existingUser = await this.usersService.findByEmail(
      createdUserDto.email,
    );

    if (existingUser) {
      throw new ConflictException('User already exists');
    }

    return await this.usersService.createUser(createdUserDto);
  }

  public async login(user: LogUserDto) {
    const existingUser = await this.usersService.findLoggedUser(
      user.email,
      user.password,
    );

    if (!existingUser) {
      throw new ConflictException('User does not exist');
    }

    return {
      accessToken: this.generateToken(existingUser),
      user: existingUser,
    };
  }

  public async findLoggedUser(email: string) {
    return await this.usersService.findByEmail(email);
  }

  private generateToken(user: User) {
    const payload: TokenPayload = {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      sub: user.id,
    };
    return this.jwtService.sign(payload);
  }
}
