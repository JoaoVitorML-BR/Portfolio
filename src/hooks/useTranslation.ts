import { useTranslation as useI18nTranslation } from 'react-i18next';

export const useTranslation = () => {
    const { t: translate, i18n } = useI18nTranslation();
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const t = (key: string, options?: object): string => {
        return (translate as any)(key, options);
    };
    
    return { t, i18n };
};
