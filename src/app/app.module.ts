import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ManualConceptsModule } from '../manual-concepts/manual-concepts.module';
import { AutomaticConceptsModule } from '../automatic-concepts/automatic-concepts.module';
import { MessagesModule } from 'src/messages/messages.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ManualConceptsModule,
    AutomaticConceptsModule,
    MessagesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'mysql',
      password: 'mysql',
      database: 'concepts_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      logging: true,
      autoLoadEntities: true, // Automatically load entities
      synchronize: true, //Do not use in production, only for development
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
