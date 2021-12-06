import { createStore } from 'vuex';
import pages from './modules/pages';
import form from './modules/form';

const store = createStore({
  modules: {
    pages: pages,
    form: form,
  },
});

export default store;
