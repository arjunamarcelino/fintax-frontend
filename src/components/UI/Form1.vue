<template>
  <FormContainer>
    <form id="form" action="/Form2" method="GET">
      <FormContainerLeft>
        <div id="v-model-basic" class="form-control" :class="{ error: hasError.fullname }">
          <label for="fullname"> NAMA LENGKAP </label>
          <input
            id="fullname"
            v-model="fullname"
            required
            type="text"
            name="fullname"
            style="text-transform: capitalize"
            @change="checkName"
          />
          <i class="fa-check-circle"><fa :icon="['fas', 'check-circle']" /></i>
          <i class="fa-exclamation-circle"><fa :icon="['fas', 'exclamation-circle']" /></i>
          <small class="absolute tex3t-left block">Only alphabets are accepted for name</small>
        </div>

        <div id="v-model-basic" class="form-control" :class="{ error: hasError.nickname }">
          <label for="nickname"> NAMA PANGGILAN </label>
          <input
            id="nickname"
            v-model="nickname"
            required
            type="text"
            name="nickname"
            style="text-transform: capitalize"
            @change="checkNickName"
          />
          <i class="fa-check-circle"><fa :icon="['fas', 'check-circle']" /></i>
          <i class="fa-exclamation-circle"><fa :icon="['fas', 'exclamation-circle']" /></i>
          <small class="absolute tex3t-left block">Only alphabets are accepted for name</small>
        </div>

        <div id="v-model-radiobutton" class="form-control">
          <p>JENIS KELAMIN</p>
          <label class="radio-inline">
            <input
              v-model="gender"
              required
              class="mr-2 my-2"
              type="radio"
              name="gender"
              value="MALE"
              @change="updateGender"
            />Laki-laki
          </label>
          <label class="radio-inline">
            <input
              v-model="gender"
              required
              class="mr-2 ml-10 my-2"
              type="radio"
              name="gender"
              value="FEMALE"
              @change="updateGender"
            />Perempuan
          </label>
          <i class="fa-check-circle"><fa :icon="['fas', 'check-circle']" /></i>
          <i class="fa-exclamation-circle"><fa :icon="['fas', 'exclamation-circle']" /></i>
          <small>Error Message</small>
        </div>

        <div class="form-control">
          <label for="bdate"> TANGGAL LAHIR </label>
          <input id="bdate" v-model="birthDate" required type="date" name="bdate" @change="updateBirthDate" />
          <i class="fa-check-circle"><fa :icon="['fas', 'check-circle']" /></i>
          <i class="fa-exclamation-circle"><fa :icon="['fas', 'exclamation-circle']" /></i>
          <small>Error Message</small>
        </div>

        <div id="v-model-basic" class="form-control" :class="{ error: hasError.phoneNumber }">
          <label for="pnumber"> NOMOR HANDPHONE PRIBADI </label>
          <input id="pnumber" v-model="phoneNumber" required type="text" name="pnumber" @change="checkPhoneNumber" />
          <i class="fa-check-circle"><fa :icon="['fas', 'check-circle']" /></i>
          <i class="fa-exclamation-circle"><fa :icon="['fas', 'exclamation-circle']" /></i>
          <small>Only numerics are accepted for phone number</small>
        </div>

        <div
          id="v-model-basic"
          style="width: 65%"
          class="form-control-2"
          :class="{ error: hasError.emergencyPhoneNumber }"
        >
          <label for="enumber"> NOMOR HANDPHONE DARURAT </label>
          <input
            id="enumber"
            v-model="emergencyPhoneNumber"
            required
            type="text"
            name="enumber"
            @change="checkEmergencyNumber"
          />
          <i class="fa-check-circle"><fa :icon="['fas', 'check-circle']" /></i>
          <i class="fa-exclamation-circle"><fa :icon="['fas', 'exclamation-circle']" /></i>
          <small>Only numerics are accepted for emergency phone number</small>
        </div>

        <div id="v-model-basic" style="width: 35%" class="form-control-2" :class="{ error: hasError.relation }">
          <label for="relation"> HUBUNGAN </label>
          <select id="relation" v-model="relation" required name="relation" @change="updateRelation">
            <option v-for="relationship in relationships" :key="relationship.id" :value="relationship.id">
              {{ relationship.name }}
            </option>
          </select>
          <i class="fa-check-circle"><fa :icon="['fas', 'check-circle']" /></i>
          <i class="fa-exclamation-circle"><fa :icon="['fas', 'exclamation-circle']" /></i>
          <small class="absolute tex3t-left block">Only alphabets are accepted for relation</small>
        </div>

        <div class="form-control">
          <label for="idline"> ID LINE </label>
          <input id="idline" v-model="idLine" type="text" name="idline" @change="checkIdLine" />
          <i class="fa-check-circle"><fa :icon="['fas', 'check-circle']" /></i>
          <i class="fa-exclamation-circle"><fa :icon="['fas', 'exclamation-circle']" /></i>
          <small>Error Message</small>
        </div>

        <div id="v-model-basic" class="form-control" :class="{ error: hasError.email }">
          <label for="email"> EMAIL </label>
          <input id="email" v-model="email" required type="text" name="email" @change="checkEmail" />
          <i class="fa-check-circle"><fa :icon="['fas', 'check-circle']" /></i>
          <i class="fa-exclamation-circle"><fa :icon="['fas', 'exclamation-circle']" /></i>
          <small>Invalid Email</small>
        </div>
      </FormContainerLeft>
      <FormContainerRight>
        <div id="v-model-basic" class="form-control" :class="{ error: hasError.studentId }">
          <label for="nim"> NIM </label>
          <input id="nim" v-model="studentId" required type="number" name="nim" @change="checknim" />
          <i class="fa-check-circle"><fa :icon="['fas', 'check-circle']" /></i>
          <i class="fa-exclamation-circle"><fa :icon="['fas', 'exclamation-circle']" /></i>
          <small>Only numerics are accepted for NIM</small>
        </div>

        <div class="form-control">
          <label for="fakultas"> FAKULTAS </label>
          <select id="fakultas" v-model="department" required name="fakultas" @change="updateDepartment">
            <option v-for="department in departments" :key="department.id" class="font-roboto" :value="department.id">
              {{ department.name }}
            </option>
          </select>
          <i class="fa-check-circle"><fa :icon="['fas', 'check-circle']" /></i>
          <i class="fa-exclamation-circle"><fa :icon="['fas', 'exclamation-circle']" /></i>
          <small>Error Message</small>
        </div>
      </FormContainerRight>
    </form>
  </FormContainer>
