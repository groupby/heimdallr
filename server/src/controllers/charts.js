import crudify from './crud';
import { io } from '../heimdallr';



let DUMMY_DATA = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'My First dataset',
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1,
    data: [65, 59, 80, 81, 56, 55, 40],
  }]
};

const CHARTS = [
  { name: 'Global QPS', data: DUMMY_DATA },
  { name: 'UK QPS', data: DUMMY_DATA },
  { name: 'US QPS', data: DUMMY_DATA },
  { name: 'StoreFront Builds', data: DUMMY_DATA },
  { name: 'Wisdom Builds', data: DUMMY_DATA },
  { name: 'New Support Tickets', data: DUMMY_DATA }
];

const controller = crudify(CHARTS);

let count = 0;

function loop() {
  const rand = Math.round(Math.random() * (3000 - 500)) + 5000;
  setTimeout(function() {
    // change data
    DUMMY_DATA.labels.push(count += 1);
    DUMMY_DATA.datasets[0].data.push(Math.floor(Math.random() * 100))

    const ctx = {};
    controller.list(ctx);
    ctx.body.forEach((chart) => {
      io.broadcast(`chart_updated:${chart.id}`, chart);
    });
    loop();
  }, rand);
}

loop();

export default controller;
