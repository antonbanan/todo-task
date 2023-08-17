import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongodb.default.svc.cluster.local:27017/task'),
    // MongooseModule.forRoot('mongodb://172.24.0.10:27017/task'),
    // MongooseModule.forRoot('mongodb://127.0.0.1:27017/task'),
    TasksModule
  ],
})
export class AppModule {}
