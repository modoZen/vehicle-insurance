import React, { FC } from 'react'
import './styles.sass'

type Props = {
  checked: boolean
  onClick: ()=>void
}

export const SwitchCustom:FC<Props> = ({  checked, onClick }) => {
  const classSwitch = checked?'switchCustom switchCustom--checked':'switchCustom';
  const classCircle = checked?'switchCustom__circle switchCustom__circle--checked':'switchCustom__circle';
  return (
    <button className={classSwitch} onClick={onClick}>
      <div className={classCircle}></div>
    </button>
  )
}
