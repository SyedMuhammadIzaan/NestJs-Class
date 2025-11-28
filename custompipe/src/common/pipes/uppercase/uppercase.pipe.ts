/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UppercasePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('Value and Meta Data', value, metadata);
    if(!value.name){
      return null
    }
    const {name}= value;
    // eslint-disable-next-line prettier/prettier
    return name.toUpperCase();
  }
}
