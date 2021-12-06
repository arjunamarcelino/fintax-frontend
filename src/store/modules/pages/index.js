/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { MAX_PAGE_NUMBER } from '../../../constants/index';
import { MUTATIONS } from './constants';

const state = () => ({
  currentActivePageNumber: 1,
  pages: [
    {
      pageNum: 1,
      active: true,
    },
    {
      pageNum: 2,
      active: false,
    },
    {
      pageNum: 3,
      active: false,
    },
  ],
});

const mutations = {
  [MUTATIONS.NEXT_PAGE](state) {
    if (state.currentActivePageNumber < 3) {
      state.pages[state.currentActivePageNumber - 1].active = false;
      state.currentActivePageNumber++;
      state.pages[state.currentActivePageNumber - 1].active = true;
    }
  },
  [MUTATIONS.PREV_PAGE](state) {
    if (state.currentActivePageNumber > 1) {
      state.pages[state.currentActivePageNumber - 1].active = false;
      state.currentActivePageNumber--;
      state.pages[state.currentActivePageNumber - 1].active = true;
    }
  },
  [MUTATIONS.CHANGE_PAGE](state, payload) {
    if (payload >= 1 && payload <= MAX_PAGE_NUMBER && payload !== state.currentActivePageNumber) {
      state.pages[state.currentActivePageNumber - 1].active = false;
      state.currentActivePageNumber = payload;
      state.pages[state.currentActivePageNumber - 1].active = true;
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
