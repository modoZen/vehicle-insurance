import { Button } from "../components/Button"
import { Layout } from "../components/Layout"

const Thanks = () =>{
    return (
        <Layout>
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
                    <Button text="CÓMO USAR MI SEGURO" className="button--thanks" />
                </div>
            </div>  
        </Layout>
    )
}

export { Thanks }