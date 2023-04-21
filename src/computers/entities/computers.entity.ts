import { Entity, PrimaryGeneratedColumn, Column  } from 'typeorm';

@Entity()
export class Computers {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'text'})
    storeName: string;

    @Column({type: 'text',})
    direction:string;

    @Column({type:'text'})
    email:string;

    @Column({type:'numeric'})
    cel:number;

    @Column({type:'text'})
    brands:string;

    @Column({type:'text'})
    supplier:string;

    @Column({type:'text'})
    categories:string;
    
}
