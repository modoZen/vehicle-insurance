import { FC, PropsWithChildren } from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from '../Header'
import { Helmet } from 'react-helmet'
import './styles.scss'

interface Props{
  title: string,
  subtitle: string
}

export const Layout:FC<PropsWithChildren<Props>> = ({children, title, subtitle}) => {

    const {pathname} = useLocation()

    return (
    <div className={`App ${pathname==='/'?'App--home':'App--noHome'}`}>
        <Helmet>
          {title && <title> {title}</title>}
          {subtitle && <meta name='description' content={subtitle} />}
        </Helmet>
        <Header className={pathname==='/'?'header--home':'header--borderB'} />
        {children}
    </div>
  )
}
