import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type :'text'})
    name: string;

    @Column({type :'numeric'})
    price: number;

    @Column({type :'numeric'})
    stock: number;

    @Column({type :'text'})
    category: string;

    @Column({type :'text'})
    description: string;

    @Column({type :'text'})
    warranty: string;

    @Column({type :'numeric'})
    generation: number;
  
  
}
