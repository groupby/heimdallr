import CRUDController from './crud';

export class Boards extends CRUDController {

  allCharts: any[];
  charts: any[];
  someCharts: any[];
  name: string;

  constructor() {
    super('boards');
  }

  activate() {
    super.activate();
    this.client.get('/api/charts')
      .then((res) => res.content)
      .then((allCharts: any) => this.allCharts = allCharts);
  }

  hasChart(chart: any) {
    return (this.charts || []).map((val) => val.id)
      .includes(chart.id);
  }

  bindFormData() {
    console.log(this.someCharts);
    return {
      name: this.name,
      charts: this.charts
    };
  }

  updateFormData(model: any) {
    Object.assign(this, model);
  }
}
