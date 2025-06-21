import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18n
    .use(HttpApi)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        ns: ['ipLookup'],              // list all namespaces you’ll use
        defaultNS: 'ipLookup',
        backend: {
            // loadPath: where to look for files, using {{lng}} (language) and {{ns}} (namespace)
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        },
        react: { useSuspense: true }
    });

export default i18n;
