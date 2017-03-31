import crudify from './crud';

const BOARDS = [{
    name: 'QPS',
    charts: [
      { wide: true, id: 2 },
      false, { id: 3 }, { id: 1 }
    ]
  },
  {
    name: 'StoreFront Builds',
    charts: [
      { id: 2 },
      { tall: true, id: 3 },
      { id: 4 },
      false
    ]
  }
];

export default crudify(BOARDS);
