<template>


  <nav class="navbar navbar-expand-lg bg-light sticky-top">


    <div class="container">


      <RouterLink to="/" class="navbar-brand">
        <img src="/img/main/logo.png"
             class="d-sm-block d-md-none img-fluid animate__animated animate__fadeIn"
             style="max-width: 220px">

        <img src="/img/main/logo.png" class="d-md-block d-sm-none d-none img-fluid animate__animated animate__fadeIn"
             style="max-width: 350px">
      </RouterLink>

      <!-- LogIn -->
      <button v-if="!loggedIn" data-bs-toggle="modal" data-bs-target="#loginModal"
              class="btn btn-sm btn-primary rounded-pill ms-2 float-end d-md-none">
        LogIn
      </button>


      <span ref="hamburger" class="navbar-toggler handLink border-0" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

        <img v-if="!hamburger_active" @click="hamburger_active = true" width="28" src="/img/icons/hamburger_new.svg" alt="menu" class="animate__animated animate__zoomIn"/>
        <img v-else width="28" @click="hamburger_active = false" src="/img/icons/close.svg" alt="menu" class="animate__animated animate__zoomIn"/>

      </span>


      <div class="collapse navbar-collapse " id="navbarSupportedContent">

        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

          <!--          <li class="nav-item">-->
          <!--            <a class="nav-link" href="#">About</a>-->
          <!--          </li>-->

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              About
            </a>
            <ul class="dropdown-menu animate__animated animate__fadeIn">
              <li>
                <RouterLink to="/about-us/" @click="handleHamburgerClick" class="dropdown-item rounded">About Birthlink</RouterLink>
              </li>
              <li>
                <RouterLink to="/about-us/history/" @click="handleHamburgerClick" class="dropdown-item rounded">Our history</RouterLink>
              </li>
              <li>
                <RouterLink to="/about-us/team/" @click="handleHamburgerClick" class="dropdown-item rounded">Our team</RouterLink>
              </li>
              <li>
                <RouterLink to="/birthlink-charter/" @click="handleHamburgerClick" class="dropdown-item rounded">Birthlink Charter</RouterLink>
              </li>
              <li>
                <RouterLink to="/about-us/thrift-shops/" @click="handleHamburgerClick" class="dropdown-item rounded">Thrift shops</RouterLink>
              </li>
              <li>
                <RouterLink to="/about-us/support-us/" @click="handleHamburgerClick" class="dropdown-item rounded">Support us</RouterLink>
              </li>

              <!--              <li><hr class="dropdown-divider"></li>-->
              <!--              <li><a class="dropdown-item" href="#">Something else here</a></li>-->
            </ul>
          </li>


          <li class="nav-item dropdown" v-if="loggedIn">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Subscription
            </a>
            <ul class="dropdown-menu animate__animated animate__fadeIn">
              <li>
                <RouterLink to="/provided_content" class="dropdown-item" href="#">Content</RouterLink>
              </li>

              <li>
                <hr class="dropdown-divider">
              </li>

              <li>
                <RouterLink to="/subscription" class="dropdown-item" href="#">Membership</RouterLink>
              </li>
              <!--              <li><a class="dropdown-item" href="#">Another action</a></li>-->

              <!-- <li> -->
              <!-- <hr class="dropdown-divider">-->
              <!-- </li>-->

              <!--              <li><a class="dropdown-item" href="#">Something else here</a></li>-->
            </ul>
          </li>


          <!-- Services-->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Services
            </a>
            <ul class="dropdown-menu animate__animated animate__fadeIn">

              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>


          <!-- News -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              News
            </a>
            <ul class="dropdown-menu animate__animated animate__fadeIn">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>


          <!-- News -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Publications
            </a>
            <ul class="dropdown-menu animate__animated animate__fadeIn">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>


          <!-- Useful websites -->
          <!--          <li class="nav-item dropdown">-->
          <!--            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">-->
          <!--              Useful websites-->
          <!--            </a>-->
          <!--            <ul class="dropdown-menu animate__animated animate__fadeIn">-->
          <!--              <li><a class="dropdown-item" href="#">Action</a></li>-->
          <!--              <li><a class="dropdown-item" href="#">Another action</a></li>-->
          <!--              <li>-->
          <!--                <hr class="dropdown-divider">-->
          <!--              </li>-->
          <!--              <li><a class="dropdown-item" href="#">Something else here</a></li>-->
          <!--            </ul>-->
          <!--          </li>-->

          <li class="nav-item">
            <a class="nav-link" href="/">Contact</a>
          </li>


        </ul>


        <form class="d-flex" role="search" v-if="!loggedIn">

          <a target="_blank" class="me-2" href="https://www.facebook.com/BirthlinkScot">
            <img src="/img/icons/facebook.svg" height="12">
          </a>

          <a target="_blank" class="me-3" href="https://twitter.com/birthlink100">
            <img src="/img/icons/twitterx.svg" height="12">
          </a>
        </form>


      </div>

      <!--      {{!loggedIn}}-->
      <!--      LogIn-->
      <button data-bs-toggle="modal" data-bs-target="#loginModal" v-if="!loggedIn"
              class="btn btn-sm btn-primary rounded-pill ms-3 float-end d-none d-sm-block">
        LogIn
      </button>

      <span v-else class="animate__animated animate__fadeInRight">

          <RouterLink to="/profile">
            <img src="/img/icons/profile.svg" class="me-3" height="28" alt="Logout"/>
          </RouterLink>

          <RouterLink to="/">
            <img src="/img/icons/logout.svg" @click="LogOut()" height="22" alt="Logout"/>
          </RouterLink>

      </span>


    </div>


  </nav>



    <log-in-modal/>
    <signup-modal/>
    <forgotten-account/>


</template>

<script setup>
import {ref} from "vue";

import {userState} from '@/composables/userState'

import LogInModal from '@/components/login/LogInModal.vue';
import SignupModal from '@/components/login/SignupModal.vue';
import ForgottenAccount from '@/components/login/ForgottenAccount.vue';


const {loggedIn, LogOut} = userState()


const hamburger_active = ref(false)
const hamburger = ref()

const handleHamburgerClick = async e => {

  console.log(hamburger_active.value)

  if (hamburger_active.value) {

    hamburger.value.click()

    hamburger_active.value = false
  }
}

</script>

<style scoped>

/*
.dropdown:hover .dropdown-menu {
  display: block;
  margin-top: 0;
}
*/
</style>
