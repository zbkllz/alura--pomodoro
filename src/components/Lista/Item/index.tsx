import { ITask } from '../../../types/tasks'
import style from './Item.module.scss'

interface Props extends ITask {
  selectTask: (taskSelected: ITask) => void
}

export default function Item({
  task,
  time,
  selected,
  complete,
  id,
  selectTask
}: Props) {
  return (
    <li
      className={`${style.item} ${selected ? style.itemSelecionado : ''} ${
        complete ? style.itemCompletado : ''
      }`}
      onClick={() => selectTask({ task, time, selected, complete, id })}
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {complete && <span className={style.concluido} aria-label="complete"></span>}
    </li>
  )
}
