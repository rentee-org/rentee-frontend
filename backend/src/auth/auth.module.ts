import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { User } from 'src/users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../users/users.module'; // Add this import

@Module({
  imports: [TypeOrmModule.forFeature([User]), UsersModule], // Add UsersModule here
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
