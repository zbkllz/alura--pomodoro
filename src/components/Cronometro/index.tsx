import Botao from '../Botao'
import Watch from './Relogio'
import style from './Chrono.module.scss'

export default function Chrono() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Watch />
      </div>
      <Botao>Iniciar</Botao>
    </div>
  )
}
