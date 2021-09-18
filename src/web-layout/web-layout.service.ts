import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { getRealUrl } from './Utils/CommonUtils';

@Injectable()
export class WebLayoutService {
  constructor(private httpService: HttpService) {}

  getPage(practiceName: string): Observable<AxiosResponse<string>> {
    return this.httpService.get(getRealUrl(practiceName, 'github'));
  }

  getList() {
    return this.httpService.get(
      'https://raw.githubusercontent.com/JenHsuan/web-layout-practice/master/index.json',
    );
  }
  insertCustomizedComponents(
    htmlString: string,
    customizedComponent: string[],
    target: string,
  ): string {
    const fragments = htmlString.split(target);
    fragments.splice(fragments.length - 1, 0, target);
    customizedComponent.forEach((component) => {
      fragments.splice(fragments.length - 1, 0, component);
    });
    const data = fragments.join('');
    return data;
  }
}
