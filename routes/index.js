module.exports = app => {

    app.get("/", (req, res) => {
        res.json({status: "Node Master API - Teste gabriel"})
    });
    
};