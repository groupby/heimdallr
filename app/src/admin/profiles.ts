import CRUDController from './crud';

export class Profiles extends CRUDController {

  name: string;
  boards: any[];

  constructor() {
    super('profiles');
  }

  activate() {
    super.activate();
    this.client.get('/api/boards')
      .then((res) => res.content)
      .then((boards: any) => this.boards = boards);
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
