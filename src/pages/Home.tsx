import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonImg,
} from "@ionic/react";
import { pin } from "ionicons/icons";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Company, Co.</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonImg src="https://cdn.pixabay.com/photo/2017/09/28/11/23/laser-2795229_960_720.jpg" />
          </IonCardHeader>
          <IonCardContent>
            <IonCardTitle>Hi-Tech engineering is our passion.</IonCardTitle>
            <p />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore at
            culpa harum numquam veniam assumenda, architecto aliquid eum
            incidunt consequuntur quas molestias facilis quo voluptatem atque
            facere. Et, nam. Dolorem?
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonItem>
            <IonIcon icon={pin} slot="start" />
            <IonLabel>Location ... </IonLabel>
            <IonButton fill="outline" slot="end">
              View
            </IonButton>
          </IonItem>

          <IonCardContent>
            This is content, without any paragraph or header tags, within an
            ion-cardContent element.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
