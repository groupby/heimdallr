import { HttpClient } from 'aurelia-fetch-client';
import { activationStrategy, NavModel } from 'aurelia-router';

const client = new HttpClient();

export class ChartGroup {

  charts: any[];

  activate(params: any, { settings: { charts } }: NavModel) {
    Promise.all(charts.map((chart) => chart.id)
      .map((id) => id != null && client.fetch(`/api/charts/${id}`)
        .then((res) => res.json())))
      .then((results) => results.map((data, index) => data ? { ...charts[index], ...data } : false))
      .then((processed) => this.charts = processed);
  }

determineActivationStrategy() {
  return activationStrategy.invokeLifecycle;
}
}
