/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';
import { UtilityService } from 'src/shared/utility/utility.service';

@Controller('order')
export class OrderController {
    constructor(private readonly utilityService: UtilityService,
                private readonly globalHelperService: GlobalHelperService
    ) {};
    @Get('/shared')
    orderShare(): string {
        return this.utilityService.shareFunction();
    }

    @Get('/global')
    orderGlobal(): string {
        return this.globalHelperService.globalFunc();
    }
}
