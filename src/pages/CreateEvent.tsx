import { IonBackButton, IonButton, IonButtons, IonCheckbox, IonCol, IonContent, IonDatetime, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonNote, IonPage, IonRow, IonSelect, IonSelectOption, IonSelectPopover, IonTitle, IonToolbar } from "@ionic/react";
import React, { useRef, useState } from "react";
import '../firebaseConfig.ts';
import { addDoc, collection, doc, getFirestore, setDoc } from 'firebase/firestore';
import { useHistory } from "react-router";

const CreateEvent:React.FC = () =>{
    const [eventType, setEventType] = useState<string>("");
    const [eventRecurType, setEventRecurType] = useState<string>("");
    const [selectedStartDate, setSelectedStartDate] = useState<string>("");
    const [selectedEndDate, setSelectedEndDate] = useState<string>("");
    const [recurEvent, setRecurEvent] = useState(false);

    const eventNameRef = useRef<HTMLIonInputElement>(null);
    const eventCreatorRef = useRef<HTMLIonInputElement>(null);
    const eventStartDateRef = useRef<HTMLIonDatetimeElement>(null);
    const eventEndDateRef = useRef<HTMLIonDatetimeElement>(null);

    const hist = useHistory();
    const db = getFirestore();

    const insertEventHandler = async () =>{
        const eventName = eventNameRef.current?.value;
        const eventCreator = eventCreatorRef.current?.value;
        const eventStartDate = eventStartDateRef.current?.value;
        const eventEndDate = eventEndDateRef.current?.value;
        const eType = eventType;

        if(!eventName || !eventCreator || !eventStartDate || !eType){
            console.log("Please fill the form ");
        }

        const eventRef = collection(db,"events");

        const docRef = await setDoc(doc(eventRef, eventName?.toString()),{
            id:Math.random(),
            title:eventName,
            creator:eventCreator,
            start:eventStartDate,
            end:eventEndDate,
            eventtype:eType,
            color:eventColor()
        });
        hist.push("/home");
        console.log("Written with id :", docRef);
    }

    const eventColor = () =>{
        const eventTypes = eventType;
        var eventCol;
        switch(eventTypes){
            case "school": 
                eventCol = "green";
                break;
            case "work":
                eventCol = "lightblue";
                break;
            case "group":
                eventCol = "blue";
                break;
            case "private" : 
                eventCol = "purple";
                break;
        }
        return eventCol;
    }


    return(
        <IonPage>
            <IonHeader>
                <IonToolbar className="ion-padding-horizontal">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home"/>
                    </IonButtons>
                    <IonTitle>Create New Event</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating"> Event Name </IonLabel>
                                <IonInput type="text" ref={eventNameRef} required/>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating"> Event Creator </IonLabel>
                                <IonInput type="text" ref={eventCreatorRef} required/>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating"> Type </IonLabel>
                                <IonSelect value={eventType} onIonChange={e => setEventType(e.detail.value)} placeholder="Select Event Type" >
                                    <IonSelectOption value="school">School</IonSelectOption>
                                    <IonSelectOption value="work">Work</IonSelectOption>
                                    <IonSelectOption value="group">Group</IonSelectOption>
                                    <IonSelectOption value="private">Private</IonSelectOption>
                                </IonSelect>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating"> Start Date </IonLabel>
                            <IonDatetime min={new Date().toISOString()} value={selectedStartDate} onIonChange={e => setSelectedStartDate(e.detail.value!)} placeholder="Select Start Date and Time" ref={eventStartDateRef} pickerFormat="DD-MMM-YYYY HH:mm" displayFormat="DD-MMMM-YYYY HH:mm"></IonDatetime>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating"> End Date </IonLabel>
                            <IonDatetime min={new Date().toISOString()} value={selectedEndDate} onIonChange={e => setSelectedEndDate(e.detail.value!)} placeholder="Select End Date and Time" ref={eventEndDateRef} pickerFormat="DD-MMM-YYYY HH:mm" displayFormat="DD-MMMM-YYYY HH:mm"></IonDatetime>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem color="transparent" lines="none">
                            <IonCheckbox slot="start" checked={recurEvent} onIonChange={e=>setRecurEvent(e.detail.checked)}/>
                            <IonLabel >Reccuring Event</IonLabel>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    {recurEvent && (
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating"> Reccuring Mode </IonLabel>
                                <IonSelect value={eventRecurType} onIonChange={e => setEventRecurType(e.detail.value)} placeholder="Select Reccuring Mode">
                                    <IonSelectOption value="daily">Daily</IonSelectOption>
                                    <IonSelectOption value="weekly">Weekly</IonSelectOption>
                                    <IonSelectOption value="monthly">Monthly</IonSelectOption>
                                    <IonSelectOption value="anually">Annually</IonSelectOption>
                                </IonSelect>
                            </IonItem>
                        </IonCol>
                    </IonRow>)}
                    <IonRow>
                        <IonCol>
                            <IonButton expand="full" onClick={insertEventHandler}>Add Event</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default CreateEvent;