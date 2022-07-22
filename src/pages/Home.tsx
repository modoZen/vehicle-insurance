import { Layout } from "../components/Layout";
import { Login } from "../components/Login";

export const Home = () => {  
    return (
    <Layout>
      <div className="container-banner">
        <p>¡NUEVO!</p>
        <h1>
        Seguro Vehicular Tracking
        </h1>
        <p>Cuentanos donde le haras seguimiento a tu seguro</p>
        <span>© 2021 RIMAC Seguros y Reaseguros.</span>
      </div>
      <div className="container-login">
        <Login />
      </div>
    </Layout>
    )
}