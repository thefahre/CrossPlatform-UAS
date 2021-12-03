import { IonBackButton, IonButton, IonButtons, IonCheckbox, IonCol, IonContent, IonDatetime, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonNote, IonPage, IonRow, IonSelect, IonSelectOption, IonSelectPopover, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState } from "react";

const EditEvent:React.FC = () =>{
    const [eventType, setEventType] = useState<string>();
    const [selectedStartDate, setSelectedStartDate] = useState<string>();
    const [selectedEndDate, setSelectedEndDate] = useState<string>();
    const [checked, setChecked] = useState(false);

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar className="ion-padding-horizontal">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home"/>
                    </IonButtons>
                    <IonTitle>Edit New Event</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating"> Event Name </IonLabel>
                                <IonInput type="text"/>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating"> Event Creator </IonLabel>
                                <IonInput type="text" disabled/>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating"> Type </IonLabel>
                                <IonSelect value={eventType} onIonChange={e => setEventType(e.detail.value)} placeholder="Select Event Type">
                                    <IonSelectOption value="school">School</IonSelectOption>
                                    <IonSelectOption value="work">Work</IonSelectOption>
                                    <IonSelectOption value="group">Group</IonSelectOption>
                                    <IonSelectOption value="private">Prvate</IonSelectOption>
                                </IonSelect>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating"> Start Date </IonLabel>
                            <IonDatetime min={new Date().toISOString()} value={selectedStartDate} onIonChange={e => setSelectedStartDate(e.detail.value!)} placeholder="Select Start Date"></IonDatetime>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating"> End Date </IonLabel>
                            <IonDatetime value={selectedEndDate} onIonChange={e => setSelectedEndDate(e.detail.value!)} placeholder="Select End Date"></IonDatetime>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem color="transparent">
                            <IonCheckbox slot="start" checked={checked}/>
                            <IonLabel >Reccuring Event</IonLabel>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton expand="full" routerLink="/home">Save Event</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default EditEvent;