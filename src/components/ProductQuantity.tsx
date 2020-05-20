import React, { useState } from "react";
import { IonInput, IonLabel } from "@ionic/react";

type Props = {
  onQuantityChange: (quantity: string) => void;
};

const ProductQuantity: React.FC<Props> = (props) => {
  const [quantity, setQuantity] = useState<string>("0");
  return (
    <IonLabel>
      <div>Cantidad: </div>
      <IonInput
        value={quantity}
        type="number"
        step="5"
        placeholder="Número de piezas"
        onIonChange={(e) => {
          setQuantity(e.detail.value!);
          props.onQuantityChange(e.detail.value!);
        }}
      ></IonInput>
    </IonLabel>
  );
};

export default ProductQuantity;
