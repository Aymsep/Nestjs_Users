import {
    Body, Controller, Delete, Get, Param, Patch, Post, Query
    , ParseIntPipe , ValidationPipe
} from '@nestjs/common';
import {UsersService} from './users.service'

import { createUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}
    /* 
    GET /users or /users?role=value&age=value
    POST /users
    GET /users/:id
    PUT /users/:id
    DELETE /users/:id
    */
   @Get()
    findAll(@Query('role') role?:'admin' | 'user') {
       return this.usersService.findAll(role)
    }
    @Post()
    create(@Body(ValidationPipe) user:createUserDto) {
        return this.usersService.create(user)
    }

    @Patch(':id')
    UpdateOne(@Param('id',ParseIntPipe) id:number , @Body() user:{name?:string,role?:'user'|'admin',age?:number}) {
        return this.usersService.UpdateOne(id,user)
    }

    
    @Delete(':id')
    DeleteOne(@Param('id',ParseIntPipe) id:number) {
        return this.usersService.DeleteOne(id)
    }

    
    @Get(':id')
    findOne(@Param('id',ParseIntPipe) id:number) {
        return this.usersService.findOne(id)
    }

}
