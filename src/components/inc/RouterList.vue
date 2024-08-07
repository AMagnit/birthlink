<template>

  <div class="container mt-3 mb-3">

    <template v-for="(r, index) in getChildrenRoutes(set_route, router.options.routes)" :key="index" class="tab" :to="route">

<!--      <span v-if="index != 0"> :: </span>-->

     <RouterLink :to="r.path" class="d-inline-block me-3">{{ r.meta.title }}</RouterLink>



    </template>

  </div>
  <!--  {{$route.path}}-->


</template>

<script setup>

import {Helpers} from '@/composables/helper.js'
import {useRouter} from "vue-router";

defineProps(['set_route'])

const router = useRouter()
const {getChildrenRoutes} = Helpers()

</script>


<style scoped>
.router-link-exact-active {
  color: red;
}
</style>