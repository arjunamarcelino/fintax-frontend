<template>
  <FormContainer>
    <form id="form" action="/" method="GET">
      <FormContainerLeft>
        <div id="v-model-basic" class="form-control mt-6 mb-2" :class="{ error: hasError.pktb }">
          <label class="text-left block form-control" for="pktb"> NAMA PKTB </label>
          <input
            id="pktb"
            v-model="pktb"
            type="text"
            name="pktb"
            style="text-transform: capitalize"
            required
            @change="checkPKTB"
          />
          <i class="fa-check-circle"><fa :icon="['fas', 'check-circle']" /></i>
          <i class="fa-exclamation-circle"><fa :icon="['fas', 'exclamation-circle']" /></i>
          <small class="absolute text-left block">Only alphabets are accepted for name</small>
        </div>
      </FormContainerLeft>
    </form>
  </FormContainer>
</template>

<script setup lang="ts">
import FormContainer from './FormContainer.vue';
import FormContainerLeft from './FormContainerLeft.vue';
import { computed, ref } from 'vue';
import { alphabetOnlyValidation } from '../../lib/validation/inputValidation';
import type { formInputs } from '../../types/formInputs';
import updateEvent, { formInputUpdateType } from '../../storeHandler/form/updateData';
import { useStore } from 'vuex';

const store = useStore();

const pktb = computed(() => store.state.form.pktb);

const hasError = ref<formInputs>({
  pktb: false,
});

const checkPKTB = (e: Event) => {
  updateEvent(store, formInputUpdateType.pktb, (e.target as HTMLInputElement).value);
  const names = pktb.value.trim().split(' ');

  const isNameValid = names.every((name) => alphabetOnlyValidation(name));

  isNameValid ? (hasError.value.pktb = false) : (hasError.value.pktb = true);
};
</script>

<style>
input[type='text'] {
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

.form-control input {
  border: 2px solid #f0f0f0;
  border-radius: 4px;
  margin-top: 0.5rem;
  padding: 0.5rem;
}

.form-control.success input {
  border-color: #2ecc71;
}

.form-control.error input {
  border-color: #e74c3c;
}

.form-control select {
  border: 2px solid #f0f0f0;
  border-radius: 4px;
  display: block;
  margin-top: 0.5rem;
}

.form-control.success select {
  border-color: #2ecc71;
}

.form-control.error select {
  border-color: #e74c3c;
}

.form-control i {
  position: absolute;
  top: 1.75rem;
  right: 1rem;
  visibility: hidden;
}
.form-control.success i.fa-check-circle {
  color: #2ecc71;
  visibility: visible;
}

.form-control.error i.fa-exclamation-circle {
  color: #e74c3c;
  visibility: visible;
}

.form-control small {
  visibility: hidden;
  position: absolute;
  bottom: -1.25rem;
  left: 0;
}

.form-control.error small {
  color: #e74c3c;
  visibility: visible;
  position: absolute;
  top: 4rem;
}
</style>
