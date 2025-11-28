import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserRolesController } from './user-roles/user-roles.controller';

@Module({
  imports: [],
  controllers: [AppController, UserRolesController],
  providers: [AppService],
})
export class AppModule {}
