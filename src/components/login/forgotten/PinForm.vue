<template>

  <div class="input-group input-group-lg mb-4" v-if="pin == false">

                <span class="input-group-text">
                  pin
                </span>

    <input type="text" class="form-control" placeholder="enter" @input="checkPin()" v-model="pin_input">


  </div>

  <!--  Pin correct, now enter new password -->
  <new-password-form v-else />


</template>

<script setup>
import {Recovery} from "@/composables/login_forgotten";

import NewPasswordForm from '@/components/login/forgotten/NewPasswordForm.vue'

const {pin_input, pin, checkPin} = Recovery(); // getUser,

</script>