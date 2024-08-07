<template>


  <div class="row">

    <div class="col-sm-12 col-md-6 mb-4">


      <small for="nameFormControlInput" class="form-label text-muted">name</small>
      <input type="text" v-model="user.name" class="form-control form-control-lg shadow-sm" id="nameFormControlInput" placeholder="Name">


    </div>

    <div class="col-sm-12 col-md-6 mb-4">


      <small for="surnameFormControlInput" class="form-label text-muted">surname</small>
      <input type="text" v-model="user.surname" class="form-control form-control-lg  shadow-sm" id="surnameFormControlInput" placeholder="Surname">


    </div>

    <div class="col-sm-12 col-md-6">

      <div class="mb-3">
        <small for="emailFormControlInput" class="form-label text-muted">email address</small>
        <input type="email" v-model="user.email" class="form-control form-control-lg shadow-sm" id="emailFormControlInput" placeholder="name@example.com">
      </div>

    </div>

    <!--    <div class="col-sm-12 col-md-6">-->

    <!--      <div class="mb-3">-->
    <!--        <small for="passwordFormControl" class="form-label text-muted">password</small>-->
    <!--        <input type="password" class="form-control form-control-lg" id="passwordFormControl" placeholder="******">-->
    <!--      </div>-->

    <!--    </div>-->

    <div class="col-sm-12 col-md-6 mb-4">

      <small for="phoneFormControlInput" class="form-label text-muted">phone</small>
      <input type="text" v-model="user.phone" class="form-control form-control-lg shadow-sm" id="phoneFormControlInput" placeholder="Phone">

    </div>


    <div class="col-sm-12 col-md-6">

      <city-input/>

    </div>

    <div class="col-sm-12 col-md-6 mb-4">

      <small for="addressFormControlInput" class="form-label text-muted">address</small>
      <input type="text" v-model="user.address" class="form-control form-control-lg shadow-sm" id="addressFormControlInput" placeholder="Address">

    </div>

    <div class="col-sm-12 col-md-6 mb-4">

      <small for="postcodeFormControlInput" class="form-label text-muted">postcode</small>
      <input type="text" v-model.trim="user.postcode" @input="user.postcode = user.postcode.toUpperCase()" max="12" class="form-control form-control-lg shadow-sm" id="postcodeFormControlInput" placeholder="Postcode">

    </div>


    <div class="col-md-6 col-sm-12">

      <br>
      <button type="submit" :disabled="updating" class="btn btn-primary rounded-pill" @click="update">

        UPDATE

        <span v-if="updating" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>

      </button>

    </div>

  </div>


</template>
<script setup>
import {ref, watch, onBeforeMount} from "vue";
import {Users} from '@/composables/Users';
import CityInput from '@/components/user/profiles/CityInput.vue'

import _debounce from 'lodash/debounce';

const {user, updateUser, getUser} = Users()


onBeforeMount(() => {

  getUser()
})

const updating = ref(false)



const update = _debounce( async () => {

  //console.log('Function debounced after 1000ms!');

  try{

    updating.value = true

    await updateUser()

    updating.value = false

  } catch (e){

    console.log(e)
  }

 }, 1500);





watch(user, (newVal) => { // newVal, oldVal

  //console.log(newVal)

  update()

}, {deep: true});
</script>