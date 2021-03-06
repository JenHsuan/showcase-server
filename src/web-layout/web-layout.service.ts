import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { AxiosResponse } from "axios";
import { Observable } from "rxjs";
import { getRealUrl } from "./Utils/CommonUtils";
import {
  getNavigationButtons,
  getNavigationButtonsStyle,
  getNavagationButtonsScript,
  getScriptSections,
  getCssLinks,
  getIcons,
  getSideMenu,
  getIconsStyle,
  getPreviewContents,
  getCircleGroups,
  getCirclesStyle,
  getSideMenuStyle,
  getAlaymanIcon,
  ListMap,
} from "./Utils/CommonUtils";
import ApiResponse from "./Content/ApiResponse";

@Injectable()
export class WebLayoutService {
  constructor(private httpService: HttpService) {}

  getPage(practiceName: string, key: string): Observable<AxiosResponse<string>> {
    return this.httpService.get(getRealUrl(practiceName, key));
  }

  getList(key: string): ApiResponse {
    return { content: ListMap[key] };
  }

  insertCustomizedComponents(htmlString: string, customizedComponent: string[], target: string): string {
    const fragments = htmlString.split(target);
    fragments.splice(fragments.length - 1, 0, target);
    customizedComponent.forEach((component) => fragments.splice(fragments.length - 1, 0, component));
    return fragments.join("");
  }

  addWebLayoutLayer(htmlString: string): string {
    let data = htmlString;
    data = this.insertCustomizedComponents(
      data,
      [...getAlaymanIcon(), ...getPreviewContents(), ...getScriptSections(), ...getCssLinks()],
      "<head>",
    );
    data = this.insertCustomizedComponents(
      data,
      [...getSideMenu(), ...getNavigationButtons(), ...getIcons(), ...getCircleGroups()],
      "<body>",
    );
    data = this.insertCustomizedComponents(
      data,
      [...getNavigationButtonsStyle(), ...getIconsStyle(), ...getCirclesStyle(), ...getSideMenuStyle()],
      '<style type="text/css">',
    );
    data = this.insertCustomizedComponents(data, getNavagationButtonsScript(), "<script>");
    return data;
  }
}
