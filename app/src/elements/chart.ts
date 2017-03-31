import { bindable } from 'aurelia-framework';
import ChartJs from 'chart.js';

const DEFAULTS = { responsive: true, maintainAspectRatio: false };

export class Chart {

  @bindable data: any;
  @bindable type: string;
  chartHolder: HTMLDivElement;
  chart: ChartJs;

  attached() {
    this.chart = new ChartJs(this.chartHolder, { type: this.type, data: this.data, options: DEFAULTS });
  }
}
