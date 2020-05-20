import React, { useState } from "react";
import {
  IonSegment,
  IonSegmentButton,
  IonIcon,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { home, pin, star } from "ionicons/icons";

type Params = {
  onPriorityChange: (details: string) => void;
};
const PrioritySegment: React.FC<Params> = (params) => {
  const [priority, setPriority] = useState<string>("home");

  return (
    <IonItem>
      <IonSegment
        value={priority}
        onIonChange={(e) => {
          setPriority(e.detail.value as string);
          params.onPriorityChange(e.detail.value as string);
        }}
      >
        <IonSegmentButton value="normal">
          <IonIcon icon={home} />
          <IonLabel>Normal</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="express">
          <IonIcon icon={pin} />
          <IonLabel>Express</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="urgente">
          <IonIcon icon={star} />
          <IonLabel>Urgente</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    </IonItem>
  );
};

export default PrioritySegment;
