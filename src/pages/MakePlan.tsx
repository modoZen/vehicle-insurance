import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { useAppSelector } from "../store";

export const MakePlan = () => {

    const user = useAppSelector(state=>state.user.user);

    return (
        <Layout>
            <div>
                <p>Mi nombre {user?.name}</p>
            </div>
            <div>
                <p>Tu placa es {user?.plate}</p>
            </div>
        </Layout>
    )
}