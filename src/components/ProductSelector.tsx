import React, { useState, useEffect } from "react";
import {
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonLoading,
} from "@ionic/react";

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

type Props = {
  onProductChange: (productId: number) => void;
};
const ProductSelector: React.FC<Props> = (props) => {
  const [products, setProducts] = useState<ProductObj[]>();
  const [product, setProduct] = useState<number>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <IonItem>
        <IonLoading
          isOpen={loading}
          onDidDismiss={() => setLoading(false)}
          message={"Please wait..."}
          duration={5000}
        />
        <IonLabel>Product</IonLabel>
        <IonSelect
          value={product}
          okText="Ok"
          onIonChange={(e) => {
            setProduct(e.detail.value);
            props.onProductChange(e.detail.value);
          }}
        >
          {products &&
            products.map((prod, idx) => (
              <IonSelectOption key={idx} value={idx}>
                {prod.name}
              </IonSelectOption>
            ))}
        </IonSelect>
      </IonItem>
    </>
  );
};

export default ProductSelector;
