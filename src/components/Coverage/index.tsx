import { FC, useState } from 'react'
import { ICoverage } from '../../pages/MakePlan'
import { useAppDispatch, useAppSelector } from '../../store'
import { addCoverage, removeCoverage } from '../../store/slices/coverageReducer'
import icon_arrow_down from '../../assets/icon_arrow_down.svg'
import icon_arrow_up from '../../assets/icon_arrow_up.svg'
import ic_add from '../../assets/ic_add.svg'
import ic_remove from '../../assets/ic_remove.svg'
import './styles.sass'
import { SwitchCustom } from '../SwitchCustom'

interface Props{
    title: string,
    info: string,
    src: string,
    price: number
}

export const Coverage:FC<Props> = ({title, info, src, price}) => {
    const dispatch = useAppDispatch();
    const list = useAppSelector(state=>state.coverage.list);
    const isAdded = list.some(item=>item.title===title)
    const handlerClick = (coverage:ICoverage)=>{
        if(isAdded) dispatch(removeCoverage(coverage))
        else        dispatch(addCoverage(coverage))
    }

    const [showInfo, setShowInfo] = useState(false);
    const toggleInfoCoverage = ()=>{setShowInfo(!showInfo)}

    return (
        <div className='coverage'>
            <div className='coverage__title'>{title}</div>
            <img 
                src={src} 
                alt="imagen_cobertura" 
                className='coverage__imgMain'
            />
            <img 
                className='coverage__moreInfo' 
                src={showInfo?icon_arrow_up:icon_arrow_down} 
                alt={showInfo?'mostrando info':'ocultando info'} 
                onClick={toggleInfoCoverage}
            />
            <SwitchCustom checked={showInfo} onClick={toggleInfoCoverage} />
            <div className='coverage__addSection' onClick={()=>{handlerClick({title,info, src, price})}}>
                <img className='coverage__addImage' src={isAdded?ic_remove:ic_add} alt="agregar" />
                <span className='coverage__addText'>{isAdded?'QUITAR':'AGREGAR'}</span>
            </div>
            {showInfo && (
                <div className='coverage__info'>
                    {info}
                </div>
            )}
        </div>
    )
}
