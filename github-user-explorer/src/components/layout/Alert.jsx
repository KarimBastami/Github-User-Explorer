import AlertContext from "../context/alert/AlertContext"
import { BiErrorAlt } from "react-icons/bi"

import { useContext } from "react"

function Alert() {

  const { alert } = useContext(AlertContext)

  return alert !== null && (
    <div>
      {alert.type === "error" && 
        <div className="flex flex-row space-x-2 mb-3 items-center">
          <BiErrorAlt className="text-3xl text-error"/>
          <div className="font-bold text-white">{alert.msg}</div>
        </div>
      }
    </div>
  )
}

export default Alert