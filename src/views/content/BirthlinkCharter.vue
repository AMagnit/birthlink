<template>

  <router-list :set_route="'/'" />

  <div class="container mt-3">

    <div class="card rounded-4 bg-primary text-white text-center">

      <div class="card-body">

      <h3>BIRTHLINK CHARTER</h3>

      <p>Birthlink are a not-for-profit agency who exist to enhance and promote the wellbeing of adults who:</p>

      <p>have been affected by adoption with a Scottish connection,</p>

      <p>or</p>

      <p>have experience of the care system throughout Scotland</p>

      </div>

    </div>



    <div class="card rounded-4 bg-primary text-white text-center mt-4">

      <div class="card-body">

        <h3>The principles and values that staff and volunteers work to are:</h3>

        <p>Respect</p>

        <p>Dignity</p>

        <p>Trust</p>

        <p>Honesty</p>

        <p>Empathy</p>

        <p>Integrity</p>

      </div>

    </div>


    <div class="card rounded-4 bg-primary text-white text-center mt-4">

      <div class="card-body">

        <h3>We pledge to:</h3>

        <p>Treat people with dignity and sensitivity.</p>

        <p>Act ethically and transparently.</p>

        <p>Offer a safe environment for staff, volunteers, and the people we support.</p>

        <p>Care for people, showing kindness and warmth.</p>

        <p>Work in a trauma sensitive manner.</p>

        <p>Offer all people a space to be heard.</p>

        <p>Listen, acknowledge, and believe people’s experiences.</p>

        <p>Empower the people we support, and each other.</p>

        <p>Offer a tailored service to individuals and advocate where needed.</p>

        <p>Collaborate with others and value everyone’s contribution.</p>

        <p>Be open to feedback and challenge each other to develop best practice.</p>

        <p>Inspire and enable learning.</p>

        <p>Resolve concerns promptly.</p>

        <p>Be accountable and routinely reflect on our practice.</p>


      </div>

    </div>



<!--    <RouterLink v-for="(r, index) in getChildrenRoutes('/', router.options.routes)" :key="index" class="tab" :to="route">-->
<!--      {{ r.path }}-->
<!--    </RouterLink>-->

<!--    {{getAllChildRoutes('/', router.options.routes)}}-->
  </div>
</template>

<script setup>
import RouterList from '@/components/inc/RouterList.vue'

</script>
