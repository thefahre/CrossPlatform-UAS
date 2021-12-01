import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import './Home.css';

const Landing:React.FC = ()=>{
    return(
        <IonPage>
        <IonContent fullscreen className="ion-text-center">
            <IonGrid>
                <IonRow>
                    <IonCol>

                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className="ion-align-items-center">
                        <IonTitle>WakuPlanner</IonTitle>
                        <IonText>Schedule your Agenda with WakuPlanner</IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonButton routerLink="/login"> Login </IonButton>
                        <IonButton routerLink="/register"> Register </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
      </IonPage>
    );
};

export default Landing;