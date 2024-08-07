<template>

  <small class="text-muted" :class="float_end ? 'float-end' : ''" v-if="category == 1">Birth families</small>
  <small class="text-muted" :class="float_end ? 'float-end' : ''" v-if="category == 2">Historic practice</small>
  <small class="text-muted" :class="float_end ? 'float-end' : ''" v-if="category == 3">Mediation</small>
  <small class="text-muted" :class="float_end ? 'float-end' : ''" v-if="category == 4">Post reunion</small>
  <small class="text-muted" :class="float_end ? 'float-end' : ''" v-if="category == 5">Reunion</small>
  <small class="text-muted" :class="float_end ? 'float-end' : ''" v-if="category == 6">Searching</small>
  <small class="text-muted" :class="float_end ? 'float-end' : ''" v-if="category == 7">Other</small>

</template>

<script setup>

defineProps(['category', 'float_end'])
</script>