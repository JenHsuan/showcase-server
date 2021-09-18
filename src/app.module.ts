import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebLayoutModule } from './web-layout/web-layout.module';

@Module({
  imports: [WebLayoutModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
