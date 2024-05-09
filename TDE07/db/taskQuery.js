const { prisma } = require("./prisma");

const findByIdTask = async (id) => {
    return await prisma.task.findUnique({
        where: {
            id: id
        }
    });
}

const findAllTask = async () => {
    return await prisma.task.findMany();
}

const createTask = async (task) => {
    return await prisma.task.create({
       data: task
    });
}

const updateTask = async (id, task) => {
    return await prisma.task.update({
        task,
        where: {
            id: id
        }
    });
}

const deleteTask = async (id) => {
    return await prisma.task.delete({
        where: {
            id: id
        }
    });
}

module.exports = {
    findByIdTask,
    findAllTask,
    createTask,
    updateTask,
    deleteTask
}

