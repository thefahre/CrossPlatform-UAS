import { IonTitle } from "@ionic/react";
import React from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const CalendarComponent:React.FC = () =>{
    return(
        <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{center:'dayGridMonth,dayGridWeek,dayGridDay'}}
        height="60vh"/>
    );
};

export default CalendarComponent;