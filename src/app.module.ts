import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/user.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'ec2-34-202-54-225.compute-1.amazonaws.com',
      port: 5432,
      username: 'rdyvmlqzmqzqal',
      password: '549816d44927e88c626ed9d36226208463798c7625b9e0bcd2fcb5f7a181ed5c',
      database: 'd80sv1vm6qfctv',
      models: [],
    }),
  ],
})
export class AppModule {}