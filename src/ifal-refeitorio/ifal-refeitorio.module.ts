import { Module } from '@nestjs/common';
import { IfalRefeitorioController } from './ifal-refeitorio.controller';
import { IfalRefeitorioService } from './ifal-refeitorio.service';

@Module({
  controllers: [IfalRefeitorioController],
  providers: [IfalRefeitorioService]
})
export class IfalRefeitorioModule {}
