import { Test, TestingModule } from '@nestjs/testing';
import { CustomersController } from './customers.controller';

describe('Customers Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [CustomersController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: CustomersController = module.get<CustomersController>(CustomersController);
    expect(controller).toBeDefined();
  });
});
