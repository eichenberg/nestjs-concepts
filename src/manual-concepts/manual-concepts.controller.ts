import { Controller, Get } from '@nestjs/common';

@Controller('manual-concepts')
export class ManualConceptsController {
  @Get()
  getManualConcepts() {
    return 'List of manual concepts';
  }
}
