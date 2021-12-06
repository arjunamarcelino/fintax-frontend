import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faLine, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, faChevronLeft, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import App from './App.vue';
import './assets/font.css';
import './assets/index.css';
import router from './router';
import store from './store';

library.add(faFacebookF, faLine, faTwitter, faInstagram);
library.add(faChevronRight, faChevronLeft, faCheck);
library.add(faCheckCircle, faExclamationCircle);

createApp(App).use(router).use(store).component('fa', FontAwesomeIcon).mount('#app');
