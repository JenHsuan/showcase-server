import { Test, TestingModule } from '@nestjs/testing';
import { WebLayoutService } from '../web-layout.service';

describe('WebLayoutService', () => {
  let service: WebLayoutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebLayoutService],
    }).compile();

    service = module.get<WebLayoutService>(WebLayoutService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
