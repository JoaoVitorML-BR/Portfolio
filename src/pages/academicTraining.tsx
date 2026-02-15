import { useTranslation } from '../hooks/useTranslation';
import IfalLogo from '../img/ifal_image.jpeg';

export const AcademicTraining = () => {
    const { t } = useTranslation();
    
    return (
        <>
            <div className='custom-divider'></div>
            <h4 className='textStyleGeneral'>{t('academic.title')}</h4>
            <div className='container-experiences'>
                <h5 className='textStyleGeneral fw-light fs-5'>Instituto Federal de Alagoas - IFAL</h5>
                <h6 className='textStyleGeneral fw-lighter paragath-style-tecnology'><strong>{t('academic.start')}:</strong> 03/2022</h6>
                <h6 className='textStyleGeneral fw-lighter paragath-style-tecnology'><strong>{t('academic.expectedEnd')}:</strong> 06/2026</h6>
                <h6 className='textStyleGeneral fw-lighter paragath-style-tecnology'><strong>{t('academic.course')}:</strong> {t('academic.courseName')}</h6>
                <div className="image-container">
                    <img className="images-presentation" src={IfalLogo} alt="ifal" />
                </div>
            </div>
        </>
    );
};