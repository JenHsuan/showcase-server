import { Controller, Get, Res, Param } from '@nestjs/common';
import { WebLayoutService } from './web-layout.service';
import ApiResponse from './Content/ApiResponse';

@Controller('web-layout')
export class WebLayoutController {
  constructor(private webLayoutService: WebLayoutService) {}

  @Get()
  async index(@Res() res): Promise<void> {
    this.renderPageByName(res, {
      name: this.webLayoutService.getList('github').content[0],
    });
  }

  @Get('/list')
  async getList(): Promise<ApiResponse> {
    return this.webLayoutService.getList('github');
  }

  @Get('/web-layout/:name')
  async renderPageByName(@Res() res, @Param() param): Promise<void> {
    this.webLayoutService.getPage(param.name, 'github').subscribe({
      next: (v) => res.send(this.webLayoutService.addWebLayoutLayer(v.data)),
      error: (e) => res.render('notFound'),
      complete: () => console.info('complete'),
    });
  }
}
