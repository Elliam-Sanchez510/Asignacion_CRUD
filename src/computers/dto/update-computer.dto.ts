import { PartialType } from '@nestjs/mapped-types';
import { CreateComputersDto } from './create-computer.dto.js';

export class UpdateComputersDto extends PartialType(CreateComputersDto) {}
