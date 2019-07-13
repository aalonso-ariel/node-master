import express from 'express';
import consign from 'consign';

const app = express();

//APP CONSIGN ROUTING
consign()
    .include("db.js")
    .then("models")
    .then("libs/middle.js")
    .then("routes")
    .then("libs/boot.js")
    .into(app);