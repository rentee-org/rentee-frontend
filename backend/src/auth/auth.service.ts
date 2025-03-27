import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import { User } from 'src/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginDto, RegisterDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private configService: ConfigService,
  ) {}

  async register(model: RegisterDto): Promise<{ message: string }> {
    const exists = await this.userRepository.findOne({
      where: { email: model.email },
    });

    if (exists) throw new BadRequestException('Email already registered');

    const hashedPassword = await this.hashPassword(model.password);
    const user = this.userRepository.create({
      ...model,
      isEmailVerified: false,
      authProvider: 'local',
      password: hashedPassword,
    });

    console.log(JSON.stringify(user));
    await this.userRepository.save(user);
    return { message: 'User registered successfully' };
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) throw new UnauthorizedException('Invalid credentials');

    return { id: user.id, email: user.email, role: user.role };
  }

  async login(model: LoginDto): Promise<{ access_token: string; user: User }> {
    const user = await this.validateUser(model.email, model.password);
    user.lastLogin = new Date();
    await this.userRepository.save(user);

    const jwtSecret = this.configService.get<string>('JWT_SECRET');
    if (!jwtSecret) {
      throw new Error('JWT_SECRET is not defined');
    }

    const payload = { sub: user.id, email: user.email, role: user.role };
    const token = jwt.sign(user, jwtSecret, { expiresIn: '1h' });

    const { password, ...safeUser } = user;

    return { access_token: token, user: safeUser };
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
    return jwt.sign(payload, jwtSecret, { expiresIn: '1h' });
  }
}
