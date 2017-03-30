export class Dashboard {

  activeIndex: number = 0;
  groups: any[] = [
    { boards: [{ wide: true }, false, {}, {}] },
    { boards: [{ tall: true }, false, { tall: true }, false] },
    { boards: [{ wide: true }, false, { wide: true }, false] },
    { boards: [{ tall: true, wide: true }, false, false, false] },
    { boards: [{}, {}, {}, {}] },
    { boards: [{ tall: true }, {}, false, {}] }
  ];

  prev() {
    this.activeIndex = Math.max(0, this.activeIndex - 1);
  }

  next() {
    this.activeIndex = Math.min(this.groups.length - 1, this.activeIndex + 1);
  }

}
