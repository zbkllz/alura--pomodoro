import React from 'react'
import Button from '../Botao'
import style from './Form.module.scss'

class Form extends React.Component {
  render() {
    return (
      <form className={style.novaTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="task">Adicione novo objeto de estudo</label>
          <input
            type="text"
            name="task"
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
              id="tempo"
              min="00:00:00"
              max="01:30:00"
              required
            />
          </div>
          <Button>Adicionar</Button>
        </div>
      </form>
    )
  }
}

export default Form
