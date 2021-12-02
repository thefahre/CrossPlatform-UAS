import { IonCard, IonCardTitle, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonText, IonTitle } from "@ionic/react";
import React from "react";

const AgendaComponent:React.FC = () =>{
    return(
        <IonCard className="ion-padding">
            <IonCardTitle>Event Title</IonCardTitle>
            <IonText>Event Type | Location  | Start Time | (Optional) End Time </IonText>
        </IonCard>
    );
};

export default AgendaComponent;