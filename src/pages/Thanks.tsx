import { Button } from "../components/Button"
import { Layout } from "../components/Layout"

const Thanks = () =>{
    return (
        <Layout>
            <div className="thanks-left">
                <div className="thanks-left-image"></div>
            </div>
            <div className="thanks-right">
                <div className="thanks-right-container" >
                    <div className="thanks-title">
                        <div className="thanks-title_red">¡Te damos la bienvenida!</div>
                        <div className="thanks-title_gray">Cuenta con nosotros para proteger tu vehículo</div>
                    </div>
                    <div className="thanks-paraph-container">
                        <p className="thanks-paraph">Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:</p>
                        <p className="thanks-paraph_bold">joel.sanchez@gmail.com</p>
                    </div>
                    <Button text="CÓMO USAR MI SEGURO" className="button--thanks" />
                </div>
            </div>  
        </Layout>
    )
}

export { Thanks }