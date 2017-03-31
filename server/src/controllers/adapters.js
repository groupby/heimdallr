import crudify from './crud';

const ADAPTERS = [
  { name: 'Blip Server' },
  { name: 'Stackdriver' },
  { name: 'Internal Elasticsearch' }
];

export default crudify(ADAPTERS);
