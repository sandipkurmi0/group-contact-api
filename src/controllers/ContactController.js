import Controller from './Controller';
import Contact from '../models/ContactModle';
import ContactService from '../services/ContactService';
const contactService = new ContactService(new Contact().getInstance());

import Group from '../models/GroupModel';
import GroupService from '../services/GroupService';
const groupService = new GroupService(new Group().getInstance());

class ContactController extends Controller {
  constructor(service, groupService) {
    super(service);
    this.groupService = groupService;
    this.getContactByGroupList = this.getContactByGroupList.bind(this);
    this.getContactBygroup = this.getContactBygroup.bind(this);
    this.deleteContactByGroup = this.deleteContactByGroup.bind(this);
  }

  async getContactByGroupList(req, res) {
    const response = await this.service.getContactByGroupList(req);
    return res.status(response.statusCode).send(response);
  }

  async getContactBygroup(req, res) {
    const response = await this.service.getContactBygroup(req.params.id);
    return res.status(response.statusCode).send(response);
  }

  async deleteContactByGroup(req, res) {
    const response = await this.service.deleteContactByGroup(req.params.id);
    res.status(response.statusCode).send(response);
    if (response) {
      const resDeletcontact = await this.groupService.delete(req.params.id);
      console.log(resDeletcontact);
    }
  }
}

export default new ContactController(contactService, groupService);
