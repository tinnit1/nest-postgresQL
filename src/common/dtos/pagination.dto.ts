import { Type } from "class-transformer";
import { IsOptional, IsPositive, Min, IsNumber } from 'class-validator';

export class PaginationDto {
    @IsOptional()
    @IsPositive()
    @Type(() => Number)
    limit: number;

    @IsOptional()
    @IsNumber()
    @Min(0)
    @Type(() => Number)
    offset: number;
}