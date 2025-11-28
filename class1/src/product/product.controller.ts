import { Controller, Get } from '@nestjs/common';

@Controller('/product')
export class ProductController {
  @Get()
  findProduct(): string {
    return 'IPhone 15 Por Max';
  }
  @Get('/:id')
  findAllProduct(): string {
    return 'Product Found Succesfully';
  }
}
