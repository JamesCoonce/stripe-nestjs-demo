import { ApiModelProperty } from '@nestjs/swagger';
import Stripe from 'stripe';

export class CreateCustomerDto implements Stripe.customers.ICustomerCreationOptions {
}