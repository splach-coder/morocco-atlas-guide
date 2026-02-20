import { siteData } from './siteData';
import { siteDataEs } from './siteDataEs';

export const getSiteData = (locale: string) => {
    switch (locale) {
        case 'es':
            return siteDataEs;
        case 'fr':
            // For now, fr is just English until we have more translations
            return siteData;
        default:
            return siteData;
    }
};
