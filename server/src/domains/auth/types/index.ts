import { UserRoles } from '../../users/types';

export interface LoginResponse {
  accessToken: string;
}

export interface TokenPayload {
  sub: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRoles;
}
