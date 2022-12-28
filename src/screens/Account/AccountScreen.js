import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { UserLoggedScreen } from "./UserLoggedScreen";
import { UserGuestScreen } from "./UserGuestScreen/UserGuestScreen";
import { LoadingModal } from "../../components";

export function AccountScreen(){

    const [hasLogged, setHasLooged] = useState(null);

    useEffect(()=> {
        const auth = getAuth();
        onAuthStateChanged(auth, (user)=>{
            setHasLooged(user ? true : false);
        });
    }, []);

    if (hasLogged === null) {
        return <LoadingModal show text='cargando' />
    } 
    
    return hasLogged ? <UserLoggedScreen /> : <UserGuestScreen />
}