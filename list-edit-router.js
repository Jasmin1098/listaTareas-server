const express = require('express');
const router = express.Router();

// Arreglo de tareas
const tasks = [
    {
      id: "01",
      isCompleted: false,
      description: "Sacar a caminar al perro"
    },
    {
      id: "02",
      isCompleted: true,
      description: "Comprar en el supermercado"
    },
    {
      id: "03",
      isCompleted: true,
      description: "Sacar la basura"
    },
  ];
  
  router.post('/create', (req, res) => {
    const { id, isCompleted, description } = req.body;
    const newTask = { id, isCompleted, description };
    tasks.push(newTask);
    res.json(newTask);
  });

  router.delete('/delete/:id', (req, res) => {
    const taskId = req.params.id;
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    
    if (taskIndex !== -1) {
      const deletedTask = tasks.splice(taskIndex, 1)[0];
      res.json(deletedTask);
    } else {
      res.status(404).json({ message: "Tarea no encontrada" });
    }
  });

  router.put('/update/:id', (req, res) => {
    const taskId = req.params.id;
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    
    if (taskIndex !== -1) {
      const updatedTask = { ...tasks[taskIndex], ...req.body };
      tasks[taskIndex] = updatedTask;
      res.json(updatedTask);
    } else {
      res.status(404).json({ message: "Tarea no encontrada" });
    }
  });
  
  module.exports = {router, tasks};