import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(
    @Body('email') email: string,
    @Body('marketingData') marketingData: Record<string, any>,
  ) {
    console.log(email);
    console.log(marketingData);
    return this.userService.createUser(email, marketingData);
  }
}
