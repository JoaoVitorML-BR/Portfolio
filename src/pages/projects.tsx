import {
    SiTypescript,
    SiNodedotjs,
    SiPostgresql,
    SiMysql,
    SiReact,
    SiGo,
    SiNginx
} from 'react-icons/si';
import { useTranslation } from '../hooks/useTranslation';

import iscompatibleImage from '../img/iscompatilble-site.png';
import tubeLoadSaveImage from '../img/tubeloads-site.png';
import golangImage from '../img/golangImage.jpg';
import { AcademicTraining } from './academicTraining';

const iconSize = 24;
const iconStyle = { marginRight: '6px', verticalAlign: 'middle' };

export const Projects = () => {
    const { t } = useTranslation();
    
    return (
        <>
            <div className='custom-divider'></div>
            <h3 className='textStyleGeneral'>{t('projects.title')}</h3>
            <div className='container-experiences'>
                <a href='https://www.iscompatible.com.br/' target="blank" className='link-no-underline'>
                    <h4 className='textStyleGeneral fw-normal fs-4'>Verificador de compatibilidade de peças para computador</h4>
                    <h5 className='textStyleGeneral fw-light fs-5'>{t('projects.iscompatible.role')}</h5>
                    <h6 className='textStyleGeneral fw-lighter paragath-style-tecnology'>{t('projects.iscompatible.period')}</h6>
                    <p className='textStyleGeneral fw-light pt-1 paragath-style-tecnology'>{t('projects.iscompatible.description')}<br /></p>
                    <div className='tecnologies-style textStyleGeneral'>
                        <p className='fw-lighter paragath-style-tecnology'><SiReact size={iconSize} style={{ ...iconStyle, color: '#61DAFB' }} /> React.js</p>
                        <p className='fw-lighter paragath-style-tecnology'><SiNodedotjs size={iconSize} style={{ ...iconStyle, color: '#339933' }} /> Node.js</p>
                        <p className='fw-lighter paragath-style-tecnology'><SiTypescript size={iconSize} style={{ ...iconStyle, color: '#3178C6' }} /> TypeScript</p>
                        <p className='fw-lighter paragath-style-tecnology'><SiMysql size={iconSize} style={{ ...iconStyle, color: '#4479A1' }} /> MySQL</p>
                        <p className='fw-lighter paragath-style-tecnology'><SiNginx size={iconSize} style={{ ...iconStyle, color: '#009639' }} /> Nginx</p>
                    </div>
                    <div className="image-container">
                        <img className="images-presentation" src={iscompatibleImage} alt="iscompatible" />
                    </div>
                </a>
            </div>
            <hr className="hr-style"></hr>


            <div className='container-experiences'>
                <a href='https://tubeloadsave.vercel.app/' target="blank" className='link-no-underline'>
                    <h4 className='textStyleGeneral fw-normal fs-4'>Baixador de vídeos e músicas do youtube</h4>
                    <h5 className='textStyleGeneral fw-light fs-5'>{t('projects.tubeload.role')}</h5>
                    <h6 className='textStyleGeneral fw-lighter paragath-style-tecnology'>{t('projects.tubeload.period')}</h6>
                    <p className='textStyleGeneral fw-light pt-1 paragath-style-tecnology'>{t('projects.tubeload.description')}<br /></p>
                    <div className='tecnologies-style textStyleGeneral'>
                        <p className='fw-lighter paragath-style-tecnology'><SiReact size={iconSize} style={{ ...iconStyle, color: '#61DAFB' }} /> React.js</p>
                        <p className='fw-lighter paragath-style-tecnology'><SiNodedotjs size={iconSize} style={{ ...iconStyle, color: '#339933' }} /> Node.js</p>
                        <p className='fw-lighter paragath-style-tecnology'><SiTypescript size={iconSize} style={{ ...iconStyle, color: '#3178C6' }} /> TypeScript</p>
                    </div>
                    <div className="image-container">
                        <img className='images-presentation' src={tubeLoadSaveImage} alt="tubeloadsave" />
                    </div>
                </a>
            </div>
            <hr className="hr-style"></hr>

            <div className='container-experiences'>
                <h4 className='textStyleGeneral fw-normal fs-4'>API - Login</h4>
                <h5 className='textStyleGeneral fw-light fs-5'>{t('projects.apiLogin.role')}</h5>
                <h6 className='textStyleGeneral fw-lighter paragath-style-tecnology'>{t('projects.apiLogin.period')}</h6>
                <p className='textStyleGeneral fw-light pt-1 paragath-style-tecnology'>{t('projects.apiLogin.description')}<br /></p>
                <div className='tecnologies-style textStyleGeneral'>
                    <p className='fw-lighter paragath-style-tecnology'><SiGo size={iconSize} style={{ ...iconStyle, color: '#00ADD8' }} /> Golang</p>
                    <p className='fw-lighter paragath-style-tecnology'><SiPostgresql size={iconSize} style={{ ...iconStyle, color: '#4169E1' }} /> PostgreSQL</p>
                    <p className='fw-lighter paragath-style-tecnology'>SQLC</p>
                </div>
                <div className="image-container">
                    <img className="images-presentation" src={golangImage} alt="golang" />
                </div>
            </div>
            <AcademicTraining />
        </>
    );
};