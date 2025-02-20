/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService,
              private readonly utilityService: UtilityService,
              private readonly globalHelperService:GlobalHelperService
  ) {}

    @Get() //localhost:3000/product
    productFunc(): string {
    return this.productService.productFunction();
    }

    @Get('/productjson') //localhost:3000/product/productjson
    myJSON() {
    return this.productService.myProduct();
    }

    @Get('/shared') //localhost:3000/product/shared
    sharedFunc() : string {
      return this.utilityService.shareFunction();
    }
    
    @Get('/global') //localhost:3000/product/global
    globalFunction(): string {
      return this.globalHelperService.globalFunc();
    }

}
