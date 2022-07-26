import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import ic_phone from '../../assets/ic_phone.svg'
import logo_rimac from '../../assets/rimac_logo.svg'
import { useAppDispatch } from '../../store'
import { removeUser } from '../../store/slices/userSlice'
import './styles.sass'

interface Props{
  className: string
}

export const Header:FC<Props> = ({className}) => {
  const dispath = useAppDispatch();
  const handlerClick = ()=>{
    dispath(removeUser())
  }
  return (
    <header className={`header ${className}`}>
        <div className='header__left'>
            <img src={logo_rimac} alt="logo_rimac" onClick={handlerClick} />
        </div>
        <div className='header__right'>
            <span className='header__question'>¿Tienes alguna duda?</span>
            <span className='header__phone'>
              <img src={ic_phone} alt="phone_icon" />
              <span>(01) 411 6001</span> 
            </span>
        </div>
    </header>
  )
}