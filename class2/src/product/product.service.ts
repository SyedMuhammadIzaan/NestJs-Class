import { Injectable } from '@nestjs/common';
import { ProductDataType } from 'src/interface/product.type';

@Injectable()
export class ProductService {
  private Product:ProductDataType[] = [
    {
      id: 1,
      name: 'Iphone',
      category: 'Mobile',
    },
    {
      id: 2,
      name: 'Vivo',
      category: 'Mobile',
    },
    {
      id: 3,
      name: 'Dell Core i5',
      category: 'Laptop',
    },
    {
      id: 4,
      name: 'Hu 300i Noise Cancelling',
      category: 'Headphone',
    },
  ];

  getProductById(id:number){
    return this.Product.find((product)=> product.id === id)
  }

  getProducts(){
    return this.Product
  }
}
