import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
@Injectable()
export class EmployeesService {
  constructor(private readonly databaseService: DatabaseService){}
  async create(createEmployeeDto: Prisma.UserCreateInput) {
    await this.databaseService.user.create({
      data:createEmployeeDto
    })
  }

  async findAll(role?:'admin'|'user') {
    if(role){
      return await this.databaseService.user.findMany({
       where:{
         role
       }
      
     })
      
    } 
   return await this.databaseService.user.findMany({})
  }

  async findOne(id: number) {
    await this.databaseService.user.findUnique({
      where:{
        id
      }
    })
  }

  async update(id: number, updateEmployeeDto: Prisma.UserUpdateInput) {
    await this.databaseService.user.update({
      where:{
        id
      },
      data:updateEmployeeDto
    })
  }

  async remove(id: number) {
    await this.databaseService.user.delete({
      where:{
        id
      }
    })
  }
}
