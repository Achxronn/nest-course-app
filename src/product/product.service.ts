/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    
    productFunction() : string {
        return 'we use product service';
    }

    myProduct() {
        return {
            name : 'Andrew',
            Age: '13',
            hobby: 'play game',
        }
    }


}
