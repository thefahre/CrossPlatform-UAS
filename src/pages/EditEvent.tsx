import { getFirestore, getDocs, collection } from "@firebase/firestore";
import { IonBackButton, IonButton, IonButtons, IonCheckbox, IonCol, IonContent, IonDatetime, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonNote, IonPage, IonRow, IonSelect, IonSelectOption, IonSelectPopover, IonTitle, IonToolbar } from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router";

const EditEvent:React.FC = () =>{
    const eId = useParams<{eventId:string}>().eventId;
    const db = getFirestore();
    const hist = useHistory();
    const [eventsList,setEventsList] = useState<Array<any>>([]);

    useEffect(()=>{
        async function getData(){
            const querySnapshot = await getDocs(collection(db, "events"));
            setEventsList(querySnapshot.docs.map((doc)=>({...doc.data(),doc})));
        }

        getData();
    }, []);

    const selectedEvent = eventsList.find(ev => ev.id === eId);


    const [eventType, setEventType] = useState<string>();
    const [selectedStartDate, setSelectedStartDate] = useState<string>();
    const [selectedEndDate, setSelectedEndDate] = useState<string>();
    const [checked, setChecked] = useState(false);
    
    const evNameRef = useRef<HTMLIonInputElement>(selectedEvent?.title);
    const evCreatorRef = useRef<HTMLIonInputElement>(selectedEvent?.creator);
    

    const UpdateEventHandler = ()=>{
        hist.push("/home");
    };


    return(
        <IonPage>
            <IonHeader>
                <IonToolbar className="ion-padding-horizontal">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home"/>
                    </IonButtons>
                    <IonTitle>Edit Event</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating"> Event Name </IonLabel>
                                <IonInput type="text" ref={evNameRef}/>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating"> Event Creator </IonLabel>
                                <IonInput type="text" ref={evCreatorRef} disabled/>
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
                            <IonDatetime min={new Date().toISOString()} value={selectedStartDate} onIonChange={e => setSelectedStartDate(e.detail.value!)} placeholder="Select Start Date" pickerFormat="DD-MMM-YYYY HH:mm" displayFormat="DD-MMMM-YYYY HH:mm" ></IonDatetime>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating"> End Date </IonLabel>
                            <IonDatetime min={new Date().toISOString()} value={selectedEndDate} onIonChange={e => setSelectedEndDate(e.detail.value!)} placeholder="Select End Date" pickerFormat="DD-MMM-YYYY HH:mm" displayFormat="DD-MMMM-YYYY HH:mm"></IonDatetime>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem color="transparent" lines="none">
                            <IonCheckbox slot="start" checked={checked}/>
                            <IonLabel >Reccuring Event</IonLabel>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton expand="full" onClick={UpdateEventHandler}>Update Event</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default EditEvent;