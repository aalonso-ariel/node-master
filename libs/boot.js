module.exports = app => {

    app.listen(app.get("port"), () => {
            console.log(`Node Master API - porta ${app.get("port")}`)
        });
        
};