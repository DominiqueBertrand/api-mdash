// import messages from "@intlify/vite-plugin-vue-i18n/messages";
import { createApp } from 'vue';
import { setupI18n } from '@/locales/';
import { setupErrorHandle } from '@/logics/error-handle';
// import { createI18n } from "vue-i18n";
import App from './App.vue';

// const i18n = createI18n({
//   locale: localStorage.locale || "en",
//   messages,
// });

async function bootstrap() {
  const app = createApp(App);

  // Multilingual configuration
  // Asynchronous case: language files may be obtained from the server side
  await setupI18n(app);

  // Configure global error handling
  setupErrorHandle(app);
  // createApp(App).use(i18n).mount("#app");
  // https://next.router.vuejs.org/api/#isready
  // await router.isReady();

  app.mount('#app');
}

bootstrap();
