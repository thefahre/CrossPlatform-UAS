import { IonCard, IonCardTitle, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonText, IonTitle } from "@ionic/react";
import React, { useState } from "react";

const AgendaComponent:React.FC = () =>{


    return(
        <>
        <IonItemSliding>
            <IonItemOptions side="start">
                <IonItemOption routerLink="/editEvent">Edit</IonItemOption>
            </IonItemOptions>
            <IonItem>
                <IonCard>
                    <IonCardTitle>Event Title</IonCardTitle>
                    <IonText>Event Type | Location  | Start Time | (Optional) End Time </IonText>
                </IonCard>
            </IonItem>
        </IonItemSliding>
        </>
        

    );
};

export default AgendaComponent;