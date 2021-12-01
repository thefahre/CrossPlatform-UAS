import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";

const Login:React.FC = () =>{
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar className="ion-padding">
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonButton routerLink="/home"> Login</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Login;