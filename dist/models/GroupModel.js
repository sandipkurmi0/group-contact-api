"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

var _mongooseUniqueValidator = _interopRequireDefault(require("mongoose-unique-validator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GroupModel = /*#__PURE__*/function () {
  function GroupModel() {
    _classCallCheck(this, GroupModel);
  }

  _createClass(GroupModel, [{
    key: "initSchema",
    // eslint-disable-next-line class-methods-use-this
    value: function initSchema() {
      var schema = new _mongoose.Schema({
        groupName: {
          type: String // required: [true, 'Please add a Groupname'],

        },
        totalContact: {
          type: Number,
          "default": 0
        },
        totalPending: {
          type: Number,
          "default": 0
        },
        totalPaid: {
          type: Number,
          "default": 0
        },
        totalApproved: {
          type: Number,
          "default": 0
        }
      }, {
        timestamps: true
      });
      schema.plugin(_mongooseUniqueValidator["default"]);

      _mongoose["default"].model('groups', schema); // //Reverse populate with virtuals
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
  }, {
    key: "getInstance",
    value: function getInstance() {
      this.initSchema();
      return _mongoose["default"].model('groups');
    } // eslint-disable-next-line class-methods-use-this

  }, {
    key: "getModel",
    value: function getModel() {
      return _mongoose["default"].model('groups');
    }
  }]);

  return GroupModel;
}();

var _default = GroupModel;
exports["default"] = _default;