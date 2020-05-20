import React, { useState } from "react";
import { IonLabel, IonDatetime } from "@ionic/react";

type Props = {
  onDeliveryDateChange: (thickness: string) => void;
};

const PickDeliveryDate: React.FC<Props> = (props) => {
  const now = new Date().toLocaleString().toString();
  const [selectedDate, setSelectedDate] = useState<string>(now);
  return (
    <IonLabel>
      <div>Custom delivery date</div>
      <IonDatetime
        displayFormat="DDD DD MMM, YYYY"
        placeholder="Select Date"
        value={selectedDate}
        onIonChange={(e) => {
          setSelectedDate(e.detail.value!);
          props.onDeliveryDateChange(e.detail.value!);
        }}
      ></IonDatetime>
    </IonLabel>
  );
};

export default PickDeliveryDate;
