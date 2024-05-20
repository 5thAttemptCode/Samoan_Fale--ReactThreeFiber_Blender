import React, { createContext, useContext, useState } from 'react'


const ToggledGroupsContext = createContext()

export const ToggledGroupsProvider = ({ children }) => {
  const [toggledGroups, setToggledGroups] = useState({
    floor: false,
    pile: false,
    roof: false,
    rooftruss: false,
  })
  const [lastClickedButton, setLastClickedButton] = useState(null)

  const toggleGroup = (group) => {
    setToggledGroups((prev) => {
      const updatedGroups = {
        ...prev,
        [group]: !prev[group],
      }

      // Reset the last clicked button
      if (lastClickedButton && lastClickedButton !== group) {
        updatedGroups[lastClickedButton] = false
      }

      setLastClickedButton(group)
      return updatedGroups
    })
  }

  return (
    <ToggledGroupsContext.Provider value={{ toggledGroups, toggleGroup }}>
      {children}
    </ToggledGroupsContext.Provider>
  )
}

export const useToggledGroups = () => useContext(ToggledGroupsContext)
