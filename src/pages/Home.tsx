import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonList, IonListHeader, IonPage, IonTitle, IonToolbar, useIonPopover } from '@ionic/react';
import { useState } from 'react';
import AgendaComponent from '../components/AgendaComponent';
import CalendarComponent from '../components/CalendarComponent';
import { addSharp, chevronDown } from 'ionicons/icons';
import './Home.css';

const PopoverList: React.FC<{
  onHide: () => void;
}> = ({ onHide }) => (
  <IonList>
    <IonItem button>Profile</IonItem>
    <IonItem button routerLink="/landing">Logout</IonItem>
  </IonList>
);

const Home: React.FC = () => {
  const [present, dismiss] = useIonPopover(PopoverList, { onHide: () => dismiss() });
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="ion-padding-horizontal">
          <IonButtons slot="end">
            <IonButton routerLink="/createEvent">
              <IonIcon icon={addSharp}/>
            </IonButton>
            <IonButton onClick={(e) =>
            present({
              event: e.nativeEvent,
            })}>
              <IonIcon icon={chevronDown}/>
            </IonButton>
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
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
