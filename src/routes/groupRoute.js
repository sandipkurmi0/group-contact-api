import GroupController from '../controllers/GroupController';
import auth from '../middleware/auth.middleware';

export default (router) => {
  router.post(`/api/uploadCsvByGroup`, auth, GroupController.insertCsvByGroup);
  // router.post(`/api/group`, GroupController.insert);
  router.get(`/api/groupInfo`, auth, GroupController.groupInfo);
  router.get(`/api/groupList`, auth, GroupController.getAll);
  router.get(`/api/group/:id`, auth, GroupController.get);
  router.put(`/api/group/:id`, auth, GroupController.update);
  router.delete(`/api/group/:id`, auth, GroupController.delete);
};
