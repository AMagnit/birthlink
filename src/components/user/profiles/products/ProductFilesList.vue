<template>

  <div class="row" v-if="product && product.files">

    <template v-for="(f, i) in product.files">

      <div class="col-12 mb-3 animate__animated animate__fadeIn pt-2 pb-2" :class="i == 0 ? '' : 'border-top'">

    <span class="fw-bold me-2">
      #{{ i + 1 }}
    </span>




        <a :href="axios.defaults.baseURL + '/storage/content/' + f.name" target="_blank">
          {{ f.file_type == '0' ? 'Document' : 'Podcast' }}
        </a>

        <music-player :file="f.name"/>

      </div>

    </template>
  </div>


</template>

<script setup>
import {Products} from '@/composables/Products';
import MusicPlayer from '@/components/user/profiles/products/MusicPlayer.vue';
import axios from "axios";

const {product} = Products()

//const props = defineProps(['product_id'])


</script>