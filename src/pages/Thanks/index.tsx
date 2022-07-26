import { Link } from "react-router-dom"
import { Button } from "../../components/Button"
import { Layout } from "../../components/Layout"
import './styles.sass'

const Thanks = () =>{
    return (
        <Layout
            title="Arigato"
            subtitle="Gracias por elegirnos, ahora puedes aprender a usar el seguro"
        >
        <div className="thanks">
             <div className="thanks__aside">
                <div className="thanks__asideImage"></div>
            </div>
            <div className="thanks__main">
                <div className="thanks__container" >
                    <div className="thanks-titleSection">
                        <div className="thanks__title thanks__title--red">¡Te damos la bienvenida!</div>
                        <div className="thanks__title">Cuenta con nosotros para proteger tu vehículo</div>
                    </div>
                    <div className="thanks__paraphSection">
                        <p className="thanks__paraph">Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:</p>
                        <p className="thanks__paraph thanks__paraph--bold">joel.sanchez@gmail.com</p>
                    </div>
                    <Link to={'/xd'}>
                        <Button text="CÓMO USAR MI SEGURO" className="button--thanks" />
                    </Link>
                </div>
            </div> 
        </div>
        </Layout>
    )
}

export { Thanks }