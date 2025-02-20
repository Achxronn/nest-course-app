/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';
import { UtilityService } from 'src/shared/utility/utility.service';

@Controller('chat')
export class ChatController {
    constructor(private readonly utilityService: UtilityService,
                private readonly globalHelperService: GlobalHelperService
    ) {};
    @Get('/shared')
    chatShare(): string {
        return this.utilityService.shareFunction();
    }

    @Get('/global')
    chatGlobal(): string {
        return this.globalHelperService.globalFunc();
    }
}
