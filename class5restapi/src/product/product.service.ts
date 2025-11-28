/* eslint-disable prettier/prettier */
import { Injectable, NotAcceptableException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { ProductType } from 'src/interface/product.interface';

@Injectable()
export class ProductService {
  products: ProductType[] = [
    {
      id: randomUUID(),
      name: 'Vivo S1',
      price: 35,
    },
    {
      id: randomUUID(),
      name: 'Iphone 14',
      price: 120,
    },
    {
      id: randomUUID(),
      name: 'Hu 300i Noise cancelling',
      price: 4000,
    },
  ];
  getAllProduct() {
    return this.products;
  }
  getProductById(id: string) {
    const product = this.products.find((product) => product.id === id);
    if (!product) throw new NotAcceptableException('Product not found');
    return product;
  }
  createProduct(data: { name: string; price: number }) {
    const newProduct = {
      id: randomUUID(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  //Update All Product
  updateProduct(id: string, data: { name: string; price: number }) {
    const findProductIndex = this.products.findIndex(
      (product) => product.id === id,
    );
    if (findProductIndex === -1)
      throw new NotAcceptableException('Product not found');
    this.products[findProductIndex] = {
      id,
      ...data,
    };
    return this.products[findProductIndex];
  }
  //Update particular Field
  updatePartialProduct(
    id: string,
    data: Partial<{ name: string; price: number }>,
  ) {
    const findProductIndex = this.products.findIndex(
      (product) => product.id === id,
    );
    if (findProductIndex === -1)
      throw new NotAcceptableException('Product not found');
    Object.assign(this.products[findProductIndex], data);
    return this.products[findProductIndex];
  }

  //Delete Product By Id
  deleteProductById(id: string) {
    const findIndex = this.products.findIndex((product) => product.id === id);
    if (findIndex === -1) throw new NotAcceptableException('Product not found');
    this.products.splice(findIndex, 1);
    return { message: 'Product Deleted Successfully' };
  }
}
