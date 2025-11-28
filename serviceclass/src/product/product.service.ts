import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products = [
    {
      id: 1,
      name: 'Samsung',
      category: 'Mobile',
      price: 15000,
    },
    {
      id: 2,
      name: 'Dell Core i5 8gen',
      category: 'Laptop',
      price: 25000,
    },
    {
      id: 3,
      name: 'A4 Tech Hu',
      category: 'Headphone',
      price: 4000,
    },
  ];

  getAllProducts() {
    return this.products;
  }
  getProductById(id: number) {
    return this.products.find((products) => products.id === id);
  }
}
