import { HttpClient } from 'aurelia-fetch-client';

const client = new HttpClient();

export default class CRUDController {

  models: any[];

  constructor(public model: string) { }

  activate() {
    client.fetch(`/api/${this.model}`)
      .then((res) => res.json())
      .then((models: any) => this.models = models);
  }

}
