import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from 'socket.io'
import { AutoRoleConfig } from "src/typeorm/entities/AutoRoleConfig";
import { GuildConfig } from "src/typeorm/entities/GuildConfig";
import { DeleteResult } from "typeorm";

@WebSocketGateway()
export class WebsocketHandler{ // folosim websocket pentru a trimite schimbarea facuta din frontend catre bot

    @WebSocketServer()
    ws:Server

    @SubscribeMessage('guilds') // orice trimitem catre "guilds" va fi afisat aici   
    guildsHandler(@MessageBody() data:any){ // "data" reprezinta mesajul pe care il primim de pe aplicatia botului
        console.log(data)
    }

    guildPrefixUpdate(config:GuildConfig){  // trimitem noua configurare setata in frontend catre aplicatia botului
        console.log('Emitting')
        this.ws.emit('guildPrefixUpdate',config)
    }
    autoRoleAdd(config:AutoRoleConfig){
        console.log('Emitting autoRoleAdd')
        this.ws.emit('autoRoleAdd',config)
    }
    autoRoleDelete(config:AutoRoleConfig[]){
        console.log('Emitting autoRoleDelete')
        console.log(config)
        this.ws.emit('autoRoleDelete',config)
    }
}