import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from './student/student.controller';
import { UserController } from './user/user.controller';
import { ProductController } from './product/product.controller';

@Module({
  imports: [],
  controllers: [AppController, StudentController, UserController, ProductController],
  providers: [AppService],
})
export class AppModule {}
