<template>

  <div style="min-height: 350px; background-image: url('/img/main/about_us/top.png'); background-position: center center; background-size: cover; ">

    <div class="container">


      <br><br>

      <h1 class="text-white ms-4">About Us</h1>

    </div>

  </div>

  <router-list :set_route="'/'" />


  <div class="container mt-4">

    <div class="row">

      <div class="col-md-7 col-sm-12">

        <p><strong>Birthlink is a small Scottish charity, based in Edinburgh. We offer support and advice to adopted adults, birthparents, adoptive parents, birth families and other professionals in relation to adoptions with a Scottish connection .</strong></p>
        <p>Our work is invaluable to those who seek our support.</p>
        <p>View our latest promotional video.</p>
        <p>If you’re not sure where to start, or which service to look at first, click on the button below and take a look at our flowchart.</p>

        <services-flowchart-modal/>

      </div>

      <div class="col-md-5 col-sm-12">

        <iframe width="100%" style="min-height: 327px"
                class="rounded-4 animate__animated animate__zoomIn"
                src="https://www.youtube.com/embed/PB0UF-3cKcM" title="BIRTHLINK - &#39;Maybe He&#39; (Promotional Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>
      </div>


    </div>


    <find-out-more/>


    <forced-adoption-statement/>

  </div>


</template>

<script setup>
import ServicesFlowchartModal from '@/components/content/about_us/ServicesFlowchartModal.vue'
import FindOutMore from '@/components/content/about_us/FindOutMore.vue'
import ForcedAdoptionStatement from '@/components/content/about_us/ForcedAdoptionStatement.vue'
import RouterList from "@/components/inc/RouterList.vue";
</script>

<style scoped>

</style>