import React, { useState } from 'react'
import { ITask } from '../../types/tasks'
import Button from '../Botao'
import style from './Form.module.scss'
import { v4 as uuidv4 } from 'uuid'

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

function Form({ setTasks }: Props) {
  const [task, setTask] = useState('')
  const [time, setTime] = useState('00:00')

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setTasks(oldTasks => [
      ...oldTasks,
      { task, time, selected: false, complete: false, id: uuidv4() }
    ])

    setTask('')
    setTime('00:00')
  }

  return (
    <form className={style.novaTarefa} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Adicione novo objeto de estudo</label>
        <input
          type="text"
          name="task"
          value={task}
          onChange={event => setTask(event.target.value)}
          id="task"
          placeholder="O que você quer estudar"
          required
        />
        <div className={style.inputContainer}>
          <label htmlFor="time">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            value={time}
            onChange={event => setTime(event.target.value)}
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button type="submit">Adicionar</Button>
      </div>
    </form>
  )
}

export default Form
