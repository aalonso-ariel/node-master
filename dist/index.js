"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = 3000; //APP SETUP

var app = (0, _express["default"])();
app.get("/", function (req, res) {
  return res.json({
    status: "Node Master API"
  });
});
app.listen(PORT, function () {
  return console.log("Node Master API - porta ".concat(PORT));
});