import { Test, TestingModule } from '@nestjs/testing';
import { AutomaticConceptsController } from './automatic-concepts.controller';

describe('AutomaticConceptsController', () => {
  let controller: AutomaticConceptsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutomaticConceptsController],
    }).compile();

    controller = module.get<AutomaticConceptsController>(
      AutomaticConceptsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
