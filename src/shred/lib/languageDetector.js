import { $language } from '~/shred/models/language';
import languageDetector from 'next-language-detector';
import i18nextConfig from '../../../next-i18next.config';

export default languageDetector({
  supportedLngs: i18nextConfig.i18n.locales ?? $language.getState(),
  fallbackLng: i18nextConfig.i18n.defaultLocale ?? $language.getState(),
});
