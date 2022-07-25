import React from 'react'
import './styles.sass'

export const Banner = () => {
  return (
    <div className="banner">
        <div className='banner__containerMain'>
          <div className="banner__imageMain"></div>
          
        </div>
        <div className='banner__containerInfo'>
          <p className="banner__title banner__title--less">¡NUEVO!</p>
            <div className='banner_sectionTitle'>
                <span className='banner__title'>Seguro</span>
                <span className="banner__title banner__title--red_rimac">Vehicular Tracking</span> 
            </div>
            <p className="banner__paragraph">Cuentanos donde le haras seguimiento a tu seguro</p>
        </div>
        <div className="banner__footer" >
          <span className="banner__rights">© 2021 RIMAC Seguros y Reaseguros.</span>
        </div>
    </div>
  )
}
