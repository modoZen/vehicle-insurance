import { Banner } from "../components/Banner";
import { Layout } from "../components/Layout";
import { Login } from "../components/Login";

export const Home = () => {  
    return (
    <Layout
      title="Home"
      subtitle="Aqui podras dejar tus datos"
    >
      <Banner />
      <Login />
    </Layout>
    )
}