import { UserRoles } from '../../users/types';
import { User } from '../../users/models/user-entity';

export interface LoginResponse {
  accessToken: string;
  user: Omit<User, 'password'>;
}

export interface TokenPayload {
  sub: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRoles;
}
