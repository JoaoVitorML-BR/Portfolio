import {
    SiJavascript,
    SiTypescript,
    SiSpringboot,
    SiNodedotjs,
    SiNestjs,
    SiExpress,
    SiPostgresql,
    SiMysql,
    SiMongodb,
    SiDocker,
    SiGit,
    SiReact,
    SiGo,
    SiPython,
    SiRabbitmq,
    SiNginx,
    SiDigitalocean
} from 'react-icons/si';
import { FaJava, FaAws, FaCode, FaDownload } from 'react-icons/fa';
import { useTranslation } from '../hooks/useTranslation';

import MyImage from '../img/joao.jpeg';
import { Certificates } from './certificates';
import { SocialMedia } from './socialMedia';

const iconSize = 28;
const iconStyle = { marginRight: '8px', verticalAlign: 'middle' };

export const LanguagesAndTecnologiesExperience: React.FC = () => {
    const { t } = useTranslation();
    
    return (
        <>
            <div className='sticky-content pt-4'>
                <div className='container-image-presentation'>
                    <img className='img-style' src={MyImage} alt="João Vitor" />
                    <div className='text-group'>
                        <h1 className='textStyleGeneral fs-2'>João Vitor</h1>
                        <h2 className='textStyleGeneral fs-4'>
                            <FaCode size={30} style={iconStyle} />
                            {t('header.role')}
                        </h2>
                        <a
                            href='/cv.pdf'
                            download='Joao_Vitor_Mandu_CV.pdf'
                            className='btn-download-cv'
                        >
                            <FaDownload size={16} style={{ marginRight: '8px' }} />
                            {t('header.downloadCV')}
                        </a>
                    </div>
                </div>
                <div className='custom-divider'></div>
                <h3 className='skills-style-text'>{t('skills.title')}</h3>

                <h5 className='textStyle'>{t('skills.mainLanguages')}</h5>
                <div className='tecnologies-style textStyleGeneral'>
                    <p className='fw-lighter paragath-style-tecnology'><FaJava size={iconSize} style={{ ...iconStyle, color: '#007396' }} /> Java</p>
                    <p className='fw-lighter paragath-style-tecnology'><SiTypescript size={iconSize} style={{ ...iconStyle, color: '#3178C6' }} /> TypeScript</p>
                    <p className='fw-lighter paragath-style-tecnology'><SiJavascript size={iconSize} style={{ ...iconStyle, color: '#F7DF1E' }} /> JavaScript</p>
                </div>

                <h5 className='textStyle'>{t('skills.backendFrameworks')}</h5>
                <div className='tecnologies-style textStyleGeneral'>
                    <p className='fw-lighter paragath-style-tecnology'><SiSpringboot size={iconSize} style={{ ...iconStyle, color: '#6DB33F' }} /> Spring Boot</p>
                    <p className='fw-lighter paragath-style-tecnology'><SiNestjs size={iconSize} style={{ ...iconStyle, color: '#E0234E' }} /> NestJS</p>
                    <p className='fw-lighter paragath-style-tecnology'><SiExpress size={iconSize} style={{ ...iconStyle, color: '#FFFFFF' }} /> Express</p>
                </div>

                <h5 className='textStyle'>{t('skills.techDevops')}</h5>
                <div className='tecnologies-style textStyleGeneral'>
                    <p className='fw-lighter paragath-style-tecnology'><SiNodedotjs size={iconSize} style={{ ...iconStyle, color: '#339933' }} /> Node.js</p>
                    <p className='fw-lighter paragath-style-tecnology'><SiDocker size={iconSize} style={{ ...iconStyle, color: '#2496ED' }} /> Docker</p>
                    <p className='fw-lighter paragath-style-tecnology'><FaAws size={iconSize} style={{ ...iconStyle, color: '#FF9900' }} /> AWS</p>
                    <p className='fw-lighter paragath-style-tecnology'><SiDigitalocean size={iconSize} style={{ ...iconStyle, color: '#0080FF' }} /> Digital Ocean</p>
                    <p className='fw-lighter paragath-style-tecnology'><SiGit size={iconSize} style={{ ...iconStyle, color: '#F05032' }} /> Git</p>
                    <p className='fw-lighter paragath-style-tecnology'><SiRabbitmq size={iconSize} style={{ ...iconStyle, color: '#FF6600' }} /> RabbitMQ</p>
                </div>

                <h5 className='textStyle'>{t('skills.databases')}</h5>
                <div className='tecnologies-style textStyleGeneral'>
                    <p className='fw-lighter paragath-style-tecnology'><SiPostgresql size={iconSize} style={{ ...iconStyle, color: '#4169E1' }} /> PostgreSQL</p>
                    <p className='fw-lighter paragath-style-tecnology'><SiMysql size={iconSize} style={{ ...iconStyle, color: '#4479A1' }} /> MySQL</p>
                    <p className='fw-lighter paragath-style-tecnology'><SiMongodb size={iconSize} style={{ ...iconStyle, color: '#47A248' }} /> MongoDB</p>
                </div>

                <h5 className='textStyle'>{t('skills.otherTech')}</h5>
                <div className='tecnologies-style textStyleGeneral'>
                    <p className='fw-lighter paragath-style-tecnology'><SiReact size={iconSize} style={{ ...iconStyle, color: '#61DAFB' }} /> React</p>
                    <p className='fw-lighter paragath-style-tecnology'><SiGo size={iconSize} style={{ ...iconStyle, color: '#00ADD8' }} /> Golang</p>
                    <p className='fw-lighter paragath-style-tecnology'><SiPython size={iconSize} style={{ ...iconStyle, color: '#3776AB' }} /> Python</p>
                    <p className='fw-lighter paragath-style-tecnology'><SiNginx size={iconSize} style={{ ...iconStyle, color: '#009639' }} /> Nginx</p>
                </div>

                <Certificates />
                <SocialMedia />

                <div className='container-footer-socialmidia'>

                </div>
            </div>
        </>
    );
};