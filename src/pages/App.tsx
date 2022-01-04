import React, {useState} from 'react';
import Form from '../components/Formulario'
import List from '../components/Lista'
import Chrono from '../components/Cronometro'
import style from './App.module.scss';
import { ITask } from '../types/tasks';



function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks(pastTasks => pastTasks.map(task => ({...task, selected:task.id === selectedTask.id ? true : false})))
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List tasks={tasks}
      selectTask={selectTask}/>
      <Chrono selected = {selected}/>
    </div>
  );
}

export default App;

// {
//   task: 'React',
//   time: '02:00:00'
// },
// {
//   task: 'JavaScript',
//   time: '01:00:00'
// },
// {
//   task: 'TypeScript',
//   time: '03:00:00'
// }