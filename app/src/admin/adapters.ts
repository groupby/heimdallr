import CRUDController from './crud';

export class Adapters extends CRUDController {

  constructor() {
    super('adapters');
  }

  bindFormData() {
    return {
      // name: this.name
    };
  }

  updateFormData(model: any) {
    Object.assign(this, model);
  }
}
