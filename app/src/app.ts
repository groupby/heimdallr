import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Heimdallr';
    config.map([
      { route: '', redirect: 'dashboard' },
      { route: 'dashboard', name: 'dashboard', moduleId: 'dashboard', nav: true, title: 'Dashboard' },
      { route: 'admin', name: 'admin', moduleId: 'admin', nav: true, title: 'Admin' },
      { route: 'logging', name: 'logging', moduleId: 'logging', nav: true, title: 'Logging'}
    ]);

    this.router = router;
  }
}
