import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonHeader, IonicSlides, IonImg, IonNote, IonPage, IonRow, IonText, IonThumbnail, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import './Home.css';
import f1 from '../images/feature_1.png';
import f2 from '../images/feature_2.png';
import f3 from '../images/feature_3.png';


import { Swiper, SwiperSlide} from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css';
import '@ionic/react/css/ionic-swiper.css';

const Landing:React.FC = ()=>{
    return(
        <IonPage>
        <IonContent fullscreen className="ion-text-center">
            <IonGrid style={{height:"100%"}}>
                <IonRow className="ion-align-items-center" style={{height:"80%"}}>
                    <IonCol className="ion-text-center">
                        <Swiper 
                        modules={[IonicSlides]}>
                            <SwiperSlide>
                                <IonCard>
                                    <img className="feature-img" src={f1}/>
                                    <IonCardContent>
                                        <IonCardHeader> Add your event to calendar</IonCardHeader>
                                    </IonCardContent>
                                </IonCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <IonCard>
                                    <img className="feature-img" src={f2}/>
                                    <IonCardContent>
                                        <IonCardHeader> Sync event with participants </IonCardHeader>
                                    </IonCardContent>
                                </IonCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <IonCard>
                                   <img className="feature-img" src={f3}/>
                                   <IonCardContent>
                                        <IonCardHeader> Sync event in all device</IonCardHeader>
                                    </IonCardContent>
                                </IonCard>
                            </SwiperSlide>
                        </Swiper>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-padding-vertical">
                    <IonCol>
                        <IonButton routerLink="/login" expand="full">Login</IonButton>
                    </IonCol>
                    <IonCol>
                        <IonButton routerLink="/register" expand="full">Register</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
      </IonPage>
    );
};

export default Landing;