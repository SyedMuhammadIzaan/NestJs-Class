import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAllProducts() {
    return this.productService.getProducts();
  }

  @Get(':id')
  getSingleProduct(@Param('id') id: string) {
    return this.productService.getProductById(Number(id));
  }
}
