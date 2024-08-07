<template>

  <!-- Modal -->
  <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h1 class="modal-title fs-5" id="loginModalLabel">LogIn</h1>
          <button type="button" class="btn-close" ref="close_modal" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body">

          <form>

            <div class="form-floating mb-3">
              <input type="email" class="form-control" v-model="mail_ref" id="floatingInput" placeholder="name@example.com">
              <label for="floatingInput">Email address</label>
            </div>

            <div class="form-floating">
              <input type="password" class="form-control"  v-model="pass_ref" id="floatingPassword" placeholder="Password">
              <label for="floatingPassword">Password</label>
            </div>

            <button type="button" @click="loginSubmit()" class="btn btn-primary rounded-pill mt-3">
              LogIn

              <span v-if="checking" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>

            </button>

            </form>

          <p v-if="error" class="text-danger mt-3 text-center fw-bold animate__animated animate__fadeInDown">

            Error: enter correct login and password
          </p>

        </div>

        <div class="modal-footer">

          <div class="container m-0 p-0">

            <small class="text-muted handLink"
                   data-bs-target="#forgottenAccountModal" data-bs-toggle="modal">Forgotten account?</small>


            <button type="button" :disabled="checking"
                    data-bs-target="#signupModal" data-bs-toggle="modal"
                    class="btn btn-secondary rounded-pill float-end">Create Account
            </button>


          </div>


        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import {ref} from "vue";

import {userState} from '@/composables/userState'

const {LogIn, loggedIn, close_modal} = userState()

const mail_ref = ref()
const pass_ref = ref()
const error = ref(false)
const checking = ref(false)



const loginSubmit = async () => {

  checking.value = true

  await LogIn(mail_ref.value, pass_ref.value)

  if(loggedIn.value == false){

    error.value = true


  } else {

    close_modal.value.click()

  }

  checking.value = false
}
</script>
