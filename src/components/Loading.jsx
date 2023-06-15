import { useContext } from 'react'
import '../styles/Loading.css'
import { LanguageContext } from '../context/LanguageContext'
const i18n = require('../utils/i18n')
export default function Loading(props) {
    const { language, setLanguage } = useContext(LanguageContext)
    return (
        <div className='load'>
            <div className="loading">
                <div className='loadings'>
                    <div className='loadingss'></div>
                </div>
            </div>
            <h1>{i18n.text(language, i18n.MAP['loading-loading'])}</h1>
        </div>
    )
}