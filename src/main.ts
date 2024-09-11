import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyLoggerService } from './my-logger/my-logger.service';
import { SwaggerModule , DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    // bufferLogs:true,
  });
  const config = new DocumentBuilder()
    .setTitle('Collaborative Note-Taking App')
    .setDescription('The API documentation for the Collaborative Note-Taking app')
    .setVersion('1.0')
    .addTag('notes') // Optional: tags can be useful to organize endpoints
    .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  // app.useLogger(app.get(MyLoggerService))
  app.setGlobalPrefix('v1')
  app.enableCors()
  await app.listen(3000);
}
bootstrap();
