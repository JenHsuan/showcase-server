import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Redirect('/web-layout')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  getHello(): void {}
}
