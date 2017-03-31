import Koa from 'koa';
import koaStatic from 'koa-static';
import bodyparser from 'koa-bodyparser';
import routes from './routes';
import koaSocket from 'koa-socket';
import co from 'co';

const PORT = 1337;

export default class Heimdallr {

  constructor() {
    console.log("It's Heimdallr, honey!");
    this.app = new Koa();
    const io = new koaSocket();

    this.app.use(bodyparser({ detectJSON: () => true }));
    this.app.use(koaStatic('app/dist'));

    io.attach(this.app);
    io.on('connection', (ctx) => {
      console.log('Join event, id: ', ctx.socket.id)
    });
    io.on('message', (thing) => {
      console.log('message: ', thing);
    })
    setTimeout(() => {
      io.broadcast('stuff', { stuff: 'idk' });
      io.broadcast('message', { stuff: 'idk' });
    }, 5000)

    routes.forEach((route) => this.app.use(route));

    this.app.listen(PORT);
    console.log(`Heimdallr is listening on port ${PORT}`);
  }
}
