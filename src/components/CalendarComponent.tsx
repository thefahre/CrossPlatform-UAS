import React, { useEffect, useState } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const CalendarComponent:React.FC = () =>{
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
        <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{start:'prev',center:'title', end:'next'}}
        footerToolbar={{start:'prevYear', center:'dayGridMonth,dayGridWeek,dayGridDay', end:'nextYear'}}
        eventOverlap={true}
        events={eventsList}
        height="60vh"/>
    );
};

export default CalendarComponent;