import { Injectable } from '@nestjs/common';
import { get } from 'http';

@Injectable()
export class CategoryService {

    private categories=[
        {
            id:1,
            name:"Mobile",
        },
        {
            id:2,
            name:"Laptop",
        },
        {
            id:3,
            name:"Headphone",
        },
        {
            id:4,
            name:"Tablet",
        },
        {
            id:5,
            name:"Smart Watch",
        },
    ]

    getAllCategories(){
        return this.categories;
    }

    getCategoryById(id:number){
        return this.categories.find((category)=> category.id === id);
    }
}
