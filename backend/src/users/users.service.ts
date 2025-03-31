import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { UserDto } from './dto/user.dto';
import { ApiResponse } from 'src/common/dto/response.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getProfile(userId: string): Promise<UserDto | null> {
    
    return this.usersRepository.findOne({
      where: { id: userId.toString() },
      select: [
        'id',
        'firstname',
        'lastname',
        'username',
        'email',
        'phone',
        'avatarUrl',
        'role',
        'city',
        'state',
        'country',
        'createdAt',
      ],
    });
  }

  async updateProfile(userId: string, dto: UpdateProfileDto) {
    await this.usersRepository.update(userId, dto);
    return { message: 'Profile updated successfully' };
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User | null> {
    return this.usersRepository.findOne({ where: { id } });
  }

  findById(id: string): Promise<User | null> {
    return this.usersRepository.findOne({ where: { id } });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOne({ where: { email } });
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.usersRepository.findOne({ where: { username } });
  }

  async findByPhone(phone: string): Promise<User | null> {
    return this.usersRepository.findOne({ where: { phone } });
  }

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(user);
  }

  update(id: string, updateUserDto: UpdateUserDto): Promise<ApiResponse<UpdateUserDto>> {
    try {
      const user = this.usersRepository.findOne({ where: { id } });
      if (!user) throw new Error('User not found');
      const user_obj = this.usersRepository.update(id, updateUserDto);

      // const { password, ...safeUser } = user;
    // Return the token and user information
    let response = new ApiResponse<UpdateUserDto>();
    response.success = true;
    response.message = 'User updated successfully!';
    response.data = updateUserDto as UpdateUserDto;
    return Promise.resolve(response);
    }
    catch (error) {
      throw new Error('User not found');
    }
  }

  async updateUserLastLogin(user: User): Promise<void> {
    user.lastLogin = new Date();
    await this.usersRepository.save(user);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
