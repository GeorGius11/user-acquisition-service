import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  createUser(email: string, marketingData: Record<string, any>): Promise<User> {
    const user = this.userRepository.create({ email, marketingData });
    return this.userRepository.save(user);
  }
}
