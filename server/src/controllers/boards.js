import crudify from './crud';

const BOARDS = [
  { name: 'QPS' },
  { name: 'StoreFront Builds' }
];

export default crudify(BOARDS);
