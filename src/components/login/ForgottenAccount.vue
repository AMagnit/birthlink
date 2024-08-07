<template>

  <!-- Modal -->
  <div class="modal fade" id="forgottenAccountModal" tabindex="-1" aria-labelledby="forgottenAccountModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="forgottenAccountModalLabel">Enter your email</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body">
<!--          <small for="forgottenFormControlInput1" class="form-label ms-3">Email address</small>-->
          <input v-if="!email_exists" v-model="email"
                 type="email" class="form-control rounded-pill" id="forgottenFormControlInput1" placeholder="name@example.com">


          <pin-form v-else />
        </div>

        <div class="modal-footer">

<!--          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>-->
          <button type="button" @click="sendPin" class="btn btn-primary rounded-pill">RESET</button>

        </div>
      </div>
    </div>
  </div>


</template>

<script setup>
import {ref} from "vue";
import {Recovery} from '@/composables/login_forgotten'
import PinForm from '@/components/login/forgotten/PinForm.vue'

const {sendPin, email_exists, email} = Recovery()





</script>