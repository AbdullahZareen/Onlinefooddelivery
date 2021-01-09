import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext(null)

export const useUser = () => useContext(UserContext)

export const UserProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const ipaddress = '192.168.2.103'

  return (
    <UserContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, user, setUser, ipaddress }}
    >
      {props.children}
    </UserContext.Provider>
  )
}
