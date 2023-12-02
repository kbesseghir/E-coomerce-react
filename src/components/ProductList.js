import Product from "./Product";
import { useEffect, useState } from "react";

function ProductList() {
  const apiUrl = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const getproInCat = (cat) => {
    return fetch(`${apiUrl}/category/${cat}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  const getProducts = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  const getCategories = () => {
    fetch(`${apiUrl}/categories`)
      .then((response) => response.json())
      .then((data) => setCategories(data));
  };
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <h2 className="text-center p-5"> Our Products</h2>
      
     

      <div className="container">
      <button
            className="btn btn-info"
            onClick={() => {
              getProducts() ;
            }}
            
          >
            All
          </button>
          {categories.map((cat) => {
            return (
              
              <button
                className="btn btn-info"
                onClick={() => {
                  getproInCat(cat);
                }}
                key={cat}
              >
                {cat}
              </button>
            );
          })}
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <Product product={product} showButton={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductList;
