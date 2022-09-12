import React, {useState , useEffect} from 'react'

export default function useNetwork(){
    const [isOnline, setNetwork] = useState(window.navigator.onLine);
    useEffect(() => {
    window.addEventListener("offline", 
            () => setNetwork(window.navigator.onLine)
          );
    window.addEventListener("online", 
            () => setNetwork(window.navigator.onLine)
          );
    });
    return isOnline;
    };