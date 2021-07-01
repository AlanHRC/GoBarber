import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '@modules/appointments/infra/http/controllers/AppointmentsController';
import ProviderAppointentsController from '@modules/appointments/infra/http/controllers/ProviderAppointentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();
const providerAppointentsController = new ProviderAppointentsController();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      provider_id: Joi.string().uuid().required(),
      date: Joi.date(),
    },
  }),
  appointmentsController.create,
);
appointmentsRouter.get('/me', providerAppointentsController.index);

export default appointmentsRouter;
