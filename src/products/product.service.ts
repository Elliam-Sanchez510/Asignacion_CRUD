import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  ){}


  async create(createProductDto: CreateProductDto) {
    const product = await this.productRepository.create(createProductDto)
    await this.productRepository.save(product)

    return product;
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: string) {
    return this.productRepository.findOneBy({id});
  }

  async update(id: string, updateProductDto: CreateProductDto) {
    const findProduct = await this.findOne(id);
    const updatedProduct = await this.productRepository.merge(
      findProduct,
      updateProductDto
    )
    return this.productRepository.save(updatedProduct);
  }

  async remove(id: string) {
    const product = await this.findOne(id);
    await this.productRepository.remove(product);
    return'Produto eliminado satisfactoramente';
  }
}
