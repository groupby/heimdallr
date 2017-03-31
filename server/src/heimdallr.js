import Koa from 'koa';
import koaStatic from 'koa-static';
import bodyparser from 'koa-bodyparser';
import routes from './routes';

const PORT = 1337;

export default class Heimdallr {

  constructor() {
    console.log("It's Heimdallr, honey!");
    this.app = new Koa();

    this.app.use(bodyparser({ detectJSON: () => true }));
    this.app.use(koaStatic('app/dist'));
    routes.forEach((route) => this.app.use(route));

    this.app.listen(PORT);
    console.log(`Heimdallr is listening on port ${PORT}`);
  }
}
