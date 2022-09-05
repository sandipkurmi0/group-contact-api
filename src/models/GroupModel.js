import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

class GroupModel {
  // eslint-disable-next-line class-methods-use-this
  initSchema() {
    const schema = new Schema(
      {
        groupName: {
          type: String,
          // required: [true, 'Please add a Groupname'],
        },
        totalContact: {
          type: Number,
          default: 0,
        },
        totalPending: {
          type: Number,
          default: 0,
        },
        totalPaid: {
          type: Number,
          default: 0,
        },
        totalApproved: {
          type: Number,
          default: 0,
        },
      },
      {
        timestamps: true,
      },
    );
    schema.plugin(uniqueValidator);
    mongoose.model('groups', schema);

    // //Reverse populate with virtuals
    // schema.virtual('contactCount', {
    //   ref: 'contacts', //The Model to use
    //   localField: '_id', //Find in Model, where localField
    //   foreignField: 'groupId', // is equal to foreignField
    //   justOne: false,
    //   count: true,
    // });
    // schema.set('toObject', { virtuals: true });
    // schema.set('toJSON', { virtuals: true });
  }

  getInstance() {
    this.initSchema();
    return mongoose.model('groups');
  }

  // eslint-disable-next-line class-methods-use-this
  getModel() {
    return mongoose.model('groups');
  }
}

export default GroupModel;
