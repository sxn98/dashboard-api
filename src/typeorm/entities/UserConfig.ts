import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class UserConfig{ //cu acest config vom prelua informatiile celor care se logheaza pe site
    @PrimaryGeneratedColumn()
    ID:number;

    @Column({unique:true,name:'discord_id'})
    DiscordID:string;

}