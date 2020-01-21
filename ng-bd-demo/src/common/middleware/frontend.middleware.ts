import {Injectable, NestMiddleware, Res, Req, Next} from '@nestjs/common';
import * as path from 'path';

const resolvePath = (file: string) => path.resolve(`../dist/angular-widget/${file}`);

@Injectable()
export class FrontendMiddleware implements NestMiddleware {
  use(@Req() req, @Res() res, @Next() next) {
    console.log('Request...');
    const { url } = req;
    console.log(url);
    if (url.indexOf('/app') === 0) {
      res.sendFile(resolvePath('index.html'));
    } else {
      next();
    }
  }
}
