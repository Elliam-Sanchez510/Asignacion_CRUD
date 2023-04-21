import { Test, TestingModule } from '@nestjs/testing';
import { ComputersService } from './computers.service';
import { ComputersController } from './computers.controller';


describe('computersController', () => {
  let controller: ComputersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComputersController],
      providers: [ComputersService],
    }).compile();

    controller = module.get<ComputersController>(ComputersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});