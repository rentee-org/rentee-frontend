import { Role } from 'src/common/enums/role.enum';


export class UserDto {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone?: string;
  role: Role;
  avatarUrl?: string;
  status?: string;
  city?: string;
  state?: string;
  country?: string;
  isEmailVerified?: boolean;
  authProvider?: 'local' | 'google' | 'facebook';
  lastLogin?: Date;
  createdAt?: Date;
}
