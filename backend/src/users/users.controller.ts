import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Request,
  NotImplementedException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/common/enums/role.enum';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('me')
  getProfile(@Request() req) {
    return this.userService.getProfile(req.user.sub);
  }

  // This endpoint requires authentication but no specific role
  @Post('change-password') 
  async changePassword(@Body() changePasswordDto: any) {
    // return this.authService.changePassword(changePasswordDto);
    throw new NotImplementedException('Not implemented yet');
  }

  @Put('me')
  updateProfile(@Request() req, @Body() dto: UpdateProfileDto) {
    return this.userService.updateProfile(req.user.sub, dto);
  }

  @Roles(Role.ADMIN)
  @Get("all-users")
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Roles(Role.ADMIN)
  @Get('users')
  async getAllUsers() {
    return this.userService.findAll();
  }
  

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User | null> {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
