import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ProductsList from "../components/ProductsList";
import "./Products.css";

const Products: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Products List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Products List</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ProductsList />
      </IonContent>
    </IonPage>
  );
};

export default Products;
