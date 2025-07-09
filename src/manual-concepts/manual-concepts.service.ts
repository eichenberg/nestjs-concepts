import { Injectable } from '@nestjs/common';

@Injectable()
export class ManualConceptsService {
  getListOfManualConcepts(): string[] {
    return [
      'Manual Concept 1',
      'Manual Concept 2',
      'Manual Concept 3',
      'Manual Concept 4',
      'Manual Concept 5',
    ];
  }
}
