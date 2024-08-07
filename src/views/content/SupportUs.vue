<template>



  <div style="min-height: 350px; background-image: url('/img/main/about_us/team_ptb.jpg'); background-position: center center; background-size: cover; ">

    <div class="container">


      <br><br>

      <h1 class="text-white ms-4">Support Us</h1>

    </div>

  </div>

  <router-list :set_route="'/'" />


  <div class="container">

    <p class="h5">
      As a charity we rely on the support of those who value our work, from service users, friends and members to the general public.
    </p>

    <div class="row mt-3">

      <div class="col-md-9 mb-5">

        <main-cards-list/>

      </div>

      <div class="col-md-3">

        <right-md-column/>

      </div>


    </div>





  </div>

</template>
<script setup lang="ts">
import RouterList from "@/components/inc/RouterList.vue";
import MainCardsList from "@/components/content/support_us/MainCardsList.vue";
import RightMdColumn from "@/components/content/support_us/RightMdColumn.vue";
</script>