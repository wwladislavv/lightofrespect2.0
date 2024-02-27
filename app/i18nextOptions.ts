export default {
    debug: process.env.NODE_ENV !== 'production',
    fallbackLng: 'en',
    supportedLngs: ['uk', 'en'],
    defaultNS: 'index',
    react: { useSuspense: false }
}