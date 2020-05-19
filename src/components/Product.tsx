import React from "react";
import { IonItem, IonLabel, IonAvatar } from "@ionic/react";

interface ProductObj {
  name: string;
  description: string;
  price: string;
}

const Product: React.FC<ProductObj> = (props) => {
  return (
    <IonItem>
      <IonLabel>{}</IonLabel>
      <IonItem>
        <IonAvatar slot="start">
          <img src="./avatar.svg" alt="" />
        </IonAvatar>
        <IonLabel>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            doloremque natus ab obcaecati nulla, quidem nam perspiciatis.
          </p>
        </IonLabel>
      </IonItem>
    </IonItem>
  );
};

export default Product;
