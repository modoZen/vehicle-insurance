import { FC, PropsWithChildren } from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from '../Header'

interface Props{}

export const Layout:FC<PropsWithChildren> = ({children}) => {


    const {pathname} = useLocation()

    return (
    <div className={`App ${pathname==='/'?'App-home':'App-noHome'}`}>
        {pathname!=='/' && <Header />}
        {children}
    </div>
  )
}
