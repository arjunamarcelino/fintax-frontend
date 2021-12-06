import { Store } from 'vuex';

export enum formInputUpdateType {
  fullname,
  nickname,
  gender,
  birthDate,
  phoneNumber,
  emergencyPhoneNumber,
  relation,
  idLine,
  email,
  studentId,
  department,
  campus,
  pktb,
}

const updateEvent = (store: Store<any>, eventType: formInputUpdateType, payload: string): void => {
  switch (eventType) {
    case formInputUpdateType.fullname:
      store.commit('form/SET_FULLNAME', payload);
      break;
    case formInputUpdateType.nickname:
      store.commit('form/SET_NICKNAME', payload);
      break;
    case formInputUpdateType.gender:
      store.commit('form/SET_GENDER', payload);
      break;
    case formInputUpdateType.birthDate:
      store.commit('form/SET_BIRTHDATE', payload);
      break;
    case formInputUpdateType.phoneNumber:
      store.commit('form/SET_PHONENUMBER', payload);
      break;
    case formInputUpdateType.emergencyPhoneNumber:
      store.commit('form/SET_EMERGENCYPHONENUM', payload);
      break;
    case formInputUpdateType.relation:
      store.commit('form/SET_RELATION', payload);
      break;
    case formInputUpdateType.idLine:
      store.commit('form/SET_IDLINE', payload);
      break;
    case formInputUpdateType.email:
      store.commit('form/SET_EMAIL', payload);
      break;
    case formInputUpdateType.studentId:
      store.commit('form/SET_STUDENTID', payload);
      break;
    case formInputUpdateType.department:
      store.commit('form/SET_DEPARTMENT', payload);
      break;
    case formInputUpdateType.pktb:
      store.commit('form/SET_PKTB', payload);
      break;
    default:
      return;
  }
};

export default updateEvent;
