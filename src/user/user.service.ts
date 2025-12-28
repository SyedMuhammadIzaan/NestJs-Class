import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository:Repository<User>
    ){}

    async create(userData:Partial<User>):Promise<User>{
        console.log("user data",userData)
        if(!userData){
            throw new NotAcceptableException("Incomplete Information");
        }
        const user=this.userRepository.create(userData);
        return this.userRepository.save(user);
    }

    async getAll():Promise<User[]>{
        return this.userRepository.find();
    }


}
