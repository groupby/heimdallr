import CRUDController from './crud';

export class Boards extends CRUDController {

  charts: any[];
  name: string;

  constructor() {
    super('boards');
  }

  activate() {
    super.activate();
    this.client.get('/api/charts')
      .then((res) => res.content)
      .then((charts: any) => this.charts = charts);
  }

  bindFormData() {
    return {
      name: this.name
    };
  }

  updateFormData(model: any) {
    Object.assign(this, model);
  }
}
