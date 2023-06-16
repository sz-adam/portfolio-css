import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import enflag from '../images/flag/uk-flag.gif'
import huflag from '../images/flag/hu-flag.gif'
import gmflag from '../images/flag/gm-flag.gif'


export default function Flag() {
    const { setLanguage } = useContext(LanguageContext)


  return (
    <div>
    
        <img src={enflag} alt=""
          onClick={() => { setLanguage('en') }}
          width={40}
          height={25}
        />
        <img src={huflag} alt=""
          onClick={() => { setLanguage('hu') }}
          width={40}
          height={25}
        />
        <img src={gmflag} alt=""
          onClick={() => { setLanguage('de') }}
          width={40}
          height={25}
        />
     
    </div>
  )
}
