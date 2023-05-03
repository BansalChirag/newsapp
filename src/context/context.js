import React, { createContext, useState } from 'react'

export const DataContext = createContext(null);

const DataProvider = ({children}) => {
    const [mode,setMode] = useState('light')   
  return (
    <DataContext.Provider value={{
        mode,setMode
    }}>
    {children}
    </DataContext.Provider>
  )
}

export default DataProvider