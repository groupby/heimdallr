import { Router, RouterConfiguration } from 'aurelia-router';
import IO from 'socket.io-client';

export const socket = IO('http://localhost:1337');

export class App {
  router: Router;

  constructor() {
    socket.connect();
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Heimdallr';
    config.map([
      { route: '', redirect: 'dashboard' },
      { route: 'dashboard', name: 'dashboard', moduleId: 'dashboard', nav: true, title: 'Dashboard' },
      { route: 'admin', name: 'admin', moduleId: 'admin', nav: true, title: 'Admin' },
      { route: 'logging', name: 'logging', moduleId: 'logging', nav: true, title: 'Logging' }
    ]);

    this.router = router;
  }
}
