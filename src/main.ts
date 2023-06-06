import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import { EntityManager, getRepository } from 'typeorm';
import { SessionConfig } from './typeorm/entities/SessionConfig';
import { TypeormStore } from 'connect-typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const sessionRepository=app.get(EntityManager).getRepository(SessionConfig);


  app.setGlobalPrefix('api'); // toate rutele vor fi mapate cu /api inaintea lor

  app.use(
    session({
      secret: process.env.SECRET_ID,
      resave: false,
      saveUninitialized:false,
      
      cookie:{
        maxAge: 86400000,
      },
      store: new TypeormStore().connect(sessionRepository)
      

    }));

  app.enableCors({
    origin:['http://localhost:3000'],
    credentials: true,
  })
  app.use(passport.initialize());
  app.use(passport.session());
  try{
    await app.listen(process.env.PORT);
    console.log(`running on PORT ${process.env.PORT}`);
    
  }catch(err){
    console.log(err);
  }
  
}
bootstrap();
