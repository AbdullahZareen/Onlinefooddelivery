import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext({})

export const useUser = () => useContext(UserContext)

export const UserProvider = (props) => {
  return (
    <UserContext.Provider value={{}}>{props.children}</UserContext.Provider>
  )
}
