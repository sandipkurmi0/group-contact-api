import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

class ContactModel {
  // eslint-disable-next-line class-methods-use-this
  initSchema() {
    const schema = new Schema(
      {
        name: {
          type: String,
          default: null,
        },
        email: {
          type: String,
          default: null,
        },
        phone: {
          type: Number,
          default: null,
        },
        status: {
          type: String,
          default: null,
        },
        groupId: {
          type: Schema.Types.ObjectId,
          ref: 'groups',
          default: null,
        },
      },
      {
        timestamps: true,
      },
    );
    schema.plugin(uniqueValidator);
    mongoose.model('contacts', schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model('contacts');
  }

  // eslint-disable-next-line class-methods-use-this
  getModel() {
    return mongoose.model('contacts');
  }
}

export default ContactModel;
