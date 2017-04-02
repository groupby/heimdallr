import CRUDController from './crud';

export class Charts extends CRUDController {

  name: string;

  bindFormData() {
    return {
      name: this.name
    };
  }

  updateFormData(model: any) {
    Object.assign(this, model);
  }
}
