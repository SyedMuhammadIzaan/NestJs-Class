/* eslint-disable prettier/prettier */
import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from 'src/guards/roles/roles.decorator';
import { Role } from 'src/guards/roles/roles.enums';
import { RolesGuard } from 'src/guards/roles/roles.guard';

@Controller('user-roles')
export class UserRolesController {
  @Get('admin/')
  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  getAdminData(): string {
    return 'This Data only for Admin';
  }

  @Get('user/')
  @UseGuards(RolesGuard)
  @Roles(Role.User)
  getUserData(): string {
    return 'All can Access this Data';
  }
}
