import React from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const testEvent = [{
    id: '1',
    title: 'event 1',
    start: '2021-12-14',
    end: '2021-12-16',
    color:'limegreen'
},{
    id: '1',
    title: 'event 1',
    start: '2021-12-15T20:00:00',
    end: '2021-12-17T10:00:00',
    color:'blue'
},{
    id: '1',
    title: 'event 1',
    start: '2021-12-17T21:00:00',
    end: '2021-12-17T22:00:00',
    color:'red'
}];

const CalendarComponent:React.FC = () =>{
    return(
        <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{start:'prev',center:'title', end:'next'}}
        footerToolbar={{start:'prevYear', center:'dayGridMonth,dayGridWeek,dayGridDay', end:'nextYear'}}
        eventOverlap={true}
        events={testEvent}
        height="60vh"/>
    );
};

export default CalendarComponent;