import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { User } from 'src/users/entities/user.entity';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserDto } from 'src/users/dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private configService: ConfigService,
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(model: RegisterDto): Promise<{ message: string }> {
    const exists = await this.userService.findByEmail(model.email);
      
    if (exists) throw new BadRequestException('Email already registered');

    const hashedPassword = await this.hashPassword(model.password);
    const user = await this.userService.create({
      ...model,
      isEmailVerified: false,
      authProvider: 'local',
      password: hashedPassword,
    });

    return { message: 'User registered successfully' };
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userService.findByEmail(email);
    // const user = await this.userRepository.findOne({ where: { email } });
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) throw new UnauthorizedException('Invalid credentials');

    return user;
  }

  async login(model: LoginDto): Promise<{ access_token: string; user: UserDto }> {
    const user = await this.validateUser(model.email, model.password);

    const payload = { sub: user.id, email: user.email, role: user.role };
    const token = await this.generateJwt(payload);
    // Exclude the password from the user object
    const { password, ...safeUser } = user;

    // update the last login time
    await this.userService.updateUserLastLogin(user);

    // return { access_token: token, user: safeUser };
    return { access_token: token, user: safeUser as UserDto };
  }

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  async validatePassword(password: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(password, hashed);
  }

  async generateJwt(payload: object): Promise<string> {
    const jwtSecret = this.configService.get<string>('JWT_SECRET');
    if (!jwtSecret) {
      throw new Error('JWT_SECRET is not defined');
    }
    const token = await this.jwtService.signAsync(payload, { secret: jwtSecret });
  
    return token;
  }
}
