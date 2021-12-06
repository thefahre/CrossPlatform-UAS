import { IonCard, IonCardTitle, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonText, IonTitle } from "@ionic/react";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import '../firebaseConfig.ts';
import React, { useEffect, useState } from "react";

const AgendaComponent:React.FC = () =>{
    const db = getFirestore();
    const [eventsList,setEventsList] = useState<Array<any>>([]);

    useEffect(()=>{
        async function getData(){
            const querySnapshot = await getDocs(collection(db, "events"));
            setEventsList(querySnapshot.docs.map((doc)=>({...doc.data()})));
        }

        getData();
    }, []);


    return(
        <>
        {eventsList.map(events=>(
        <IonItemSliding>
            <IonItemOptions side="start">
                <IonItemOption routerLink="/editEvent">Edit</IonItemOption>
            </IonItemOptions>
            <IonItem>
                <IonCard>
                    <IonCardTitle>{events.title}</IonCardTitle>
                    <IonText>{events.eventtype} | Location  | {events.start} | {events.end} </IonText>
                </IonCard>
            </IonItem>
        </IonItemSliding>
        ))}
        </>
        

    );
};

export default AgendaComponent;