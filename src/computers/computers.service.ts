import { Injectable } from '@nestjs/common';
import { CreateComputersDto } from './dto/create-computer.dto';
import { UpdateComputersDto } from './dto/update-computer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Computers } from './entities/computers.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ComputersService {
  constructor(
    @InjectRepository(Computers)
    private readonly computersRepository: Repository<Computers>
  ){}

  async create(createComputersDto: CreateComputersDto) {
    const computers = await this.computersRepository.create(createComputersDto);
    await this.computersRepository.save(computers);
    return computers;
  }

  findAll() {
    return this.computersRepository.find();
  }

  findOne(id: string) {
    return this.computersRepository.findOneBy({id});
  }

  async update(id: string, updateComputerstDto: UpdateComputersDto) {
    const computers = await this.findOne(id);
    const updateComputers = await this.computersRepository.merge(
      computers,
      updateComputerstDto
      );
    return this.computersRepository.update(id,updateComputers);
  }

  async remove(id: string) {
    const computers = await this.findOne(id);
    await this.computersRepository.remove(computers);
    return 'eliminado satisfactoriamente' 
  }
}
