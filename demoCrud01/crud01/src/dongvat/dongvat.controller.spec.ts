import { Test, TestingModule } from '@nestjs/testing';
import { DongvatController } from './dongvat.controller';
import { DongvatService } from './dongvat.service';

describe('DongvatController', () => {
  let controller: DongvatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DongvatController],
      providers: [DongvatService],
    }).compile();

    controller = module.get<DongvatController>(DongvatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
