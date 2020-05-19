import React, { useState } from "react";
import { IonItem, IonInput, IonLabel } from "@ionic/react";

const ProductQuantity: React.FC = () => {
  const [text, setText] = useState<string>("");
  return (
    <IonItem>
      <IonLabel position="stacked">Cantidad: </IonLabel>
      <IonInput
        value={text}
        type="number"
        step="5"
        placeholder="Número de piezas"
        onIonChange={(e) => setText(e.detail.value!)}
      ></IonInput>
    </IonItem>
  );
};

export default ProductQuantity;
