import { useTranslation } from '../hooks/useTranslation';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export const SocialMedia: React.FC = () => {
    const { t } = useTranslation();
    
    const iconStyle = { fontSize: '40px', color: '#ffffff' };
    
    return (
        <>
            <div className='custom-divider'></div>
            <h4 className='title-social-midia-and-contact'>{t('social.title')}</h4>
            <ul className='footer-icons d-flex justify-content-start'>
                <li className='mx-2 li-icons'>
                    <a href="https://github.com/JoaoVitorML-BR" target="_blank" rel="noopener noreferrer">
                        <FaGithub style={iconStyle} className="social-icon" />
                    </a>
                    <p className='textStyleGeneral fw-light paragath-style-tecnology pt-2'>GitHub</p>
                </li>
                <li className='mx-2'>
                    <a href="https://www.linkedin.com/in/jo%C3%A3o-vitorml-br/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin style={{...iconStyle, color: '#0A66C2'}} className="social-icon" />
                    </a>
                    <p className='textStyleGeneral fw-light paragath-style-tecnology pt-2'>LinkedIn</p>
                </li>
                <li className='mx-2'>
                    <a href="https://www.instagram.com/joao_vitor_0o/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram style={{...iconStyle, color: '#E4405F'}} className="social-icon" />
                    </a>
                    <p className='textStyleGeneral fw-light paragath-style-tecnology pt-2'>Instagram</p>
                </li>
                <li className='mx-2'>
                    <a href="mailto:contatojoaovtml@gmail.com">
                        <SiGmail style={{...iconStyle, color: '#EA4335'}} className="social-icon" />
                    </a>
                    <p className='textStyleGeneral fw-light paragath-style-tecnology pt-1'>Email</p>
                </li>
            </ul>
        </>
    );
};