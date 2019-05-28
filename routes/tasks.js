module.exports = app => {
    //Create depencency on Model
    const Tasks = app.models.tasks;
    
    //Proceeds for route creation
    app.get("/tasks", (req,res) => {
        Tasks.findAll({}, (tasks) => {
            res.json({tasks: tasks});
        });
    });

};