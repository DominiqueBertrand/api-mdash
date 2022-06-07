import type { DropMenu } from '../components/Dropdown';
import type { LocaleSetting, LocaleType } from '#/config';

export const LOCALE: { [key: string]: LocaleType } = {
  FR_FR: 'fr',
  EN_US: 'en',
};

export const localeSetting: LocaleSetting = {
  showPicker: true,
  // Locale
  locale: LOCALE.FR_FR,
  // Default locale
  fallback: LOCALE.FR_FR,
  // available Locales
  availableLocales: [LOCALE.FR_FR, LOCALE.EN_US],
};

// locale list
export const localeList: DropMenu[] = [
  {
    text: 'Francais',
    event: LOCALE.FR_FR,
  },
  {
    text: 'English',
    event: LOCALE.EN_US,
  },
];
