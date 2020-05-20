import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonModal,
  IonButton,
  IonToast,
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

type Order = {
  id: number;
  priority: string;
  product_id: number;
  quantity: string;
  thickness: number;
  deliveryDate: string;
};
const Quotation: React.FC = () => {
  const [priority, setPriority] = useState<string>("normal");
  const [productId, setProductId] = useState<number>(0);
  const [quantity, setQuantity] = useState<string>("");
  const [thickness, setThickness] = useState<number>(0);
  const [deliveryDate, setDeliveryDate] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [order, setOrder] = useState<Order>();
  const [showToast, setShowToast] = useState<boolean>();

  const sendOrder = () => {
    const ord: Order = {
      id: 1,
      priority: priority,
      product_id: productId,
      quantity: quantity,
      thickness: thickness,
      deliveryDate: deliveryDate,
    };
    setOrder(ord);
    setShowModal(false);
    getOrder();
    return true;
  };

  const getOrder = () => {
    return (
      <IonToast
        isOpen={!!showToast}
        onDidDismiss={() => setShowToast(false)}
        message={`Your order ${order && order.id} has been saved.`}
        duration={200}
      />
    );
  };

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
            onProductChange={(productId) => setProductId(productId)}
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
      <IonContent>
        <IonModal isOpen={showModal}>
          <IonItem>ProdId: {productId}</IonItem>
          <IonItem>Prio: {priority}</IonItem>
          <IonItem>thickness: {thickness}</IonItem>
          <IonItem>quantity: {quantity}</IonItem>
          <IonItem>Delivery date: {deliveryDate}</IonItem>
          <IonButton onClick={() => sendOrder()}>Process order</IonButton>
          <IonButton onClick={() => setShowModal(false)}>Dismiss</IonButton>
        </IonModal>
        <IonButton onClick={() => setShowModal(true)}>Show Modal</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Quotation;
