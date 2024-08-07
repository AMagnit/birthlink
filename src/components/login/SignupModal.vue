<template>

  <!-- Modal -->
  <div class="modal fade" id="signupModal" tabindex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="signupModalLabel">Create Account</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body">

          <form>
            <div class="form-floating mb-3">
              <input type="text" v-model="name_ref" class="form-control" id="floatingInputNameSignup" placeholder="First name">
              <label for="floatingInputNameSignup">First name</label>
            </div>

          <div class="form-floating mb-3">
            <input type="email" v-model="mail_ref" class="form-control" id="floatingInputSignup" placeholder="name@example.com">
            <label for="floatingInputSignup">Email address</label>
          </div>

          <div class="form-floating">
            <input type="password" v-model="pass_ref" class="form-control" id="floatingPasswordSignup" placeholder="Password">
            <label for="floatingPasswordSignup">Password</label>
          </div>
            <small class="float-end">8 or more letters and symbols</small><br>


            <select v-model="membership" class="form-select form-select-lg mt-3 mb-3" aria-label="Default select example">
              <option selected :value="null">Select membership</option>
              <option value="1">Individual Membership</option>
              <option value="2">Professional Membership</option>
              <option value="3">Corporate Membership</option>
            </select>

            <div class="row">

              <div class="col-12">

                <button type="button" :disabled="!agree || !membership" @click="create()"
                        :class="agree && membership ? 'btn-primary w-100 animate__fadeInUp' : 'btn-secondary w-25'"
                        class="btn rounded-pill mt-1 animate__animated">Sign Up</button>

              </div>

              <div class="col-12">


                <div class="form-check form-switch mt-3 ms-1 animate__animated animate__fadeInDown" v-if="membership">
                  <input class="form-check-input" v-model="agree" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                  <label class="form-check-label" for="flexSwitchCheckDefault">I agree with Terms and Conditions</label>
                </div>



              </div>

            </div>



          </form>


        </div>

        <div class="modal-footer">

          <button type="button" class="btn btn-secondary rounded-pill" data-bs-target="#loginModal" data-bs-toggle="modal">LogIn</button>

        </div>

      </div>
    </div>
  </div>


</template>

<script setup>
import {ref} from "vue";
import {userState} from '@/composables/userState'

const {createAccount, close_modal} = userState()

const name_ref = ref()
const mail_ref = ref()
const pass_ref = ref()
const error = ref(false)
const checking = ref(false)

const agree = ref(false);
const membership = ref(null);

const create = async () => {

  await createAccount(mail_ref.value, pass_ref.value, name_ref.value, membership.value)

}
</script>