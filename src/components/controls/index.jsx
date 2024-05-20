import React from 'react'
import useResetMaterials from '../../customHooks/useResetMaterials'
import { useToggledGroups } from '../../context/groupContext'


export function Controls() {
  const { toggleGroup } = useToggledGroups()

  useResetMaterials()

  const handleToggle = (group) => {
    toggleGroup(group)
  }

  return (
    <div className="controls">
      <button onClick={() => handleToggle('floor')}>Floor</button>
      <button onClick={() => handleToggle('pile')}>Piles</button>
      <button onClick={() => handleToggle('roof')}>Roof</button>
      <button onClick={() => handleToggle('rooftruss')}>Rooftruss</button>
    </div>
  )
}