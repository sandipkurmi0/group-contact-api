import Service from './Service';

class ContactService extends Service {
  constructor(model) {
    super(model);
    this.getContactByGroupList = this.getContactByGroupList.bind(this);
    this.getContactBygroup = this.getContactBygroup.bind(this);
    this.deleteContactByGroup = this.deleteContactByGroup.bind(this);
  }

  async getContactByGroupList() {
    try {
      const data = await this.model
        .find()
        .populate({ path: 'groupId', select: 'groupName' });
      return {
        error: false,
        message: 'request successfullly',
        statusCode: 200,
        data: data,
      };
    } catch (error) {
      return {
        error: error.message,
        statusCode: 400,
        data: null,
      };
    }
  }

  async getContactBygroup(id) {
    try {
      const data = await this.model.find({ groupId: id });
      // .populate({ path: 'groupId', select: 'groupName' });

      return {
        error: false,
        message: 'request successfullly',
        statusCode: 200,
        data: data,
      };
    } catch (error) {
      return {
        error: error.message,
        statusCode: 400,
        data: null,
      };
    }
  }

  async deleteContactByGroup(id) {
    try {
      const removContacteData = await this.model.deleteMany({ groupId: id });

      return {
        error: false,
        message: 'request successfullly',
        statusCode: 200,
        removContacteData,
      };
    } catch (error) {
      return {
        error: error.message,
        statusCode: 400,
        data: null,
      };
    }
  }
}

export default ContactService;
