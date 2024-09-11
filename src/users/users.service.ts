import { Injectable } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { NotFoundException } from '@nestjs/common';


@Injectable()
export class UsersService {
    private users = [
        {
            id: 1,
            name: 'John Doe',
            age: 30,
            role: 'admin',
        },
        {
            id: 2,
            name: 'Jane Doe',
            age: 25,
            role: 'user',
        },
        {
            id: 3,
            name: 'Alice',
            age: 27,
            role: 'user',
        }
    ];

    findAll(role?:'user'|'admin'){
        if(role){
            return this.users.filter(user=>user.role == role)
        }
        return this.users
    }

    findOne(id:number){
        const user = this.users.find(user=>user.id == id)
        if(!user) throw new NotFoundException('User Not Found')
        return user
    }

    UpdateOne(id:number,updateData:{name?:string,role?:'user'|'admin',age?:number}){
       this.users = this.users.map(user=>{
        if(user.id == id){
            return {
                ...user,
                ...updateData
            }
            return user
        }
    })
    return this.findOne(id)

    }

    create(user:createUserDto){
        this.users.push({id:this.users.length++,...user})
        return this.users
    }

    DeleteOne(id:number){
        return this.users.filter(user=>user.id !== id)
    }


}
