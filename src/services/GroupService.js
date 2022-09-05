import Service from './Service';

class GroupService extends Service {
  constructor(model) {
    super(model);
    this.insertCsvByGroup = this.insertCsvByGroup.bind(this);
    this.groupInfo = this.groupInfo.bind(this);
  }

  async insertCsvByGroup(groupName, csvArray) {
    try {
      const TotalContact = csvArray.length;

      const TotalPaid = csvArray.filter((item) => item.Status === 'Paid')
        .length;

      const TotalPending = csvArray.filter((item) => item.Status === 'Pending')
        .length;

      const TotalApproved = csvArray.filter(
        (item) => item.Status === 'Approved',
      ).length;

      const groupData = {
        groupName: groupName,
        totalContact: TotalContact,
        totalPending: TotalPending,
        totalPaid: TotalPaid,
        totalApproved: TotalApproved,
      };

      console.log(groupData);
      const items = await this.model.create(groupData);

      return {
        error: false,
        message: 'request successfullly',
        statusCode: 200,
        data: items,
      };
    } catch (error) {
      return {
        error: error.message,
        statusCode: 400,
        data: null,
      };
    }
  }

  async groupInfo() {
    try {
      const items = await this.model.find().populate('contactCount');

      return {
        error: false,
        message: 'request Successfully',
        statusCode: 200,
        data: items,
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

export default GroupService;
