const express = require('express');
const app = express();
const port = 3000;

const {router: taskRouter} = require('./list-edit-router');
const {tasks} = require('./list-edit-router');

app.use(express.json());
app.use('/tasks', taskRouter);

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.get('/tasks/completo', (req, res) => {
  const tareaComp = tasks.filter(task => task.isCompleted);
  res.json(tareaComp);
});

app.get('/tasks/incompleto', (req, res) => {
  const tareaIncomp = tasks.filter(task => !task.isCompleted);
  res.json(tareaIncomp);
});


app.listen(port, () => {
  console.log(`Servidor Express corriendo en el puerto ${port}`);
});