import { useView } from 'aurelia-framework';
import CRUDController from './crud';

@useView('elements/model-list.html')
export class Profiles extends CRUDController {

  constructor() {
    super('profiles');
  }
}
