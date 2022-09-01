"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Controller2 = _interopRequireDefault(require("./Controller"));

var _GroupModel = _interopRequireDefault(require("../models/GroupModel"));

var _GroupService = _interopRequireDefault(require("../services/GroupService"));

var _ContactModle = _interopRequireDefault(require("../models/ContactModle"));

var _ContactService = _interopRequireDefault(require("../services/ContactService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var groupService = new _GroupService["default"](new _GroupModel["default"]().getModel()); //contact

var contactService = new _ContactService["default"](new _ContactModle["default"]().getModel());

var ContactController = /*#__PURE__*/function (_Controller) {
  _inherits(ContactController, _Controller);

  var _super = _createSuper(ContactController);

  function ContactController(service, contactService) {
    var _this;

    _classCallCheck(this, ContactController);

    _this = _super.call(this, service);
    _this.contactService = contactService;
    _this.insertCsvByGroup = _this.insertCsvByGroup.bind(_assertThisInitialized(_this));
    _this.groupInfo = _this.groupInfo.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ContactController, [{
    key: "insertCsvByGroup",
    value: function () {
      var _insertCsvByGroup = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var _req$body, groupName, csvArray, response, allArrayData, allArrayDatares;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _req$body = req.body, groupName = _req$body.groupName, csvArray = _req$body.csvArray;
                console.log(groupName);
                console.log(csvArray);
                _context.next = 5;
                return this.service.insertCsvByGroup(groupName);

              case 5:
                response = _context.sent;
                res.status(response.statusCode).send(response);

                if (!response.data) {
                  _context.next = 14;
                  break;
                }

                allArrayData = csvArray.map(function (item) {
                  return {
                    name: item.Name,
                    email: item.Email,
                    phone: item.Phone,
                    status: item.Status,
                    groupId: response.data._id
                  };
                });
                console.log(allArrayData);
                _context.next = 12;
                return this.contactService.insert(allArrayData);

              case 12:
                allArrayDatares = _context.sent;
                console.log(allArrayDatares);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function insertCsvByGroup(_x, _x2) {
        return _insertCsvByGroup.apply(this, arguments);
      }

      return insertCsvByGroup;
    }()
  }, {
    key: "groupInfo",
    value: function () {
      var _groupInfo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var response;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.service.groupInfo(req.query);

              case 2:
                response = _context2.sent;
                return _context2.abrupt("return", res.status(response.statusCode).send(response));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function groupInfo(_x3, _x4) {
        return _groupInfo.apply(this, arguments);
      }

      return groupInfo;
    }()
  }]);

  return ContactController;
}(_Controller2["default"]);

var _default = new ContactController(groupService, contactService);

exports["default"] = _default;