// import React, { useEffect } from "react";
// import axios from "axios";

// useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`);
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };
  
//     fetchProducts();
//   }, []);

function ProductsPage(){
return (
    <div className="container mt-5">
        <h1> Our Products</h1>
        <p>This is where we'll display our product catalog.</p>
    </div>

)

}

export default ProductsPage;