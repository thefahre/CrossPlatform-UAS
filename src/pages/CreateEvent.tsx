import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";

const CreateEvent:React.FC = () =>{
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar className="ion-padding">
                    <IonTitle>Create New Event</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonButton routerLink="/home"> Add</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default CreateEvent;