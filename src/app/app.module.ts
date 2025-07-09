import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ManualConceptsModule } from '../manual-concepts/manual-concepts.module';
import { AutomaticConceptsModule } from '../automatic-concepts/automatic-concepts.module';

@Module({
  imports: [ManualConceptsModule, AutomaticConceptsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
