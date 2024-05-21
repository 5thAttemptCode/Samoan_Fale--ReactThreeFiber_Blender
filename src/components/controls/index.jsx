import React from 'react'
import './style.css'
import useResetMaterials from '../../customHooks/useResetMaterials'
import { useToggledGroups } from '../../context/groupContext'
import { useLanguage } from '../../context/languageContext'
import englishButtonData from '../data/english/englishButtonData'
import englishContentData from '../data/english/englishContentData'
import samoaButtonData from '../data/samoan/samoaButtonData'
import samoaContentData from '../data/samoan/samoaContentData'
import LanguageButtons from '../languageButtons'


export function Controls() {

  // toggle groups
  const { toggledGroups, toggleGroup } = useToggledGroups()

  const handleToggle = (group) => {
    toggleGroup(group)
  }

  // custom hook
  useResetMaterials()

  //language toggle
  const { language } = useLanguage()

  const buttonData = language === 'english' ? englishButtonData : samoaButtonData
  const contentData = language === 'english' ? englishContentData : samoaContentData

  return (
    <div className="container">
      <LanguageButtons />
      <div className="controls-wrapper">
        <div className="controls-container">
          {buttonData.map((singleButton) => (
            <button
              key={singleButton.id}
              onClick={() => handleToggle(singleButton.group)}
              className={toggledGroups[singleButton.group] ? 'button-toggled' : ''}
            >
              {singleButton.value}
            </button>
          ))}
        </div>
        <div className="box">
          {contentData.map((singleContent) => (
            toggledGroups[singleContent.group] && <p key={singleContent.id}>{singleContent.content}</p>
          ))}
        </div>
      </div>
    </div>
  )
}