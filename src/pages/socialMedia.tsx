import { useTranslation } from '../hooks/useTranslation';
import instagramIcon from '../img/instagram.png';
import linkedinIcon from '../img/linkedin.png';
import gmailIcon from '../img/gmail.png';
import gitHubIcon from '../img/github.png';

export const SocialMedia: React.FC = () => {
    const { t } = useTranslation();
    
    return (
        <>
            <div className='custom-divider'></div>
            <h4 className='title-social-midia-and-contact'>{t('social.title')}</h4>
            <ul className='footer-icons d-flex justify-content-start'>
                <li className='mx-2 li-icons'>
                    <a href="https://github.com/JoaoVitorML-BR" target="blank"><img className='imagesFooter' alt="gitHub" src={gitHubIcon}></img></a>
                    <p className='textStyleGeneral fw-light paragath-style-tecnology pt-2'>GitHub</p>
                </li >
                <li className='mx-2'>
                    <a href="https://www.linkedin.com/in/jo%C3%A3o-vitorml-br/" target="blank"><img className='imagesFooter' alt="linkedin" src={linkedinIcon}></img></a>
                    <p className='textStyleGeneral fw-light paragath-style-tecnology pt-2'>LinkedIn</p>
                </li>
                <li className='mx-2'>
                    <a href="https://www.instagram.com/joao_vitor_0o/" target="blank"><img className='imagesFooter' alt="instagram" src={instagramIcon}></img></a>
                    <p className='textStyleGeneral fw-light paragath-style-tecnology pt-2'>Instagram</p>
                </li>
                <li className='mx-2'>
                    <a href="mailto:contatojoaovtml@gmail.com" target="blank">
                        <img className='imagesFooter-gmail' alt="email" src={gmailIcon}></img>
                    </a>
                    <p className='textStyleGeneral fw-light paragath-style-tecnology pt-1'>Email</p>
                </li>
            </ul>
        </>
    );
};