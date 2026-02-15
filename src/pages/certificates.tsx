import { FaCertificate } from "react-icons/fa";
import { useTranslation } from '../hooks/useTranslation';

export const Certificates = () => {
    const { t } = useTranslation();
    const iconSize = 28;
    const iconStyle = { marginRight: '8px', verticalAlign: 'middle' };
    return (
        <>
            <div className='custom-divider'></div>
            <h3 className='skills-style-text'>{t('certifications.title')}</h3>
            <div className='tecnologies-style textStyleGeneral'>
                <p className='fw-lighter paragath-style-tecnology'>
                    <FaCertificate size={iconSize} style={{ ...iconStyle, color: '#FF9900' }} />
                    <strong>AWS Certified Cloud Practitioner (CLF-C02)</strong>
                </p>
                <p>{t('certifications.validationCode')}:<strong> 0cc815d38f604a979c032262d7407e36</strong> </p>
                <p>{t('certifications.validationLink')}: <a href="https://cp.certmetrics.com/amazon/en/public/verify/credential" target="_blank" rel="noopener noreferrer">{t('certifications.clickHere')}</a></p>
                <p className='fw-lighter paragath-style-tecnology' style={{ marginLeft: '36px', fontSize: '0.9em' }}>
                    {t('certifications.validUntil')}: 04/10/2028
                </p>
            </div>
        </>
    );
};