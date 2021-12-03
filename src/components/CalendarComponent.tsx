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
        headerToolbar={{start:'prev',center:'title', end:'next'}}
        footerToolbar={{start:'prevYear', center:'dayGridMonth,dayGridWeek,dayGridDay', end:'nextYear'}}
        eventOverlap={true}
        height="60vh"/>
    );
};

export default CalendarComponent;