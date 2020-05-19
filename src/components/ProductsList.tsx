import React, { useState, useEffect } from "react";
import { IonContent, IonLoading } from "@ionic/react";

import Product from "./Product";
// import axios from "axios";
// import { useProducts } from "./useProducts";

type ProductObj = {
  name: string;
  description: string;
  price: string;
};

const getProducts = (): Promise<ProductObj[]> => {
  return fetch("https://jq-api.herokuapp.com/products")
    .then((response) => response.json())
    .catch((error) => {
      console.error("There was an error!", error);
    });
};

const ProductsList: React.FC = () => {
  const [products, setProducts] = useState<ProductObj[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
      setLoading(false);
    });
  }, []);

  return (
    <IonContent>
      <IonLoading
        isOpen={loading}
        onDidDismiss={() => setLoading(false)}
        message={"Please wait..."}
        duration={5000}
      />
      {products &&
        products.map((product, idx) => (
          <Product
            key={idx}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
    </IonContent>
  );
};

export default ProductsList;
