import React, {createContext , useState, useEffect} from "react";



export const ProductContext = createContext();



 const ProductProvider = ({children}) => {
 const [products , setProduct] = useState([]);

 useEffect(()=> {
    const fetchproducts =  async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProduct(data)
    }
    fetchproducts();
 },[])

    return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>;
    
};

export default ProductProvider;