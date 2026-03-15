import { siteData } from './siteData';
import { siteDataEs } from './siteDataEs';
import { siteDataFr } from './siteDataFr';

export const getSiteData = (locale: string) => {
    switch (locale) {
        case 'es':
            return siteDataEs;
        case 'fr':
            return siteDataFr;
        default:
            return siteData;
    }
};
