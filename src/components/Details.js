import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

function Details (){
    const apiUrl='https://fakestoreapi.com/products'
    const params = useParams()
    const [product,setProduct]= useState({})
    console.log(params)
    useEffect(()=>{
    fetch(`${apiUrl}/${params.productId}`).then((response) => response.json())
    .then((data) => setProduct(data));
    },[])
    return (
        <>
            <h2>Product Details ({product.title}){params.productId}</h2>
        </>

    );
}

export default Details;