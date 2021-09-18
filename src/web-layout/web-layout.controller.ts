import { Controller, Get, Res, Param, HttpStatus } from '@nestjs/common';
import { WebLayoutService } from './web-layout.service';
import {
  getNavigationButtons,
  getNavigationButtonsStyle,
  getNavagationButtonsScript,
  getScriptSections,
  getCssLinks,
  getIcons,
  getIconsStyle,
  getPreviewContents,
  ListMap,
} from './Utils/CommonUtils';
import ApiResponse from './Content/ApiResponse';

@Controller('web-layout')
export class WebLayoutController {
  constructor(private webLayoutService: WebLayoutService) {}

  @Get()
  async index(@Res() res): Promise<void> {
    this.renderPageByName(res, { name: ListMap['github'][0] });
  }

  @Get('/list')
  async getList(): Promise<ApiResponse> {
    return { content: ListMap['github'] };
  }

  @Get('/web-layout/:name')
  async renderPageByName(@Res() res, @Param() param): Promise<void> {
    const practiceName = param.name;
    this.webLayoutService.getPage(practiceName).subscribe({
      next: (v) => {
        let data = v.data;
        data = this.webLayoutService.insertCustomizedComponents(
          data,
          getNavigationButtons(),
          '<body>',
        );
        data = this.webLayoutService.insertCustomizedComponents(
          data,
          getIcons(),
          '<body>',
        );
        data = this.webLayoutService.insertCustomizedComponents(
          data,
          getNavigationButtonsStyle(),
          '<style type="text/css">',
        );
        data = this.webLayoutService.insertCustomizedComponents(
          data,
          getIconsStyle(),
          '<style type="text/css">',
        );
        data = this.webLayoutService.insertCustomizedComponents(
          data,
          getPreviewContents(),
          '<head>',
        );
        data = this.webLayoutService.insertCustomizedComponents(
          data,
          getScriptSections(),
          '<head>',
        );
        data = this.webLayoutService.insertCustomizedComponents(
          data,
          getCssLinks(),
          '<head>',
        );
        data = this.webLayoutService.insertCustomizedComponents(
          data,
          getNavagationButtonsScript(),
          '<script>',
        );
        //console.log(data);
        res.send(data);
      },
      error: (e) => res.render('notFound', { message: 'Not found!' }),
      complete: () => console.info('complete'),
    });
  }
}
