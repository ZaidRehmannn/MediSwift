import React , {createContext , useContext , useState} from 'react'

const MediaSwiftAdminContext = createContext()

function MediaSwiftAdminContextProvider({children}) {
  const [token , settoken] = useState("")
  

  const values = {
    token, 
    settoken
  }

  return (
    <MediaSwiftAdminContext.Provider
        value={values}
    >
        {children}
    </MediaSwiftAdminContext.Provider>
  )
}

export const useMediaSwiftAmdin = () => (
    useContext(MediaSwiftAdminContext)
)


export default MediaSwiftAdminContextProvider