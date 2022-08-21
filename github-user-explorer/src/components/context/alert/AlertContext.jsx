import { createContext, useState } from "react";

const AlertContext = createContext()

export const AlertProvider = ({ children }) => {

  const [alert, setAlert] = useState(null)

  const createAlert = (m, t) => {
    setAlert({...alert, "msg": m, "type": t})
    setTimeout(() => setAlert(null), 3000)
  }

  return <AlertContext.Provider value={{createAlert, alert,}}>
            { children }
         </AlertContext.Provider>
}

export default AlertContext