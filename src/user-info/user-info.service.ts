/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserInfoDto } from './dto/create-user-info.dto';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';
import { UserInfo } from './entities/user-info.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UserInfoService {
  constructor(
    @InjectModel(UserInfo)
    private UserInfoModel : typeof UserInfo,
  ) {}


  async create(createUserInfoDto: CreateUserInfoDto) {
    return await this.UserInfoModel.create(
      createUserInfoDto as Partial<UserInfo>,
    );
  }

  async findAll() {
    return await this.UserInfoModel.findAll();
  }

  async findOne(id: number) {
    return await this.UserInfoModel.findByPk(id);
  }

  async findLastname(lastname: string) {
    return await this.UserInfoModel.findAll({
      where: {
        lastname: lastname,
      }
    });
  }

  async update(id: number, updateUserInfoDto: UpdateUserInfoDto) {
    return await this.UserInfoModel.update(updateUserInfoDto, {
      where: {id: id},
    });
  }

  async remove(id: number) {
    return await this.UserInfoModel.destroy({
      where: {id: id},
    });
  }
}
