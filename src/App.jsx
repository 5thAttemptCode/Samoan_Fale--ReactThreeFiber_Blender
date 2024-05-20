import React from 'react'
import MainExperience from './canvasComponents/mainExperience'
import Nav from './components/nav'
import { Controls } from './components/controls'
import { ToggledGroupsProvider } from './context/groupContext'


export default function App() {

  return (
    <ToggledGroupsProvider>
      <Nav />
      <MainExperience />
      <Controls />
    </ToggledGroupsProvider>
  )
}
