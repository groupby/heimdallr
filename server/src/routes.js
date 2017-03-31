import _ from 'koa-route';
import adapters from './controllers/adapters';
import profiles from './controllers/profiles';
import boards from './controllers/boards';
import charts from './controllers/charts';

export default [
  ...crudRoutes('adapters', adapters),
  ...crudRoutes('profiles', profiles),
  ...crudRoutes('boards', boards),
  ...crudRoutes('charts', charts)
];

function crudRoutes(route, controller) {
  return [
    _.get(`/api/${route}/:id`, controller.get),
    _.get(`/api/${route}`, controller.list),
    _.post(`/api/${route}`, controller.create),
    _.put(`/api/${route}/:id`, controller.update),
    _.delete(`/api/${route}/:id`, controller.remove)
  ];
}
