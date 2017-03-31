import crudify from './crud';

const PROFILES = [
  { name: 'main' },
  { name: 'devops' },
  { name: 'global' }
];

export default crudify(PROFILES);
