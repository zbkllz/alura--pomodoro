import style from './Watch.module.scss'

interface Props{
  timer: number | undefined
}

export default function Watch({timer = 0} : Props){

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  const [minutoDezena, minutoUnidade] = String(minutes).padStart(2,'0');
  const [segundoDezena, segundoUnidade] = String(seconds).padStart(2,'0');

  return(
    <>
    <span className={style.relogioNumero}>{minutoDezena}</span>
    <span className={style.relogioNumero}>{minutoUnidade}</span>
    <span className={style.relogioDivisao}>:</span>
    <span className={style.relogioNumero}>{segundoDezena}</span>
    <span className={style.relogioNumero}>{segundoUnidade}</span>
    </>
  )
}