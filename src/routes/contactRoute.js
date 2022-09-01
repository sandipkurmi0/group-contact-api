import ContactController from '../controllers/ContactController';
import auth from '../middleware/auth.middleware';

export default (router) => {
  router.get(
    `/api/contact/getGroupByContact`,
    ContactController.getContactByGroupList,
  );
  router.post(`/api/contact`, auth, ContactController.insert);
  router.get(`/api/contact`, auth, ContactController.getAll);
  router.get(
    `/api/getContactBygroup/:id`,
    auth,
    ContactController.getContactBygroup,
  );
  router.get(`/api/contact/:id`, auth, ContactController.get);
  router.put(`/api/contact/:id`, auth, ContactController.update);
  router.delete(
    `/api/deleteContactByGroup/:id`,
    ContactController.deleteContactByGroup,
  );
  router.delete(`/api/contact/:id`, auth, ContactController.delete);
};
