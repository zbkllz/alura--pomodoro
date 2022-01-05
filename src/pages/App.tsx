import { useState } from 'react'
import Form from '../components/Formulario'
import List from '../components/Lista'
import Chrono from '../components/Cronometro'
import style from './App.module.scss'
import { ITask } from '../types/tasks'

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [selected, setSelected] = useState<ITask>()

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask)
    setTasks(pastTasks =>
      pastTasks.map(task => ({
        ...task,
        selected: task.id === selectedTask.id ? true : false
      }))
    )
  }

  function finishTask() {
    if (selected) {
      setSelected(undefined)
      setTasks(pastTasks =>
        pastTasks.map(task => {
          if (task.id === selected.id) {
            return { ...task, selected: false, complete: true }
          }
          return task
        })
      )
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Chrono selected={selected} finishTask={finishTask} />
    </div>
  )
}

export default App
