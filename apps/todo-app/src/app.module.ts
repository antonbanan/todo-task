import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://yamlmongodb.default.svc.cluster.local:27017/task'),
    // http://todo-app.default.svc.cluster.local:3200/tasks
    // MongooseModule.forRoot('mongodb://127.0.0.1:27017/task'),
    TasksModule
  ],
})
export class AppModule {}
