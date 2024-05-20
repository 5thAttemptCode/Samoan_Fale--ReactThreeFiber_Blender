import { useEffect } from 'react'
import { useToggledGroups } from '../../context/groupContext'


const useResetMaterials = () => {
  const { toggledGroups, toggleGroup } = useToggledGroups()

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isOutsideControls = !event.target.closest('.controls')
      if (isOutsideControls) {
        // Reset all toggled groups to wireframe true
        for (const group in toggledGroups) {
          if (toggledGroups[group]) {
            toggleGroup(group)
          }
        }
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [toggledGroups, toggleGroup])
}

export default useResetMaterials
