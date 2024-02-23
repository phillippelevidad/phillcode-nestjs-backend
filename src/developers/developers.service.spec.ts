import { Test, TestingModule } from '@nestjs/testing';
import { DevelopersService } from './developers.service';

describe('DevelopersService', () => {
  let service: DevelopersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DevelopersService],
    }).compile();

    service = module.get<DevelopersService>(DevelopersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