</template>

<script setup lang="ts">
import FormContainer from './FormContainer.vue';
import FormContainerLeft from './FormContainerLeft.vue';
import FormContainerRight from './FormContainerRight.vue';
import { computed, ref } from 'vue';
import { alphabetOnlyValidation, numericOnlyValidation, emailValidation } from '../../lib/validation/inputValidation';
import type { formInputs } from '../../types/formInputs';
import { departments } from '../../constants/form/departments';
import { relationships } from '../../constants/form/relationship';
import { useStore } from 'vuex';
import updateEvent, { formInputUpdateType } from '../../storeHandler/form/updateData';
import form from '../../store/modules/form';

const store = useStore();

const fullname = computed(() => store.state.form.fullname);
const nickname = computed(() => store.state.form.nickname);
const gender = computed(() => store.state.form.gender);
const birthDate = computed(() => store.state.form.birthDate);
const phoneNumber = computed(() => store.state.form.phoneNumber);
const emergencyPhoneNumber = computed(() => store.state.form.emergencyPhoneNumber);
const relation = computed(() => store.state.form.relation);
const idLine = computed(() => store.state.form.idLine);
const email = computed(() => store.state.form.email);
const studentId = computed(() => store.state.form.studentId);
const department = computed(() => store.state.form.department);

const hasError = ref<formInputs>({
  fullname: false,
  nickname: false,
  gender: false,
  birthDate: false,
  phoneNumber: false,
  emergencyPhoneNumber: false,
  relation: false,
  idLine: false,
  email: false,
  studentId: false,
  department: false,
});

const checkName = (e: Event) => {
  const names = (e.target as HTMLInputElement).value.trim();
  updateEvent(store, formInputUpdateType.fullname, names);

  const isNameValid = names.split(' ').every((name) => alphabetOnlyValidation(name));

  isNameValid ? (hasError.value.fullname = false) : (hasError.value.fullname = true);
};

