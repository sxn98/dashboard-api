import { ISession } from "connect-typeorm/out";
import { Index,PrimaryColumn,Column, Entity, DeleteDateColumn } from "typeorm";

@Entity()
export class SessionConfig implements ISession{ 
    @Index()
    @Column('bigint')
    expiredAt:number;

    @PrimaryColumn('varchar', {length:255})
    id:string='';

    @DeleteDateColumn()
    destroyedAt?: Date;

    @Column('text' )
    json='';

    



}