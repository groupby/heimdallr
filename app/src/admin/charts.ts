import CRUDController from './crud';

export class Charts extends CRUDController {

  constructor() {
    super('charts');
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
