import { PartialType } from '@nestjs/mapped-types';
import { CreateComputersDto } from './create-computer.dto';

export class UpdateComputersDto extends PartialType(CreateComputersDto) {}
