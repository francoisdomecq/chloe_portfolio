import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../models/user-entity';
import { Repository } from 'typeorm';
import { PasswordService } from '../password/password.service';
import { CreateUserDto } from '../../dto/create-user-dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly passwordService: PasswordService,
  ) {}

  async findByEmail(email: string): Promise<User> {
    return await this.userRepository.findOneBy({ email });
  }

  async createUser(user: CreateUserDto): Promise<User> {
    const hashedPassword = await this.passwordService.hashPassword(
      user.password,
    );
    const userWithHashedPassword = { ...user, password: hashedPassword };
    return await this.userRepository.save(userWithHashedPassword);
  }

  async findLoggedUser(email: string, password: string): Promise<User> {
    const user = await this.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await this.passwordService.verify(
      password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return user;
  }
}
