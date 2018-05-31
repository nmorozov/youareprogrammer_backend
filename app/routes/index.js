import serviceRoutes from './service_routes';
import specialistRoutes from './specialist_routes';

export default function (app, db) {
  serviceRoutes(app, db);
  specialistRoutes(app, db);
}
