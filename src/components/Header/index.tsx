import React from 'react'
import ic_phone from '../../assets/ic_phone.svg'
import logo_rimac from '../../assets/logo_rimac.svg'
import './styles.sass'

export const Header = () => {
  return (
    <header className='header'>
        <div className='header-left'>
            <img src={logo_rimac} alt="logo_rimac" />
        </div>
        <div className='header-right'>
            <span className='question'>¿Tienes alguna duda?</span>
            <span className='phone'><img src={ic_phone} alt="phone_icon" /><span>(01) 411 6001</span> </span>
        </div>
    </header>
  )
}