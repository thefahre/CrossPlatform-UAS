import { IonButton, IonCheckbox, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonNote, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import React, { useRef, useState } from "react";
import { useHistory } from "react-router";

const Login:React.FC = () =>{
    const emailInput = useRef<HTMLIonInputElement>(null);
    const passInput = useRef<HTMLIonInputElement>(null);
    const hist = useHistory();
    

    const auth = getAuth();

    const LogIn=()=>{
        const email = emailInput.current?.value as string;
        const password = passInput.current?.value as string;

        if(!email || !password){
            console.log("Fill in the form to login");
        };

        signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
            const user = userCredential.user;
            hist.push("/home")
        }).catch((error)=>{
            const errorCode = error.code;
            const errorMsg = error.message;
        });
    }

    const [checked, setChecked] = useState(false);
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar className="ion-padding-horizontal">
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-padding-horizontal">
                <IonItem class="ion-margin">
                    <IonLabel position="floating"> Email </IonLabel>
                    <IonInput type="email" ref={emailInput} required/>
                </IonItem>
                <IonItem className="ion-margin">
                    <IonLabel position="floating"> Password </IonLabel>
                    <IonInput type="password" ref={passInput} required/>
                </IonItem>
                <IonItem className="ion-margin" color="transpparent" lines="none">
                    <IonLabel > Remember Me</IonLabel>
                    <IonCheckbox slot="start" checked={checked} onIonChange={e => setChecked(e.detail.checked)} />
                </IonItem>
                <IonNote className="ion-margin"> Don't have an account? <a href="/register">Register</a> </IonNote>
                <br />
                <IonButton className="ion-margin" onClick={LogIn}> Login</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Login;