import { IonCard, IonCardTitle, IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import React, { useState } from "react";
import Calendar from 'react-calendar';
import './Calendar.css';

const MonthView:React.FC=()=>{
    const [value, onChange] = useState(new Date());
    return(
        <Calendar
        onChange={onChange}
        value={value}
        tileClassName="aaaa"
        prevLabel="Prev"
        nextLabel="Next"/>
    );
}

export default MonthView;
