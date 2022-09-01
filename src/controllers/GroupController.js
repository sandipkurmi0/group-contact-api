import Controller from './Controller';
import Group from '../models/GroupModel';
import GroupService from '../services/GroupService';
const groupService = new GroupService(new Group().getModel());

//contact
import Contact from '../models/ContactModle';
import ContactService from '../services/ContactService';
const contactService = new ContactService(new Contact().getModel());

class ContactController extends Controller {
  constructor(service, contactService) {
    super(service);
    this.contactService = contactService;
    this.insertCsvByGroup = this.insertCsvByGroup.bind(this);
    this.groupInfo = this.groupInfo.bind(this);
  }

  async insertCsvByGroup(req, res) {
    const { groupName, csvArray } = req.body;
    console.log(groupName);
    console.log(csvArray);
    const response = await this.service.insertCsvByGroup(groupName);
    res.status(response.statusCode).send(response);

    if (response.data) {
      var allArrayData = csvArray.map((item) => {
        return {
          name: item.Name,
          email: item.Email,
          phone: item.Phone,
          status: item.Status,
          groupId: response.data._id,
        };
      });
      console.log(allArrayData);
      const allArrayDatares = await this.contactService.insert(allArrayData);
      console.log(allArrayDatares);
    }

    // return res.status(response.statusCode).send(response);
  }

  async groupInfo(req, res) {
    const response = await this.service.groupInfo(req.query);
    // console.log('=====================');
    // console.log(response);
    // const contactArrayResponse = await this.contactService.getAll(req.query);
    // console.log(contactArrayResponse);
    return res.status(response.statusCode).send(response);
  }
}

export default new ContactController(groupService, contactService);
