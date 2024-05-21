import React from 'react'
import './style.css'
import { useLanguage } from '../../context/languageContext'


export default function LanguageButtons() {

  const { language, toggleLanguage } = useLanguage()

  return (
    <>
      <h5>Choose language</h5>
      <ul>
        <button
          className={language === 'english' ? 'active' : ''}
          onClick={() => toggleLanguage('english')}
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1920px-Flag_of_the_United_Kingdom_%281-2%29.svg.png" alt="" />
        </button>
        <button
          className={language === 'samoan' ? 'active' : ''}
          onClick={() => toggleLanguage('samoan')}
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Samoa.svg/1920px-Flag_of_Samoa.svg.png" alt="" />
        </button>
      </ul>
    </>
  )
}
