import { IonButton, IonCheckbox, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonNote, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState } from "react";

const Login:React.FC = () =>{
    const [checked, setChecked] = useState(false);
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar className="ion-padding-horizontal">
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-padding-horizontal">
                <IonItem class="ion-margin">
                    <IonLabel position="floating"> Username </IonLabel>
                    <IonInput type="text"/>
                </IonItem>
                <IonItem className="ion-margin">
                    <IonLabel position="floating"> Password </IonLabel>
                    <IonInput type="password"/>
                </IonItem>
                <IonItem className="ion-margin">
                    <IonLabel  position="fixed" > Remember </IonLabel>
                    <IonCheckbox slot="start" checked={checked} onIonChange={e => setChecked(e.detail.checked)} />
                </IonItem>
                <IonNote className="ion-margin"> Don't have an account? <a href="/register">Register</a> </IonNote>
                <br />
                <IonButton className="ion-margin" routerLink="/home"> Login</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Login;