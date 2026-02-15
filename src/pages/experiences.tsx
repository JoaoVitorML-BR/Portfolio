import React from 'react';
import {
  SiJavascript,
  SiSpringboot,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiGit,
  SiGo,
  SiPython,
  SiGooglesheets
} from 'react-icons/si';
import { FaJava, FaAws, FaChartBar } from 'react-icons/fa';
import { useTranslation } from '../hooks/useTranslation';

import CompassImage from '../img/compass_uol_cover.jpeg';
import prefArapiracaImage from '../img/pref-arapiraca.png';
import DitImage from '../img/dit-ifal-logo.jpeg';

const iconSize = 24;
const iconStyle = { marginRight: '6px', verticalAlign: 'middle' };

export const Experiences = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <div>
        <div className='custom-divider'></div>
        <h3 className='textStyleGeneral'>{t('experience.title')}</h3>
        <div className="scrollable">
          <div className='container-experiences'>
            <div className='gradient-broder'>
              <a
                href='https://compass.uol/en/home/'
                target="blank"
                rel="noopener noreferrer"
                className='link-no-underline'
              >
                <div className='experience-content'>
                  <h4 className='textStyleGeneral fw-normal fs-4'>Compass UOL</h4>
                  <h5 className='textStyleGeneral fw-light fs-5'>{t('experience.compass.role')}</h5>
                  <h6 className='textStyleGeneral fw-lighter paragath-style-tecnology'>{t('experience.compass.period')}</h6>
                  <p className='textStyleGeneral fw-light paragath-style-tecnology'>
                    {t('experience.compass.description')}
                  </p>
                  <div className='tecnologies-style textStyleGeneral'>
                    <p className='fw-lighter paragath-style-tecnology'><FaJava size={iconSize} style={{ ...iconStyle, color: '#007396' }} /> Java</p>
                    <p className='fw-lighter paragath-style-tecnology'><SiSpringboot size={iconSize} style={{ ...iconStyle, color: '#6DB33F' }} /> Spring Boot</p>
                    <p className='fw-lighter paragath-style-tecnology'><SiMysql size={iconSize} style={{ ...iconStyle, color: '#4479A1' }} /> MySQL</p>
                    <p className='fw-lighter paragath-style-tecnology'><SiGit size={iconSize} style={{ ...iconStyle, color: '#F05032' }} /> Git</p>
                    <p className='fw-lighter paragath-style-tecnology'><FaAws size={iconSize} style={{ ...iconStyle, color: '#FF9900' }} /> AWS</p>
                  </div>
                  <div className="image-container">
                    <img className="images-presentation" src={CompassImage} alt="Compass UOL" />
                  </div>
                </div>
              </a>
            </div>
          </div>
          <hr className="hr-style"></hr>

          <div className='container-experiences'>
            <a
              href='https://web.arapiraca.al.gov.br/'
              target="blank"
              rel="noopener noreferrer"
              className='link-no-underline'>
              <h4 className='textStyleGeneral fw-normal fs-4'>Prefeitura Municipal de Arapiraca</h4>
              <h5 className='textStyleGeneral fw-light fs-5'>{t('experience.prefeitura.role')}</h5>
              <h6 className='textStyleGeneral fw-lighter paragath-style-tecnology'>{t('experience.prefeitura.period')}</h6>
              <p className='textStyleGeneral fw-light paragath-style-tecnology'>
                {t('experience.prefeitura.description')}
              </p>
              <div className='tecnologies-style textStyleGeneral'>
                <p className='fw-lighter paragath-style-tecnology'><SiPython size={iconSize} style={{ ...iconStyle, color: '#3776AB' }} /> Python</p>
                <p className='fw-lighter paragath-style-tecnology'><SiJavascript size={iconSize} style={{ ...iconStyle, color: '#F7DF1E' }} /> JavaScript</p>
                <p className='fw-lighter paragath-style-tecnology'><SiGooglesheets size={iconSize} style={{ ...iconStyle, color: '#34A853' }} /> Google Apps Script</p>
                <p className='fw-lighter paragath-style-tecnology'><FaChartBar size={iconSize} style={{ ...iconStyle, color: '#F2C811' }} /> Power BI</p>
                <p className='fw-lighter paragath-style-tecnology'>QGIS</p>
              </div>
              <div className="image-container">
                <img className="images-presentation" src={prefArapiracaImage} alt="Prefeitura de Arapiraca" />
              </div>
            </a>
          </div>
          <hr className="hr-style"></hr>

          <div className='container-experiences'>
            <a
              href='https://www.instagram.com/dit_ifal/'
              target="blank"
              rel="noopener noreferrer"
              className='link-no-underline'>
              <h4 className='textStyleGeneral fw-normal fs-4'>IFAL – Projeto Gleitos</h4>
              <h5 className='textStyleGeneral fw-light fs-5'>{t('experience.ifal.role')}</h5>
              <h6 className='textStyleGeneral fw-lighter paragath-style-tecnology'>{t('experience.ifal.period')}</h6>
              <p className='textStyleGeneral fw-light paragath-style-tecnology'>
                {t('experience.ifal.description')}
              </p>
              <div className='tecnologies-style textStyleGeneral'>
                <p className='fw-lighter paragath-style-tecnology'><SiGo size={iconSize} style={{ ...iconStyle, color: '#00ADD8' }} /> Golang</p>
                <p className='fw-lighter paragath-style-tecnology'><SiPostgresql size={iconSize} style={{ ...iconStyle, color: '#4169E1' }} /> PostgreSQL</p>
                <p className='fw-lighter paragath-style-tecnology'><SiDocker size={iconSize} style={{ ...iconStyle, color: '#2496ED' }} /> Docker</p>
                <p className='fw-lighter paragath-style-tecnology'><SiGit size={iconSize} style={{ ...iconStyle, color: '#F05032' }} /> Git</p>
              </div>
              <div className="image-container">
                <img className="images-presentation" src={DitImage} alt="IFAL - Projeto Gleitos" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};