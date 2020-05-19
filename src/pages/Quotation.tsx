import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Quotation.css";
import PrioritySegment from "../components/PrioritySegment";
import ProductSelector from "../components/ProductSelector";
import Thickness from "../components/Thickness";
import ProductQuantity from "../components/ProductQuantity";
import PickDeliveryDate from "../components/PickDeliveryDate";
type Product = {
  name: string;
  description: string;
};

const Quotation: React.FC = () => {
  const [priority, setPriority] = useState<string>("");
  const [product, setProduct] = useState<number>();
  const [quantity, setQuantity] = useState<number>(0);
  const [deliveryDate, setDeliveryDate] = useState<string>("");

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cotizador</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Cotizador</IonTitle>
          </IonToolbar>
        </IonHeader>
        <PrioritySegment
          onPriorityChange={(priority) => setPriority(priority)}
        />
        <ProductSelector
          onProductChange={(productId) => setProduct(productId)}
        />
        <Thickness />
        <ProductQuantity />
        <PickDeliveryDate />
      </IonContent>
      <IonContent>
        <div>Prod: {product}</div>
        <div>Prio: {priority}</div>
      </IonContent>
    </IonPage>
  );
};

export default Quotation;
