const { findByIdTask, findAllTask, createTask, updateTask, deleteTask} = require("../db/taskQuery");
const express = require("express")
const router = express.Router()


router.get('/tasks', async (req, res) => {
    const tasks = await findAllTask();
    res.json(tasks);
});

router.post('/tasks', async (req, res) => {
    const task = req.body;
    const newTask = await createTask(task);
    
    if(newTask.id) {
        res.sendStatus(201);
       return;  
    }
    res.sendStatus(400);
    
});

router.put('/tasks/:id', async (req, res) => { 
    const id = Number(req.params.id);
    const task = await updateTask(id, req.body);
    res.json(task);
});

router.delete('/tasks/:id', async (req, res) => {
    const id = Number(req.params.id);
    await deleteTask(id);
    res.status(204).send();
});

module.exports = {
    router
}