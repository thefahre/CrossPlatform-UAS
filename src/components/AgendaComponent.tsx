import { IonCard, IonCardTitle, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonText, IonTitle } from "@ionic/react";
import { getFirestore, getDocs, collection, deleteDoc, doc} from "firebase/firestore";
import '../firebaseConfig.ts';
import React, { useEffect, useState } from "react";
import { useHistory, useParams} from "react-router-dom";

const AgendaComponent:React.FC = () =>{
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



    const DeleteEventHandler = async () =>{
        eventsList.map( async events=>{
            await deleteDoc(doc(db,"events",events.title));
            hist.push("/home");
        })
       };


    return(
        <>
        {eventsList.length === 0 && (
            <IonTitle className="ion-text-center"> There are currently no event, please add a new event </IonTitle>
        )}
        {eventsList.map(events=>(
        <IonItemSliding>
            <IonItemOptions side="start">
                <IonItemOption routerLink="/editEvent/:eId">Edit</IonItemOption>
                <IonItemOption onClick={DeleteEventHandler} color="danger">Delete</IonItemOption>
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