const checkNickName = (e: Event) => {
  const nickname = (e.target as HTMLInputElement).value.trim();
  updateEvent(store, formInputUpdateType.nickname, nickname);

  const isNickValid = nickname.split(' ').every((nick) => alphabetOnlyValidation(nick));

  isNickValid ? (hasError.value.nickname = false) : (hasError.value.nickname = true);
};

const updateGender = (e: Event) => {
  updateEvent(store, formInputUpdateType.gender, (e.target as HTMLInputElement).value);
};

const updateBirthDate = (e: Event) => {
  updateEvent(store, formInputUpdateType.birthDate, (e.target as HTMLInputElement).value);
};

const checkPhoneNumber = (e: Event) => {
  const phone = (e.target as HTMLInputElement).value.trim().replace(/\+62/, '0');
  updateEvent(store, formInputUpdateType.phoneNumber, phone);

  const isPhoneValid = numericOnlyValidation(phone);

  isPhoneValid ? (hasError.value.phoneNumber = false) : (hasError.value.phoneNumber = true);
};

const checkEmergencyNumber = (e: Event) => {
  const emergencyphone = (e.target as HTMLInputElement).value.trim().replace(/\+62/, '0');
  updateEvent(store, formInputUpdateType.emergencyPhoneNumber, emergencyphone);

  const isEmergencyValid = numericOnlyValidation(emergencyphone);

  isEmergencyValid ? (hasError.value.emergencyPhoneNumber = false) : (hasError.value.emergencyPhoneNumber = true);
};

const updateRelation = (e: Event) => {
  updateEvent(store, formInputUpdateType.relation, (e.target as HTMLSelectElement).value);
};

const checkIdLine = (e: Event) => {
  const idLine = (e.target as HTMLInputElement).value.trim().replace(/@/, '');
  updateEvent(store, formInputUpdateType.idLine, idLine);
};

const checkEmail = (e: Event) => {
  const mail = (e.target as HTMLInputElement).value.trim();
  updateEvent(store, formInputUpdateType.email, mail);

  const isEmailValid = emailValidation(mail);

  isEmailValid ? (hasError.value.email = false) : (hasError.value.email = true);
};

const updateDepartment = (e: Event) => {
  updateEvent(store, formInputUpdateType.department, (e.target as HTMLSelectElement).value);
};

const checknim = (e: Event) => {
  const nim = (e.target as HTMLInputElement).value.trim();
  updateEvent(store, formInputUpdateType.studentId, nim);

  const isNIMValid = numericOnlyValidation(nim);

  isNIMValid ? (hasError.value.studentId = false) : (hasError.value.studentId = true);
};
</script>

<style>
input[type='text'],
input[type='number'],
input[type='date'] {
  width: 100%;
  height: 1.6rem;
  padding: 0 0.5rem;
}

.form-control {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  display: block;
  position: relative;
}

.form-control-2 {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
  position: relative;
}

.form-control input,
.form-control-2 input {
  border: 2px solid #f0f0f0;
  border-radius: 4px;
  margin-top: 0.5rem;
  padding: 0.5rem;
}

.form-control.success input,
.form-control-2.success input {
  border-color: #2ecc71;
}

.form-control.error input,
.form-control-2.error input {
  border-color: #e74c3c;
}

.form-control select,
.form-control-2 select {
  border: 2px solid #f0f0f0;
  border-radius: 4px;
  display: block;
  margin-top: 0.5rem;
}

.form-control.success select,
.form-control-2.success select {
  border-color: #2ecc71;
}

.form-control.error select,
.form-control-2.error select {
  border-color: #e74c3c;
}

.form-control i,
.form-control-2 i {
  position: absolute;
  top: 1.75rem;
  right: 1rem;
  visibility: hidden;
}
.form-control.success i.fa-check-circle,
.form-control-2.success i.fa-check-circle {
  color: #2ecc71;
  visibility: visible;
}

.form-control.error i.fa-exclamation-circle,
.form-control-2.error i.fa-exclamation-circle {
  color: #e74c3c;
  visibility: visible;
}

.form-control small,
.form-control-2 small {
  visibility: hidden;
  position: absolute;
  bottom: -1.25rem;
  left: 0;
}

.form-control.error small,
.form-control-2.error small {
  color: #e74c3c;
  visibility: visible;
  position: absolute;
  top: 3rem;
}
</style>
