import {  useQuery } from "@tanstack/react-query"
import axios from "axios"


const useProducts =  () =>{
    const {data: product = [], isPending } = useQuery({
        queryKey:["productData"],
        queryFn: async  () => {
          const  res = await axios.get("https://boycott-india-server.vercel.app/api/bcip/v1/allproducts/get") 
          return res?.data
        }


    })
    
    return {product, isPending}
}

export default useProducts