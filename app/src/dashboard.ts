import { Router, RouterConfiguration } from 'aurelia-router';

export class Dashboard {

  router: Router;
  activeIndex: number = 0;
  groups: any[] = [
    { name: 'board1', boards: [{ wide: true }, false, {}, {}] },
    { name: 'board2', boards: [{ tall: true }, { tall: true }, false, false] },
    { name: 'board3', boards: [{ wide: true }, false, { wide: true }, false] },
    { name: 'board4', boards: [{ tall: true, wide: true }, false, false, false] },
    { name: 'board5', boards: [{}, {}, {}, {}] },
    { name: 'board6', boards: [{ tall: true }, {}, false, {}] }
  ];

  configureRouter(config: RouterConfiguration, router: Router) {
    config.map(this.groups.map(({ name, boards }, index) => ({
      route: index === 0 ? ['', name] : name,
      moduleId: 'elements/chart-group',
      nav: true,
      settings: { boards }
    })));

    this.router = router;
  }

  prev() {
    this.activeIndex = Math.max(0, this.activeIndex - 1);
    this.navigate();
  }

  next() {
    this.activeIndex = Math.min(this.groups.length - 1, this.activeIndex + 1);
    this.navigate();
  }

  navigate() {
    this.router.navigate(this.router.navigation[this.activeIndex].href);
  }
}
