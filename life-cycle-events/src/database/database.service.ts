/* eslint-disable prettier/prettier */
import { Injectable, OnModuleInit, OnApplicationShutdown } from '@nestjs/common';

@Injectable()
export class DatabaseService implements OnModuleInit, OnApplicationShutdown {
  private isConnected: boolean = false;

  onModuleInit() {
    this.isConnected = true;
    console.log("DB Connected");
  }

  onApplicationShutdown(signal?: string) {
    this.isConnected = false;
    console.log(`DB Disconnect ${signal}`);
  }

  getStatus() {
    return this.isConnected ? "Connected" : "Disconnected";
  }
}
