"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ContactController = _interopRequireDefault(require("../controllers/ContactController"));

var _auth = _interopRequireDefault(require("../middleware/auth.middleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(router) {
  router.get("/api/contact/getGroupByContact", _ContactController["default"].getContactByGroupList);
  router.post("/api/contact", _auth["default"], _ContactController["default"].insert);
  router.get("/api/contact", _auth["default"], _ContactController["default"].getAll);
  router.get("/api/getContactBygroup/:id", _auth["default"], _ContactController["default"].getContactBygroup);
  router.get("/api/contact/:id", _auth["default"], _ContactController["default"].get);
  router.put("/api/contact/:id", _auth["default"], _ContactController["default"].update);
  router["delete"]("/api/deleteContactByGroup/:id", _ContactController["default"].deleteContactByGroup);
  router["delete"]("/api/contact/:id", _auth["default"], _ContactController["default"]["delete"]);
};

exports["default"] = _default;