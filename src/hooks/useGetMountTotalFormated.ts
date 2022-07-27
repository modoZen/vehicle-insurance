import { useAppSelector } from "../store";


const useGetMountTotalFormated = ()=>{
    const { list, baseMount} = useAppSelector(state=>state.coverage);
    const mountTotal = list.reduce((a,b)=>a + b.price, baseMount)
    const mountTotalFormat = mountTotal.toLocaleString("en-US",{style:"currency",currency:"USD"})

    return {
        list,
        baseMount,
        mountTotal,
        mountTotalFormat
    }
}

export { useGetMountTotalFormated }