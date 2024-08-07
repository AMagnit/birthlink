<template>

  <img  @click="scrollOnTop" v-if="activate"
      class="arrow animate__animated animate__fadeInRight rounded-start-3 handLink d-inline-block bg-transparent opacity-50"
       src="/img/icons/arrow_top_icon.svg" width="18" height="18">

</template>

<!--https://medium.com/@Taha_Shashtari/hide-navbar-on-scroll-down-in-vue-fb85acbdddfe-->
<script setup>
import {onBeforeUnmount, onMounted, ref} from "vue";
import debounce from 'lodash/debounce.js';


const scrolled = ref(0);
const activate = ref(false);
const handleDebounce = ref();



const onScroll = () => {

  //console.log('deb')

  scrolled.value =  document.documentElement.scrollTop


    if (scrolled.value < 300) {

      activate.value = false


      return
    }


    activate.value = true


    return

}

onMounted( () => {

  handleDebounce.value = debounce( onScroll, 500 )

  window.addEventListener('scroll', handleDebounce.value)


})


onBeforeUnmount( () => {

  window.removeEventListener('scroll', onScroll)
})


const scrollOnTop = () => {

  window.scrollTo(0, 0)
}

</script>

<style scoped>
.arrow {
  position:fixed;
  bottom:200px;
  right:0;
  z-index:1; /* or higher/lower depending on other elements */
}
</style>