import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function start() {  
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log'],
  });

  app.enableCors();

  //swagger (API DOCS) -----------------------------------------------------------------------------
  const config = new DocumentBuilder()
    .setTitle('todo-list')
    .setDescription('REST API Documentation')
    .setVersion('1.0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  //swagger (API DOCS) -----------------------------------------------------------------------------

  const PORT = 3200;
  await app.listen(PORT, () => console.log(`SERVER START ON PORT = ${PORT}`));
}
start();
