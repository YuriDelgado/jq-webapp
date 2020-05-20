import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
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
  const [priority, setPriority] = useState<string>("normal");
  const [product, setProduct] = useState<number>();
  const [quantity, setQuantity] = useState<string>("");
  const [thickness, setThickness] = useState<number>(0);
  const [deliveryDate, setDeliveryDate] = useState<string>("");

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cotizador</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="main-content">
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
          <Thickness
            onThicknessChange={(thickness) => setThickness(thickness)}
          />
          <ProductQuantity
            onQuantityChange={(quantity) => setQuantity(quantity)}
          />
          <PickDeliveryDate
            onDeliveryDateChange={(deliveryDate) =>
              setDeliveryDate(deliveryDate)
            }
          />
        </div>
      </IonContent>
      <IonText>
        <div>Prod: {product}</div>
        <div>Prio: {priority}</div>
        <div>thickness: {thickness}</div>
        <div>quantity: {quantity}</div>
        <div>Delivery date: {deliveryDate}</div>
      </IonText>
    </IonPage>
  );
};

export default Quotation;
