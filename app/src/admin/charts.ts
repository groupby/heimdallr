import CRUDController from './crud';

export class Charts extends CRUDController {

  name: string;

  constructor() {
    super('charts');
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
