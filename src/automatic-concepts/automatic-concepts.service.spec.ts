import { Test, TestingModule } from '@nestjs/testing';
import { AutomaticConceptsService } from './automatic-concepts.service';

describe('AutomaticConceptsService', () => {
  let service: AutomaticConceptsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutomaticConceptsService],
    }).compile();

    service = module.get<AutomaticConceptsService>(AutomaticConceptsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
