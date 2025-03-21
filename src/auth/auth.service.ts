import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import { User } from 'src/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        private configService: ConfigService
    ) { }

    async register(registerDto: RegisterDto): Promise<{ message: string }> {
        const hashedPassword = await bcrypt.hash(registerDto.password, 10);
        const user = this.userRepository.create({ email: registerDto.email, password: hashedPassword });
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
    
      async login(email: string, password: string): Promise<{ access_token: string }> {
        const user = await this.validateUser(email, password);
        const jwtSecret = this.configService.get<string>('JWT_SECRET');
        if (!jwtSecret) {
            throw new Error('JWT_SECRET is not defined');
        }
        const token = jwt.sign(user, jwtSecret, { expiresIn: '1h' });
        return { access_token: token };
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
