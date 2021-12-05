import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonNote, IonPage, IonTitle, IonToast, IonToolbar } from "@ionic/react";
import React, { useRef, useState } from "react";
import { getFirestore, addDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import '../firebaseConfig';
import { useHistory } from "react-router";

const Register:React.FC = () =>{
    const unameInput = useRef<HTMLIonInputElement>(null);
    const emailInput = useRef<HTMLIonInputElement>(null);
    const passInput = useRef<HTMLIonInputElement>(null);
    const rePassInput = useRef<HTMLIonInputElement>(null);
    const hist = useHistory();

    const [alertToast1, setAlertToast1] = useState(false);
    const [alertToast3, setAlertToast3] = useState(false);
    const [notifToast1, setNotifToast1] = useState(false);


    const db = getFirestore();
    const auth = getAuth();

    const verifyInput = () =>{
        const uname = unameInput.current?.value as string;
        const email = emailInput.current?.value as string;
        const pass = passInput.current?.value as string;
        const rePass = rePassInput.current?.value as string;

        if(!uname || !email || !pass || !rePass){
            setAlertToast1(true);
        }        

        if(pass!=rePass){
            setAlertToast3(true);
        }

        /*Email validation masih belum */

        createUserWithEmailAndPassword(auth, email, pass).then((userCredential)=>{
            const user = userCredential.user;
            setNotifToast1(true);
            hist.push('/login')
        }).catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
        })

        

        
    };


    return(
        <IonPage>
            <IonHeader>
                <IonToolbar className="ion-padding-horizontal">
                    <IonTitle>Register</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-padding-horizontal">
                <IonItem class="ion-margin">
                    <IonLabel position="floating"> Username </IonLabel>
                    <IonInput type="text" ref={unameInput} required/>
                </IonItem>
                <IonItem className="ion-margin">
                    <IonLabel position="floating"> Email </IonLabel>
                    <IonInput type="email" ref={emailInput} required/>
                </IonItem>  
                <IonItem className="ion-margin">
                    <IonLabel position="floating"> Password </IonLabel>
                    <IonInput type="password" ref={passInput} minlength={8} required/>
                </IonItem>  
                <IonItem className="ion-margin">
                    <IonLabel position="floating"> Confirm Password </IonLabel>
                    <IonInput type="password" ref={rePassInput} minlength={8} required/>
                </IonItem>                
                <IonNote className="ion-margin"> Already have an account? <a href="/login">Login</a></IonNote>
                <br />
                <IonButton className="ion-margin" onClick={verifyInput}>Register</IonButton>
                <IonToast 
                isOpen={alertToast1} 
                onDidDismiss={()=> setAlertToast1(false)}
                message="Please fill all required field"
                duration={2000}/>

                <IonToast 
                isOpen={notifToast1} 
                onDidDismiss={()=> setNotifToast1(false)}
                message="User Registered"
                duration={2000}/>
                <IonToast 
                isOpen={alertToast3} 
                onDidDismiss={()=> setAlertToast3(false)}
                message="Please password is not match"
                duration={2000}/>
            </IonContent>
        </IonPage>
    );
};

export default Register;