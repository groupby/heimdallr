import { useView } from 'aurelia-framework';
import CRUDController from './crud';

@useView('elements/model-list.html')
export class Adapters extends CRUDController {

  constructor() {
    super('adapters');
  }
}
