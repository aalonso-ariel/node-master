import express from 'express';

const PORT = 3000;

//APP SETUP
const app = express();
app.get("/", (req, res) => res.json({status: "Node Master API"}));

app.get("/tasks", (req,res) => {
    res.json({
        tasks: [
            {title: "Fazer compras"},
            {title: "Consertar o pc"}
        ]
    });
});

app.listen(PORT, () => console.log(`Node Master API - porta ${PORT}`));


