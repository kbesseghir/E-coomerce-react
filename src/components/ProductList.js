import Product from "./Product";
import { useEffect, useState } from "react";

function ProductList() {
  const apiUrl = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  },[]);

  return (
    <>
      <h2 className="text-center p-5"> Our Products</h2>

      <div className="container">
        <div className="row">
          {products.map((product)=>{
            return (
              
            <div className="col-3" key={product.id}>
              <Product product={product} />
            </div>
              
          )})}
          
        </div>
      </div>
    </>
  );
}

export default ProductList;
