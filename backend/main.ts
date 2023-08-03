import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import { INestApplication } from '@nestjs/common';

let app: INestApplication;

export async function getApp() {
  if (!app) {
    app = await NestFactory.create<INestApplication>(AppModule, {
      bodyParser: false,
    });

    app.setGlobalPrefix('api');

    await app.init();
  }

  return app;
}

export function bindHandler(req: any, res: any, next: any) {
  getApp().then((app) => {
    app.getHttpAdapter().getInstance().handle(req, res, next);
  });
}
