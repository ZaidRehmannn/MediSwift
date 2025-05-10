import React, { createContext, useContext, useState } from 'react'

const MediSwiftAdminContext = createContext()

function MediSwiftAdminContextProvider({ children }) {
  const [token, settoken] = useState("")

  const values = {
    token,
    settoken
  }

  return (
    <MediSwiftAdminContext.Provider
      value={values}
    >
      {children}
    </MediSwiftAdminContext.Provider>
  )
}

export const useMediSwiftAdmin = () => (
  useContext(MediSwiftAdminContext)
)

export default MediSwiftAdminContextProvider