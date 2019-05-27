import express from 'express';

const PORT = 3000;

//APP SETUP
const app = express();
app.get("/", (req, res) => res.json({status: "Node Master API"}));

app.listen(PORT, () => console.log(`Node Master API - porta Franschico ${PORT}`));
