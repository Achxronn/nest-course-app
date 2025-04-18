/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, UseGuards } from '@nestjs/common';
import { UserInfoService } from './user-info.service';
import { CreateUserInfoDto } from './dto/create-user-info.dto';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('user-info')
export class UserInfoController {
  constructor(private readonly userInfoService: UserInfoService) {}

  @Post('/create') //localhost:3000/user-info/create
  async create(@Body() createUserInfoDto: CreateUserInfoDto) {
    const createUser = await this.userInfoService.create(createUserInfoDto);
    if (createUser == null) {
      throw new Error('Cannot create DATA!!!')
    }
    return {
      message: 'Create Data Complete',
      data: createUser,
    };
  }

  @Get() // localhost:3000/user-info
  findAll() {
    return this.userInfoService.findAll();
  }

  @Get(':id') // localhost:3000/user-info/:id
  async findOne(@Param('id') id: string) {
    const findUser = await this.userInfoService.findOne(+id);
    if (findUser == null) {
      throw new NotFoundException('Not Found DATA!!');
    }
    return findUser;
  }

  @Get('/findlastname/:lastname') // localhost:3000/user-info/findlastname/:lastname
  async findLastname(@Param('lastname') lastname: string) {
    const findlastname = await this.userInfoService.findLastname(lastname);
    if (findlastname == null) {
      //show error message
      throw new NotFoundException('Not Found DATA!!!');
    }
    return findlastname;
  }

  @Patch('/update/:id') //localhost:3000/user-info/update/:id
  async update(@Param('id') id: string, @Body() updateUserInfoDto: UpdateUserInfoDto) {
    const [updateUser] = await this.userInfoService.update(
      +id,
      updateUserInfoDto,
    );
    console.log(updateUser);
    if (updateUser === 0) {
      throw new NotFoundException('Not Found Data to UPDATE!!!');
    }
    return {message: 'Update Data Complete'};
  }

  @Delete('/delete/:id') //localhost:3000/user-info/delete/:id
  async remove(@Param('id') id: string) {
    const destroyUser = await this.userInfoService.remove(+id);
    console.log(destroyUser);
    if (destroyUser == 0) {
      throw new NotFoundException('Not Found Data To Remove!!');
    }
    return {message: 'Remove Data Complete'};
  }
}
