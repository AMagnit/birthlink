<template>

  <!-- Individual -->
  <individual-profile v-if="user.type == 1" />

  <!-- Professional -->
  <professional-profile v-if="user.type == 2" />

  <!-- Corporate -->
  <corporate-profile v-if="user.type == 3" />


</template>

<script setup>
import {onBeforeMount} from "vue";
import {Users} from '@/composables/Users'
import {Products} from '@/composables/Products';

import IndividualProfile from '@/components/user/profiles/IndividualProfile.vue'
import ProfessionalProfile from '@/components/user/profiles/ProfessionalProfile.vue'
import CorporateProfile from '@/components/user/profiles/CorporateProfile.vue'

const {getUser, user} = Users()

const {getProductsByType} = Products()



onBeforeMount( async () => {

  await getUser()

  await getProductsByType()


})
</script>