import {  useQuery } from "@tanstack/react-query"


const useProducts = () =>{
    const {data: product = [], isPending } = useQuery({
        queryKey:["productData"],
        queryFn: () => fetch('products.json')
        .then((res) => res.json())

    })
    return {product, isPending}
}

export default useProducts