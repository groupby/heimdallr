import CRUDController from './crud';

export class Boards extends CRUDController {

  constructor() {
    super('boards');
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
