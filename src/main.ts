import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import AmplifyVue from '@aws-amplify/ui-vue';
// import { StoryblokVue, apiPlugin } from '@storyblok/vue';

const app = createApp(App)

app.use(createPinia())
app.use(router)
/* app.use(StoryblokVue, {
    accessToken: 'YOUR_ACCESS_TOKEN',
    use: [apiPlugin]
}) */

app.mount('#app')
