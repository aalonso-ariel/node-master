import express from 'express';
import consign from 'consign';

const PORT = 3000;

//APP SETUP
const app = express();
app.set("json spaces", 4);

//APP CONSIGN ROUTING
consign()
    .include("routes")
    .into(app);

app.listen(PORT, () => console.log(`Node Master API - porta ${PORT}`));


