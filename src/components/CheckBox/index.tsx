import React, { FC } from 'react';
import './styles.sass';

type Props = {
    children?: React.ReactNode
}

export const CheckBox:FC<Props> = ({children}) => {
  return (
    <div className='checkboxCustom'>
        {children}
    </div>
  )
}
