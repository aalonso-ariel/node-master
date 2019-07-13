"use strict";

var _express = _interopRequireDefault(require("express"));

var _consign = _interopRequireDefault(require("consign"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); //APP CONSIGN ROUTING

(0, _consign["default"])().include("db.js").then("models").then("libs/middle.js").then("routes").then("libs/boot.js").into(app);