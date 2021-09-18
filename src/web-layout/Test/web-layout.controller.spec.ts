import { Test, TestingModule } from '@nestjs/testing';
import { WebLayoutController } from '../web-layout.controller';

describe('WebLayoutController', () => {
  let controller: WebLayoutController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebLayoutController],
    }).compile();

    controller = module.get<WebLayoutController>(WebLayoutController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
