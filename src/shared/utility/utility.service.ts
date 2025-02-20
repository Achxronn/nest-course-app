/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilityService {
    shareFunction() : string {
        return 'use share funtion';
    }
}
