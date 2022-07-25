import { Banner } from "../components/Banner";
import { Layout } from "../components/Layout";
import { Login } from "../components/Login";

export const Home = () => {  
    return (
    <Layout>
      <Banner />
      <Login />
    </Layout>
    )
}