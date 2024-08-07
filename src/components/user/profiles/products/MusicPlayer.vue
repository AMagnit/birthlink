<template>


  <small class="ms-2 text-muted">
    {{file.split('.').pop()}}
  </small>



  <audio controls v-if="checkExtension()">
    <source :src="axios.defaults.baseURL + '/storage/content/' + file" type="audio/mpeg">
  </audio>




</template>

<script setup>
import axios from "axios";


const checkExtension = () => {

  if(props.file.split('.').pop() == 'mp3'){

    return true
  }

  return false
  //return   filename.split('.').pop();
}

const props = defineProps(['file'])

</script>

<style scoped>
audio {
  display:block;
  margin-top: 10px;
}
</style>