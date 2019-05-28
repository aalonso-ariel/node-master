"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = 3000; //APP SETUP

var app = (0, _express["default"])();
app.set("json spaces", 4); //APP ROUTES

app.get("/", function (req, res) {
  return res.json({
    status: "Node Master API"
  });
});
app.get("/tasks", function (req, res) {
  res.json({
    tasks: [{
      title: "Fazer compras"
    }, {
      title: "Consertar o pc"
    }]
  });
});
app.listen(PORT, function () {
  return console.log("Node Master API - porta ".concat(PORT));
});