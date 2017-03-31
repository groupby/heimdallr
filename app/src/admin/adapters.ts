import CRUDController from './crud';

export class Adapters extends CRUDController {

  name: string;
  url: string;

  constructor() {
    super('adapters');
  }

  bindFormData() {
    return {
      name: this.name,
      ur: this.url
    };
  }

  updateFormData(model: any) {
    Object.assign(this, model);
  }
}
