import { Module } from '@nestjs/common';
import { WebLayoutController } from './web-layout.controller';
import { WebLayoutService } from './web-layout.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [WebLayoutController],
  providers: [WebLayoutService],
})
export class WebLayoutModule {}
