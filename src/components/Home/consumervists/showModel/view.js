import React , {useState , useEffect} from 'react'




export const ClosePopup = _ => {
    const [isClose , setClose] = useState(false);
    console.log("close ");
    setClose(false)
  }


  export const OpenPopup = _ => {
    const [isopen , setIsopen] = useState(true);

    setIsopen(true)
  }