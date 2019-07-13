
module.exports = app => {
    app.db.sync().done(() => {
    app.listen(app.get("port"), () => {
            console.log(`Node Master API - porta ${app.get("port")}`)
        });
    });
};