import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';

@Module({
  imports: [],
  controllers: [AppController, ProductController, CategoryController],
  providers: [AppService, ProductService, CategoryService],
})
export class AppModule {}
