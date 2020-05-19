import React, { useState } from "react";
import { IonItem, IonLabel, IonDatetime } from "@ionic/react";

const PickDeliveryDate: React.FC = () => {
  const now = new Date().toLocaleString().toString();
  const [selectedDate, setSelectedDate] = useState<string>(now);
  return (
    <IonItem>
      <IonLabel>Custom delivery date</IonLabel>
      <IonDatetime
        displayFormat="DDD DD MMM, YYYY"
        placeholder="Select Date"
        value={selectedDate}
        onIonChange={(e) => setSelectedDate(e.detail.value!)}
      ></IonDatetime>
    </IonItem>
  );
};

export default PickDeliveryDate;
