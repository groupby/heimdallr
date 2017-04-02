import { bindable } from 'aurelia-framework';
import ChartJs from 'chart.js';
import { socket } from '../app';

const DEFAULTS = { responsive: true, maintainAspectRatio: false };

export class Chart {

  @bindable data: any;
  @bindable type: string;
  chartHolder: HTMLDivElement;
  chart: ChartJs;

  attached() {
    this.chart = new ChartJs(this.chartHolder, { type: this.type, data: this.data.data, options: DEFAULTS });
    socket.on(`chart_updated:${this.data.id}`, (chart) => {
      this.chart.data.datasets = chart.data.datasets;
      this.chart.data.labels = chart.data.labels;
      this.chart.update();
    });
  }
}
