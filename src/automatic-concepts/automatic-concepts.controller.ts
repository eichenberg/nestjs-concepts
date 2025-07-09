import { Controller, Get } from '@nestjs/common';

@Controller('automatic-concepts')
export class AutomaticConceptsController {
  @Get()
  getAutomaticConcepts() {
    return 'List of automatic concepts';
  }
}
