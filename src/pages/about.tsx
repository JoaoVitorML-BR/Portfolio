import { Trans } from 'react-i18next';
import { useTranslation } from '../hooks/useTranslation';

export const AboutMe = () => {
    const { t } = useTranslation();
    
    return (
        <>
            <h3 className='textStyleGeneral'>{t('about.title')}</h3>
            <p className='textStyleGeneral fw-light paragath-style-tecnology'>
                <Trans i18nKey="about.description" components={{ strong: <strong /> }} /><br /><br />
                <Trans i18nKey="about.description2" components={{ strong: <strong /> }} /><br /><br />
                <Trans i18nKey="about.description3" components={{ strong: <strong /> }} />
                {' '}<a href='https://www.instagram.com/asaoficial/' target="blank" rel="noopener noreferrer" className='link-no-underline'>Asa Gigante</a>
            </p>
        </>
    );
};