import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";

const Register:React.FC = () =>{
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar className="ion-padding">
                    <IonTitle>Register</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonButton routerLink="/login">Register</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Register;