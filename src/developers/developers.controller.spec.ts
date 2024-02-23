import { Test, TestingModule } from '@nestjs/testing';
import { DevelopersController } from './developers.controller';
import { DevelopersService } from './developers.service';

describe('DevelopersController', () => {
  let controller: DevelopersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DevelopersController],
      providers: [DevelopersService],
    }).compile();

    controller = module.get<DevelopersController>(DevelopersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
