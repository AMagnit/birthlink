<template>

  <nav-top/>



    <RouterView/>

  <scroll-to-top/>

  <footer-block/>



</template>

<script setup>
import {watch} from "vue";
import { useRoute} from 'vue-router'
import NavTop from '@/components/inc/NavTop.vue'
import FooterBlock from '@/components/inc/FooterBlock.vue'
import ScrollToTop from '@/components/inc/ScrollToTop.vue'

const route = useRoute()

/* Route change -> scroll to top */
watch(route, () => { // newVal, oldVal

  window.scrollTo(0, 0)

});
</script>