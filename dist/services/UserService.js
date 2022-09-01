"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Service2 = _interopRequireDefault(require("./Service"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

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

var UserService = /*#__PURE__*/function (_Service) {
  _inherits(UserService, _Service);

  var _super = _createSuper(UserService);

  function UserService(model) {
    _classCallCheck(this, UserService);

    return _super.call(this, model);
  } //login user


  _createClass(UserService, [{
    key: "login",
    value: function () {
      var _login = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(item) {
        var user, results, token;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.model.findOne({
                  email: item.email
                });

              case 3:
                user = _context.sent;

                if (!user) {
                  _context.next = 16;
                  break;
                }

                _context.next = 7;
                return _bcrypt["default"].compareSync(item.password, user.password);

              case 7:
                results = _context.sent;

                if (!results) {
                  _context.next = 13;
                  break;
                }

                token = _jsonwebtoken["default"].sign({
                  id: user._id,
                  email: user.email
                }, process.env.JWT_SECRET_KEY, {
                  expiresIn: '7d'
                });
                return _context.abrupt("return", {
                  error: false,
                  message: 'login successfully',
                  statusCode: 200,
                  token: token,
                  data: user
                });

              case 13:
                return _context.abrupt("return", {
                  error: 'You entered the wrong email or password',
                  statusCode: 401,
                  data: null
                });

              case 14:
                _context.next = 17;
                break;

              case 16:
                return _context.abrupt("return", {
                  error: 'You entered the wrong email or password',
                  statusCode: 401,
                  data: null
                });

              case 17:
                _context.next = 22;
                break;

              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", {
                  error: _context.t0.message,
                  statusCode: 400,
                  data: null
                });

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 19]]);
      }));

      function login(_x) {
        return _login.apply(this, arguments);
      }

      return login;
    }() //change password with current password

  }, {
    key: "changePassword",
    value: function () {
      var _changePassword = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(item, id) {
        var user, results, hash, update;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.model.findOne({
                  _id: id
                });

              case 3:
                user = _context2.sent;

                if (!user) {
                  _context2.next = 21;
                  break;
                }

                _context2.next = 7;
                return _bcrypt["default"].compareSync(item.currentPassword, user.password);

              case 7:
                results = _context2.sent;

                if (!results) {
                  _context2.next = 18;
                  break;
                }

                _context2.next = 11;
                return _bcrypt["default"].hashSync(item.password, 10);

              case 11:
                hash = _context2.sent;
                _context2.next = 14;
                return this.model.findByIdAndUpdate(user._id, {
                  password: hash
                });

              case 14:
                update = _context2.sent;
                return _context2.abrupt("return", {
                  error: false,
                  message: 'password changed successfully',
                  statusCode: 200,
                  data: update
                });

              case 18:
                return _context2.abrupt("return", {
                  error: 'You entered wrong currant password',
                  statusCode: 400,
                  data: null
                });

              case 19:
                _context2.next = 22;
                break;

              case 21:
                return _context2.abrupt("return", {
                  error: 'You entered wrong currant password',
                  statusCode: 400,
                  data: null
                });

              case 22:
                _context2.next = 27;
                break;

              case 24:
                _context2.prev = 24;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", {
                  error: _context2.t0.message,
                  statusCode: 400,
                  data: null
                });

              case 27:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 24]]);
      }));

      function changePassword(_x2, _x3) {
        return _changePassword.apply(this, arguments);
      }

      return changePassword;
    }()
  }]);

  return UserService;
}(_Service2["default"]);

var _default = UserService;
exports["default"] = _default;