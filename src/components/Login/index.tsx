import { useNavigate } from 'react-router-dom'
import { getNameUser } from '../../api'
import { useAppDispatch, useAppSelector } from '../../store'
import { toogleLoading } from '../../store/slices/uiSlice'
import { setUser, User } from '../../store/slices/userSlice'
import { Button } from '../Button'
import { Loader } from '../Loader'
import { useForm, SubmitHandler } from 'react-hook-form'
import './styles.sass'
import { CheckBox } from '../CheckBox'

interface Option{
    value: string
    text: string
}

enum TypeDocumentEnum{
    DNI = '1',
    CARNET_EXT = '2',
    OTROS = '3'
}

interface Inputs {
    name?: string
    typeDoc: TypeDocumentEnum
    phone: string,
    plate: string,
    nroDoc: string,
    agreement: boolean,
}

const options: Option[] = [
    {
        value: '1',
        text: 'DNI'
    },
    {
        value: '2',
        text: 'CARNET EXT'
    },
    {
        value: '3',
        text: 'OTROS'
    }
]

export const Login = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const loading = useAppSelector(state=>state.ui.loading);
    const { register, handleSubmit, formState: { errors }, watch} = useForm<Inputs>();
    
    const onSubmit: SubmitHandler<Inputs> = async  (data) =>{
        console.log('la data',data)
        const { agreement, ...user  } = data;
        try {
            dispatch(toogleLoading())
            user.name = await getNameUser();
            dispatch(setUser(user))
            dispatch(toogleLoading())
            navigate('/plan');
        } catch (err) {
            console.error(err)
        }
    }

    return (
    <div className="login" >   
        <form className='login__container' onSubmit={handleSubmit(onSubmit)}>
            <span className='login__title' >Déjanos tus datos</span>
            <div className='login__inputs'>
                <span className='login__label login__label--flex'>
                    <select 
                        className='login__select'
                        {...register('typeDoc')} 
                    >
                        {options.map(option=>(
                            <option key={option.value} value={option.value}>{option.text}</option>
                        ))}
                    </select>
                    <input 
                        className='login__input login__input--part'
                        type={'text'} 
                        placeholder='Nro. de doc' 
                        {...register('nroDoc', 
                            {
                                required: 'Debe llenar este campo',
                                validate: value => {
                                    const typeDoc = watch('typeDoc');
                                    if(typeDoc === TypeDocumentEnum.DNI) return /[0-9]{8}/.test(value) || 'Debe tener 8 digitos'
                                    if(typeDoc === TypeDocumentEnum.CARNET_EXT) return value === 'abc' || 'Ingrese las letras abc'
                                    return true
                                }
                            }
                        )}
                    />
                    {errors.nroDoc && <p className='login__message login__message--error'>{errors.nroDoc?.message}</p>}
                </span>
                <label className='login__label' htmlFor='phone' >
                    <input 
                        className='login__input' 
                        {...register("phone", { 
                            pattern: {value:/[0-9]{9}/ , message: 'Debe agregar 9 números'} ,  
                            required: 'Debe llenar este campo'})
                        } type={'tel'} 
                        placeholder='Celular'  
                    />
                    {errors.phone?.message && <p className='login__message login__message--error'>{errors.phone?.message}</p>}
                </label>
                <label className='login__label' htmlFor='plate' >
                <input 
                    className='login__input' 
                    {...register('plate', { 
                        required: 'Debe llenar este campo',
                        pattern: {
                            value: /[0-9A-Z]{3}-[0-9]{3}/i,
                            message: 'Ingrese con formato tipo dfg-125'
                        }
                    })} 
                    type={'text'}  
                    placeholder='Placa' 
                />
                {errors.plate?.message && <p className='login__message login__message--error'>{errors.plate?.message}</p>}
                </label>
            </div>
            <span className='login__label login__label--condition'>
                <CheckBox>
                    <input 
                        className='checkboxCustom__input' 
                        {...register('agreement', { required: 'Debe aceptar los terminos'})} 
                        type={'checkbox'} 
                        id='agreement' 
                    />
                    <label htmlFor="agreement" className='checkboxCustom__label'></label>
                </CheckBox>   
                <span className='login__politics'>
                    Acepto la Política de <a className='login__links'>Protecciòn de Datos Personales</a> y los <a className='login__links'>Términos y Condiciones.</a> 
                </span>
                {errors.agreement?.message && <p className='login__message login__message--error'>{errors.agreement?.message}</p>}
            </span>
            <Button text="COTÍZALO" className='button--home'/>
            {loading && <Loader />}
        </form>
    </div>
  )
}
