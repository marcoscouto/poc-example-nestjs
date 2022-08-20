import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './infra/database.module';
import { TaskController } from './task/task.controller';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [
    AppController,
    TaskController
  ],
  providers: [AppService],
})
export class AppModule {}
