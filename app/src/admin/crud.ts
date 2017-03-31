import { HttpClient } from 'aurelia-http-client';

abstract class CRUDController {

  client: HttpClient = new HttpClient();
  editing: boolean = false;
  newModel: boolean = false;
  editingIndex: number;
  models: any[];

  constructor(public model: string) { }

  activate() {
    this.updateModels();
  }

  updateModels() {
    this.client.get(`/api/${this.model}`)
      .then((res) => res.content)
      .then((models: any) => this.models = models);
  }

  onCreate() {
    this.newModel = true;
    this.editing = true;
  }

  onSave() {
    const data = this.bindFormData();
    const request = this.newModel ?
      this.client.post(`/api/${this.model}`, data) :
      this.client.put(`/api/${this.model}/${this.editingIndex}`, data);

    request.then(() => {
      this.onCancel();
      this.updateModels();
    });
  }

  onCancel() {
    this.editing = false;
    this.newModel = false;
  }

  onEdit(model: any) {
    this.updateFormData(model);
    this.editing = true;
    this.editingIndex = model.id;
  }

  onDelete(model: any) {
    if (!this.editing || model.id !== this.editingIndex) {
      this.client.delete(`/api/${this.model}/${model.id}`)
        .then(() => {
          console.log('model successfully deleted');
          this.updateModels();
        });
    }
  }

  abstract bindFormData(): any;
  abstract updateFormData(model: any);
}

export default CRUDController;
