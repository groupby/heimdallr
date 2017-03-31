import { HttpClient } from 'aurelia-fetch-client';
import { Router, RouterConfiguration } from 'aurelia-router';

const client = new HttpClient();

export class Dashboard {

  router: Router;
  boards: any[];
  activeIndex: number = 0;

  async configureRouter(config: RouterConfiguration, router: Router) {
    await client.fetch('/api/boards')
      .then((res) => <any>res.json())
      .then((boards) => this.boards = boards);

    const routes: any[] = this.boards.map(({ name, charts }, index) => ({
      name,
      route: name,
      moduleId: 'elements/chart-group',
      nav: true,
      settings: { charts }
    }));
    routes.unshift({ route: '', redirect: routes[0].route });

    config.map(routes);

    this.router = router;
  }

  prev() {
    const newIndex = Math.max(0, this.activeIndex - 1);
    if (newIndex !== this.activeIndex) {
      this.activeIndex = newIndex;
      this.navigate();
    }
  }

  next() {
    const newIndex = Math.min(this.router.navigation.length - 1, this.activeIndex + 1);
    if (newIndex !== this.activeIndex) {
      this.activeIndex = newIndex;
      this.navigate();
    }
  }

  navigate() {
    this.router.navigate(`#/dashboard/${this.router.navigation[this.activeIndex].relativeHref}`);
  }
}
