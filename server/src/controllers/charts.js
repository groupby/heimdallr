import crudify from './crud';

const CHARTS = [
  { name: 'Global QPS' },
  { name: 'UK QPS' },
  { name: 'US QPS' },
  { name: 'StoreFront Builds' },
  { name: 'Wisdom Builds' },
  { name: 'New Support Tickets' }
];

export default crudify(CHARTS);
