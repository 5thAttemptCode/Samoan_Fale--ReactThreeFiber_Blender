import React from 'react'
import MainExperience from './canvasComponents/mainExperience'
import Nav from './components/nav'
import { Controls } from './components/controls'
import { ToggledGroupsProvider } from './context/groupContext'
import { LanguageProvider } from './context/languageContext'


export default function App() {

  return (
    <LanguageProvider>
      <ToggledGroupsProvider>
        <Nav />
        <MainExperience />
        <Controls />
      </ToggledGroupsProvider>
    </LanguageProvider>
  )
}
