import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonNote, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";

const Register:React.FC = () =>{
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar className="ion-padding-horizontal">
                    <IonTitle>Register</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-padding-horizontal">
                <IonItem class="ion-margin">
                    <IonLabel position="floating"> Username </IonLabel>
                    <IonInput type="text"/>
                </IonItem>
                <IonItem className="ion-margin">
                    <IonLabel position="floating"> Email </IonLabel>
                    <IonInput type="email"/>
                </IonItem>  
                <IonItem className="ion-margin">
                    <IonLabel position="floating"> Password </IonLabel>
                    <IonInput type="password"/>
                </IonItem>  
                <IonItem className="ion-margin">
                    <IonLabel position="floating"> Confirm Password </IonLabel>
                    <IonInput type="password"/>
                </IonItem>                
                <IonNote className="ion-margin"> Already have an account? <a href="/login">Login</a></IonNote>
                <br />
                <IonButton className="ion-margin" routerLink="/login">Register</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Register;