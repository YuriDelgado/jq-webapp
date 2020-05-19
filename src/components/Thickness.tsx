import React, { useState } from "react";
import { IonLabel, IonRange, IonItemDivider } from "@ionic/react";
import "./Thickness.css";

const Thickness: React.FC = () => {
  const [thickness, setThickness] = useState<number>(0);

  return (
    <IonLabel>
      <div className="thickness-label">Thickness: {thickness} mm</div>
      <div className="thickness-bar">
        <IonRange
          min={20}
          max={200}
          step={10}
          pin={true}
          value={thickness}
          onIonChange={(e) => setThickness(e.detail.value as number)}
        />
      </div>
      <IonItemDivider />
    </IonLabel>
  );
};

export default Thickness;
