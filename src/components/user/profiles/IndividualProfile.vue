<template>

  <div class="container mt-3">

    <h5 class="mt-4 mb-3"> Individual material </h5>

    <cards-block/>

  </div>

  <view-product-modal/>

</template>

<script setup>
import {onBeforeMount, onMounted} from "vue";
import {Products} from '@/composables/Products'
import {Users} from '@/composables/Users';

import ViewProductModal from '@/components/user/profiles/products/ViewProductModal.vue'
import CardsBlock from "@/components/user/profiles/products/CardsBlock.vue"


const {user} = Users()

const {getProductsByType} = Products()

onMounted( async () => {

  if(user && user.type){

    await getProductsByType()
  }

})
</script>