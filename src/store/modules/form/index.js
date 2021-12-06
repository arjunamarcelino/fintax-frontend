/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { MUTATIONS } from './constants';

const state = () => ({
  fullname: '',
  nickname: '',
  gender: '',
  birthDate: '',
  phoneNumber: '',
  emergencyPhoneNumber: '',
  relation: '',
  idLine: '',
  email: '',
  studentId: '',
  department: '',
  pktb: '',
});

const mutations = {
  [MUTATIONS.SET_FULLNAME](state, payload) {
    state.fullname = payload;
  },
  [MUTATIONS.SET_NICKNAME](state, payload) {
    state.nickname = payload;
  },
  [MUTATIONS.SET_GENDER](state, payload) {
    state.gender = payload;
  },
  [MUTATIONS.SET_BIRTHDATE](state, payload) {
    state.birthDate = payload;
  },
  [MUTATIONS.SET_PHONENUMBER](state, payload) {
    state.phoneNumber = payload;
  },
  [MUTATIONS.SET_EMERGENCYPHONENUM](state, payload) {
    state.emergencyPhoneNumber = payload;
  },
  [MUTATIONS.SET_RELATION](state, payload) {
    state.relation = payload;
  },
  [MUTATIONS.SET_IDLINE](state, payload) {
    state.idLine = payload;
  },
  [MUTATIONS.SET_EMAIL](state, payload) {
    state.email = payload;
  },
  [MUTATIONS.SET_STUDENTID](state, payload) {
    state.studentId = payload;
  },
  [MUTATIONS.SET_DEPARTMENT](state, payload) {
    state.department = payload;
  },
  [MUTATIONS.SET_PKTB](state, payload) {
    state.pktb = payload;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
