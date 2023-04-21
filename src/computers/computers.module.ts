import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Computers } from './entities/computers.entity';
import { ComputersService } from './computers.service';
import { ComputersController } from './computers.controller';

@Module({
  imports:[TypeOrmModule.forFeature([Computers])],
  controllers: [ComputersController],
  providers: [ComputersService]
})
export class ComputersModule {}