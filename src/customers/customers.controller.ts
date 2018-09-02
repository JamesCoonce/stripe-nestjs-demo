import {
  Controller,
  Get,
  Response,
  HttpStatus,
  Param,
  Body,
  Post,
  Request,
  Patch,
  Delete,
} from '@nestjs/common';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import Stripe from 'stripe';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/createCustomer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  public async getCustomers(@Response() res) {
    const customers = await this.customersService.findAllCustomers();
    return res.status(HttpStatus.OK).json(customers);
  }

  @Get('/:id')
  public async getCustomer(@Response() res, @Param() param) {
    const customer = await this.customersService.findCustomer(param.id);
    return res.status(HttpStatus.OK).json(customer);
  }

  @Post()
  public async createCustomer(
    @Response() res,
    @Body() createCustomerDTO: CreateCustomerDto,
  ) {
    const customer = await this.customersService.createCustomer(
      createCustomerDTO,
    );
    return res.status(HttpStatus.OK).json(customer);
  }

  @Patch('/:id')
  public async updateCustomer(@Param() param, @Response() res, @Body() body) {
    const customer = await this.customersService.updateCustomer(param.id, body);
    return res.status(HttpStatus.OK).json(customer);
  }

  @Delete('/:id')
  public async deleteCustomer(@Param() param, @Response() res){
      const confirmation = await this.customersService.deleteCustomer(param.id);
      return res.status(HttpStatus.OK).json(confirmation);
  }
}
