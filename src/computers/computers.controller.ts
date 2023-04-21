import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComputersService } from './computers.service';
import { UpdateComputersDto } from './dto/update-computer.dto';
import { CreateComputersDto } from './dto/create-computer.dto';

@Controller('Computers')
export class ComputersController {
  constructor(private readonly computersService: ComputersService) {}

  @Post()
  create(@Body() createComputersDto: CreateComputersDto) {
    return this.computersService.create(createComputersDto);
  }

  @Get()
  findAll() {
    return this.computersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.computersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComputersDto: UpdateComputersDto) {
    return this.computersService.update(id, updateComputersDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.computersService.remove(id);
  }
}