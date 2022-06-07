import { createI18n } from 'vue-i18n';
import messages from '@intlify/vite-plugin-vue-i18n/messages';
import type { App } from 'vue';

// setup i18n instance with glob
export async function setupI18n(app: App) {
  const i18n = createI18n({
    locale: localStorage.locale || 'en',
    messages,
  });
  app.use(i18n);
}
