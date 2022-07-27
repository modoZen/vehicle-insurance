import { Link, useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { useAppDispatch, useAppSelector } from "../../store";
import { removeUser } from "../../store/slices/userSlice";
import icon_back from '../../assets/icon_back.svg'
import img_person from '../../assets/img_person.svg'
import { Coverage } from "../../components/Coverage";
import { Button } from "../../components/Button";
import icon_check from '../../assets/icon_check.svg'
import { useEffect, useState } from "react";
import { addCoverage, removeCoverage } from "../../store/slices/coverageReducer";
import { useGetMountTotalFormated } from "../../hooks/useGetMountTotalFormated";
import './styles.sass'

export interface ICoverage{
    title: string,
    info: string,
    src: string,
    price: number
}

const coverages:ICoverage[] = [
    {
        title: 'Llanta robada',
        info: `He salido de casa a las cuatro menos cinco para ir a la academia de 
                ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, 
                na llego a la academia que está en el centro del pueblo en una plaza medio-grande y 
                dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis
                y mucho más`,
        src:    './img/icon_theft.svg',
        price: 15
    },
    {
        title: 'Choque y/o pasarte la luz roja',
        info: `He salido de casa a las cuatro menos cinco para ir a la academia de 
                ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, 
                na llego a la academia que está en el centro del pueblo en una plaza medio-grande y 
                dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis
                y mucho más`,
        src: './img/icon_damage.svg',
        price: 20
    },
    {
        title: 'Atropello en la vía Evitamiento ',
        info: `He salido de casa a las cuatro menos cinco para ir a la academia de 
                ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, 
                na llego a la academia que está en el centro del pueblo en una plaza medio-grande y 
                dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis
                y mucho más`,
        src: './img/icon_perdidatotal.svg',
        price: 50
    }
]

const MIN_SUM = 12500;
const MAX_SUM = 16500;

export const MakePlan = () => {
    const navigator = useNavigate();
    const dispatch = useAppDispatch();

    const { mountTotalFormat, list } = useGetMountTotalFormated();


    const [sumAssured, setsumAssured] = useState(14300);
    const sumAssuredFormat = sumAssured.toLocaleString("en-US",{style:"currency",currency:"USD", minimumFractionDigits: 0});
    
    const thereIsChoque = list.some(item=>item.title==='Choque y/o pasarte la luz roja')
    useEffect(()=>{
        if(sumAssured > 16000 && thereIsChoque){
            dispatch(removeCoverage(coverages.find(item=>item.title==='Choque y/o pasarte la luz roja')))
        }
        if(sumAssured <= 16000 && !thereIsChoque){
            dispatch(addCoverage(coverages.find(item=>item.title==='Choque y/o pasarte la luz roja')))
        }   
    },[sumAssured])

    const handlerModifySum:(tipo:string)=>void = (tipo)=>{
        if(tipo === '+' && sumAssured < MAX_SUM){
            setsumAssured(value=>value + 100)
        }
        if(tipo === '-' && sumAssured > MIN_SUM){
            setsumAssured(value=>value - 100)
        }
    }


    const comeBackHandler = ()=>{
        dispatch(removeUser())
        navigator('/')
    }

    const user = useAppSelector(state=>state.user.user);

    return (
        <Layout>
            <div className="makeplan__aside">
                <div className="makeplan__steps">
                    <span className="makeplan__count">1</span><span className="makeplan__name">Datos</span>
                    <span className="makeplan__count makeplan__count--activate">2</span><span className="makeplan__name makeplan__name--activate">Arma tu plan</span> 
                </div>
            </div>
            <div className="makeplan__main">
                <div className="makeplan__firstSection">
                    <div className="makeplan__subfirstSection">
                        <div className="makeplan__backSection">
                            <img className="makeplan__backImg" onClick={comeBackHandler} src={icon_back} alt="icon_back" />
                            <span className="makeplan__text">volver</span>
                        </div>
                        <p className="makeplan__title">Hola, {user?.name}</p>
                        <p className="makeplan__paraph">Conoce las coberturas para tu plan</p>
                        <div className="makeplan__plateSection">
                            <div className="makeplan__plateContainer">
                                <p className="makeplan__plate">Placa: {user?.plate}</p>
                                <p className="makeplan__brand">Wolkswagen 2019 Golf</p>
                            </div>
                            <img src={img_person} alt="img_person" />
                        </div>
                        <div className="makeplan__sumAssuredSection">
                            <div>
                                <span className="makeplan__title makeplan__title--assured">Indica la suma asegurada</span>
                                <div className="makeplan__limitsSection">
                                    <span className="makeplan__paraph makeplan__paraph--limit">
                                        MIN {MIN_SUM.toLocaleString("en-US",{style:"currency",currency:"USD", minimumFractionDigits: 0})}
                                    </span>
                                    <span className="makeplan__text5">|</span>
                                    <span className="makeplan__paraph makeplan__paraph--limit">
                                        MAX {MAX_SUM.toLocaleString("en-US",{style:"currency",currency:"USD", minimumFractionDigits: 0})}
                                    </span>
                                </div>
                            </div>
                            <div className="makeplan__mountCard">
                                    <span onClick={()=>{handlerModifySum('-')}} className="makeplan__modifySum">-</span>
                                    <span className="makeplan__title makeplan__title--assured">
                                        {sumAssuredFormat}
                                    </span>
                                    <span onClick={()=>{handlerModifySum('+')}} className="makeplan__modifySum">+</span>
                            </div>
                        </div>
                    </div>
                    <div className="makeplan__subSecondSection">
                        <div className="makeplan__title makeplan__title--coverage">Agrega o quita coberturas</div>
                        <div className="makeplan__types">
                            <span className="makeplan__type makeplan__type--activate">
                                Protege a tu auto
                            </span>
                            <span className="makeplan__type">Protege a los que te rodean</span>
                            <span className="makeplan__type">mejora tu plAn</span>
                        </div>
                        <div>
                            {coverages.map(coverage=>(
                                <Coverage key={coverage.title} {...coverage} />      
                            ))}
                            
                        </div>
                    </div>
                </div>
                <div className="makeplan__secondSection">
                    <div className="makeplan__mountSection">
                        <div className="makeplan__mountTitle makeplan__mountTitle--name">Monto</div>
                        <div className="makeplan__mountTitle">{mountTotalFormat}</div>
                        <div className="makeplan__mountParaph">mensuales</div>
                    </div>
                    <div className="makeplan__includedSection">
                        <div className="makeplan__includedTitle">El precio incluye</div>
                        <div className="makeplan__includedParaph">
                            <img className="makeplan__vineta" src={icon_check} /> <span> Llanta de respuesta</span> 
                        </div>
                        <div className="makeplan__includedParaph">
                            <img className="makeplan__vineta" src={icon_check} /><span> Analisis</span> 
                        </div>
                        <div className="makeplan__includedParaph">
                            <img className="makeplan__vineta" src={icon_check} /><span> Aros gratis</span> 
                        </div>
                    </div>
                    <Link to={'/thanks'}>
                        <Button text="LO QUIERO" className="button--plan" />
                    </Link>
                </div>
            </div>
        </Layout>
    )
}