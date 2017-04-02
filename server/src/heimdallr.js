import Koa from 'koa';
import koaStatic from 'koa-static';
import bodyparser from 'koa-bodyparser';
import routes from './routes';
import koaSocket from 'koa-socket';

const PORT = 1337;
export const io = new koaSocket();

export default class Heimdallr {

  constructor() {
    console.log("It's Heimdallr, honey!");
    this.app = new Koa();

    this.app.use(bodyparser({ detectJSON: () => true }));
    this.app.use(koaStatic('app/dist'));
    routes.forEach((route) => this.app.use(route));

    io.attach(this.app);

    this.app.listen(PORT);
    console.log(`Heimdallr is listening on port ${PORT}`);
  }
}
