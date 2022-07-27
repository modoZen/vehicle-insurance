import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button';
import './styles.sass'

const NotFound = ()=> {
    const navigator = useNavigate();
    const clickHandler = ()=>{
        navigator(-1)
    }
    return(
        <div className='notFound'>
            <div className='notFound__container'>
                <p className='notFound__text'>Página no encontrada :c</p>
                <Button 
                    text='Volver a la pagina anterior' 
                    className='button--home' 
                    onClick={clickHandler}    
                />
            </div>
        </div>
    )
}

export { NotFound }