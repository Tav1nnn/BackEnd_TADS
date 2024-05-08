const express = require("express")
const router = express.Router()

let ltsTasks = [];

router.get('/tasks', (req, res) => {
    res.json(ltsTasks);
});

router.post('/tasks', (req, res) => {
    let task = req.body;
    task.id = ltsTasks.length + 1;
    ltsTasks.push(task);

    res.sendStatus(201);
});

router.put('/tasks/:id', (req, res) => { 
    const index = ltsTasks.findIndex(task => parseInt(req.params.id) === task.id);

    const { name, description, isDone } = req.body;

    if(index !== -1){
        ltsTasks[index] = {
            id: ltsTasks[index].id,
            name: name,
            description: description,
            isDone: isDone
        }
        res.sendStatus(200);
    }else {
        res.status(404).json({ error: 'Tarefa não encontrada' });
    }
});

router.delete('/tasks/:id', (req, res) => {
    const index = ltsTasks.findIndex(task => parseInt(req.params.id) === task.id);

    if(index !== -1) {
        ltsTasks.splice(index, 1);
        res.sendStatus(204);
    }else {
        res.status(404).json({ error: 'Tarefa não encontrada' });
    }
});

module.exports = {
    router
}