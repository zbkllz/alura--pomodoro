import Botao from '../Botao'
import Watch from './Relogio'
import style from './Chrono.module.scss'
import { timeToSeconds } from '../../common/utils/time'
import { ITask } from '../../types/tasks'
import { useEffect, useState } from 'react'

interface Props {
  selected: ITask | undefined
  finishTask: () => void
}

export default function Chrono({ selected, finishTask }: Props) {
  // console.log('conversion:', timeToSeconds('01:01:01'))

  const [timer, setTimer] = useState<number>()

  useEffect(() => {
    if (selected?.time) {
      setTimer(timeToSeconds(selected.time))
    }
  }, [selected])

  function regressive(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTimer(counter - 1)
        return regressive(counter - 1)
      }
      finishTask()
    }, 1000)
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Watch timer={timer} />
      </div>
      <Botao onClick={() => regressive(timer)}>Começar</Botao>
    </div>
  )
}
