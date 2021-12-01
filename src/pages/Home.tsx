import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import AgendaComponent from '../components/AgendaComponent';
import CalendarComponent from '../components/CalendarComponent';
import { addSharp } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="ion-padding-horizontal">
          <IonButtons slot="end">
            <IonButton routerLink="/createEvent">
              <IonIcon icon={addSharp}/>
            </IonButton>
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding-horizontal">
        <div style={{width:"80%",marginLeft:"auto",marginRight:"auto"}}>
        <CalendarComponent/>
        </div>
        <hr />
        <AgendaComponent/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
