import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IfalRefeitorioModule } from './ifal-refeitorio/ifal-refeitorio.module';

@Module({
  imports: [IfalRefeitorioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
