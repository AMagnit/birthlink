<template>

  <span class="h5 beauty">Set new password</span><br>
  <small class="text-muted">8 or more symbols</small><br><br>

  <div class="row" v-if="!meet_criteria">

    <div class="col-12">

    </div>

    <div class="col-12">

      <div class="input-group input-group-lg mb-4">

                <span class="input-group-text">
                  1
                </span>

        <input type="password" class="form-control" placeholder="enter new password" v-model="first" @input="check">

      </div>

    </div>

    <div class="col-12">

      <div class="input-group input-group-lg mb-4">

                <span class="input-group-text">
                  2
                </span>

        <input type="password" class="form-control" placeholder="confirm password" v-model="second" @input="check">

      </div>

    </div>

  </div>


  <p class="text-success" v-else>
    Password has been updated!<br>
    <span class="text-muted">you can login now</span>
  </p>


</template>

<script setup>
import {ref} from "vue";
import {Recovery} from "@/composables/login_forgotten";
//import {userState} from "@/composables/login";

const {new_password, setPassword} = Recovery(); // getUser,

//const {login_tab, join_tab, forgotten_tab} = userState();

const first = ref()
const second = ref()
const meet_criteria = ref(false)

const check = async () => {

  if(first.value.toString().length >= 8 && first.value == second.value){

    //console.log('MEET CRITERIA')

    meet_criteria.value = true

    new_password.value = second.value

    await setPassword()

    // switch to Log In tab
    setTimeout( () => {

      login_tab.value = true
      join_tab.value = false
      forgotten_tab.value = false

    }, 2000)
  }

}

</script>