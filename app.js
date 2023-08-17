const express = require('express');
const app = express();
const port = 3000;

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

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Servidor Express corriendo en el puerto ${port}`);
});