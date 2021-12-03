import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonList, IonListHeader, IonMenuButton, IonModal, IonNote, IonPage, IonText, IonTitle, IonToolbar, useIonModal, useIonPopover } from '@ionic/react';
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
  const [showModal, setShowModal] = useState(false);
  const [present, dismiss] = useIonPopover(PopoverList, { onHide: () => dismiss() });

  return (
    <IonPage>
      <IonModal isOpen={showModal} >
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Dev Team</IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="ion-text-center">
            <IonCardSubtitle> Marina Princessa S - 00000031720 </IonCardSubtitle>
            <IonCardSubtitle> Fahreza Ali S - 00000033092</IonCardSubtitle>
            <IonCardSubtitle> Gusti Bagus Bill - 000000[lupa]</IonCardSubtitle>

            <IonButton onClick={() => setShowModal(false)} expand="full">Close Modal</IonButton>

          </IonCardContent>
        </IonCard>
      </IonModal>
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
        <div style={{width:"80%",marginLeft:"auto",marginRight:"auto",overflow:"hidden"}}>
        <CalendarComponent />
        </div>
        <div>
          <IonTitle className="ion-margin-vertical">Agenda</IonTitle>
          <AgendaComponent/>
        </div>
        <IonFooter className="ion-text-center ion-padding-vertical">
          <IonNote> <a onClick={() => setShowModal(true)}> Developer Team </a> </IonNote>
        </IonFooter>
      </IonContent>
    </IonPage>
  );
};

export default Home;
