import { NotFoundException } from '@nestjs/common';
export declare class MenuNotFoundException extends NotFoundException {
    constructor(id: string);
}
