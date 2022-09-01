"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _GroupController = _interopRequireDefault(require("../controllers/GroupController"));

var _auth = _interopRequireDefault(require("../middleware/auth.middleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(router) {
  router.post("/api/uploadCsvByGroup", _auth["default"], _GroupController["default"].insertCsvByGroup); // router.post(`/api/group`, GroupController.insert);

  router.get("/api/groupInfo", _auth["default"], _GroupController["default"].groupInfo);
  router.get("/api/groupList", _auth["default"], _GroupController["default"].getAll);
  router.get("/api/group/:id", _auth["default"], _GroupController["default"].get);
  router.put("/api/group/:id", _auth["default"], _GroupController["default"].update);
  router["delete"]("/api/group/:id", _auth["default"], _GroupController["default"]["delete"]);
};

exports["default"] = _default;