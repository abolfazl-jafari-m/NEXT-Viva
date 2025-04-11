import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async () => {
    const locale = 'fa';
    return {
        locale,
        messages: (await import(`../../localization/${locale}.json`)).default
    };
});