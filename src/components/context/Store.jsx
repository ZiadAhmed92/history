import { createContext, useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode';

export let speechContext = createContext(0);



export default function SpeechContextProvider(props) {


  // let { dataUser, userData } = useContext(speechContext);
  const [userData, setUserdata] = useState(null)

  function dataUser() {
    let token = localStorage.getItem('Token');
    let userData = jwtDecode(token);
    setUserdata(userData)
  }
  useEffect(() => {
    if (localStorage.getItem('Token')) return dataUser()
  }, [])

  return (
    <speechContext.Provider
      value={{

        dataUser,
        userData,
      

      }}
    >
      {props.children}
    </speechContext.Provider>
  );
}
