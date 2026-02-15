import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

export const LanguageToggle: React.FC = () => {
    const { i18n } = useTranslation();
    
    const currentLang = i18n.language?.startsWith('pt') ? 'pt' : 'en';

    const toggleLanguage = () => {
        const newLang = currentLang === 'pt' ? 'en' : 'pt';
        i18n.changeLanguage(newLang);
    };

    return (
        <button 
            className='language-toggle'
            onClick={toggleLanguage}
            aria-label="Toggle language"
        >
            <span className={currentLang === 'pt' ? 'active' : ''}>PT</span>
            <span className="separator">|</span>
            <span className={currentLang === 'en' ? 'active' : ''}>EN</span>
        </button>
    );
};
