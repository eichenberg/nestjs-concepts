import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Automatically remove properties that do not have decorators
      forbidNonWhitelisted: true, // Throw an error if non-whitelisted properties are present
      transform: false, // Automatically transform payloads to DTO instances
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
