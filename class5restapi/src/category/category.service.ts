/* eslint-disable prettier/prettier */
import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CategoryType } from 'src/interface/category.interface';

@Injectable()
export class CategoryService {
  private categories:CategoryType[] = [
    {
      id: randomUUID(),
      name: 'Electronics',
    },
    {
      id: randomUUID(),
      name: 'Hardware',
    },
    {
      id: randomUUID(),
      name: 'Clothing',
    },
  ];
  getAllCategories() {
    return this.categories;
  }
  getCategoryById(id: string) {
    const category = this.categories.find((category) => category.id === id);
    if (!category) throw new NotFoundException('Category Not Found');
    return category;
  }
  createCategory(data: { name: string }) {
    if (!data) {
      throw new NotFoundException('Invalid Data');
    }
    const newCategory = {
      id: randomUUID(),
      ...data,
    };
    return newCategory;
  }
  updateCategoryById(id: string, data: { name: string }) {
    if (!id || !data) {
      throw new NotFoundException('Invalid Data');
    }
    const fetchCategoryIndex = this.categories.findIndex(
      (category) => category.id === id,
    );
    if (fetchCategoryIndex === -1) {
      throw new NotFoundException('Category Not Found');
    }
    this.categories[fetchCategoryIndex] = {
      id,
      ...data,
    };
    return this.categories[fetchCategoryIndex];
  }
  updatePartialCategoryById(id: string, data: { name?: string }) {
    if (!id || !data) {
      throw new NotFoundException('Invalid Data');
    }
    const fetchCategoryIndex = this.categories.findIndex(
      (category) => category.id === id,
    );
    if (fetchCategoryIndex === -1) {
      throw new NotFoundException('Category Not Found');
    }
    Object.assign(this.categories[fetchCategoryIndex], data);
    return this.categories[fetchCategoryIndex];
  }

  deleteCategoryById(id: string) {
    const fetchCategoryIndex = this.categories.findIndex(
      (category) => category.id === id,
    );  
    if (fetchCategoryIndex === -1) {
      throw new NotFoundException('Category Not Found');
    }
    this.categories.splice(fetchCategoryIndex, 1);
    return { message: 'Category Deleted Successfully' };
  }
}
