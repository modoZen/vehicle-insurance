import { FC, PropsWithChildren } from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from '../Header'
import './styles.scss'

export const Layout:FC<PropsWithChildren> = ({children}) => {

    const {pathname} = useLocation()

    return (
    <div className={`App ${pathname==='/'?'App--home':'App--noHome'}`}>
        <Header className={pathname==='/'?'header--home':'header--borderB'} />
        {children}
    </div>
  )
}
