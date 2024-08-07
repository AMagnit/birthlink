<template>


  <div style="min-height: 350px; background-image: url('/img/main/about_us/history2_ptb.jpg'); background-position: center center; background-size: cover; ">

    <div class="container">


      <br><br>

      <h1 class="text-white ms-4">Work for us</h1>
    </div>

  </div>

  <router-list :set_route="'/'" />

  <div class="container mt-3">


  <p>No current vacancies at this time. </p>
  </div>
</template>
<script setup>
import RouterList from "@/components/inc/RouterList.vue";
</script>