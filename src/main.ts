import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from "./app.module";
import { join } from "path";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
// eslint-disable-next-line prettier/prettier
import { notFoundFilter } from './filters/notFoundFiter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, "..", "public"));
  app.setBaseViewsDir(join(__dirname, "..", "src", "views"));
  app.setViewEngine("hbs");
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new notFoundFilter(httpAdapter));

  const config = new DocumentBuilder()
    .setTitle("Web layout")
    .setDescription("API description")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
