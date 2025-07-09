import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class AutomaticConceptsService {
  @Get()
  getListOfAutomaticConcepts(): string[] {
    return [
      'Automatic Concept 1',
      'Automatic Concept 2',
      'Automatic Concept 3',
      'Automatic Concept 4',
      'Automatic Concept 5',
    ];
  }
}
