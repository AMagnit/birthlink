<template>

  <div class="container mt-3">

<!--    <router-link to="/" class="float-end text-muted" @click="LogOut()">logout</router-link>-->

    <h2>Profile</h2>

    <personal-info/>
  </div>


</template>

<script setup>

import PersonalInfo from '@/components/user/profiles/PersonalInfo.vue'


</script>