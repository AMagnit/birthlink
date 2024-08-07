<template>

  <small class="text-muted">city</small>
  <input id="searchbar" v-model="search"
         class="form-control form-control-lg  shadow-sm"
         @input="getCities(), user.city = search"
         @click="getCities()"
         type="search" name="search"
         :placeholder="user && user.city ? user.city : 'Set city details'">


  <ul class="ms-3 mb-3" id='list' v-if="search">

    <li class="city handLink border-bottom pb-2 pt-1" @click="search = c.city, selected_city = c, cities = [], user.city_id = c.id, user.city = c.city" v-for="c in cities">
      {{ c.city }}:

      <span class="text-muted" v-if="c.hist_county">{{ c.hist_county }}</span>
      <span class="text-muted" v-if="c.region"> ({{ c.region }}) </span>
    </li>

  </ul>

  <div class="text-muted ms-3 animate__animated animate__fadeInDown" v-if="selected_city.id || (user && user.city_details && user.city_details.region)">
    {{selected_city.id ? selected_city.region : user.city_details.region}}
    <br><br>
  </div>


<!--{{user.city_details.city +' - '+ user.city}}-->
<!--  {{user}}-->
<!--  {{Object.values(cities)}}-->
<!--{{cityDatalistFiltered}}-->

</template>

<script setup>
import {onMounted, ref, watch} from "vue";
import {Users} from '@/composables/Users';
import axios from "axios";


const {user} = Users()

const search = ref('')
const selected_city = ref({})
const cities = ref({})


const getCities = async () => {

  if(!search.value){
    return
  }

  try {

    const response = await axios.get('/api/crm/city/' + search.value)

    cities.value = response.data


  } catch (error) {

    console.log('>>> ' + error);
  }

}

onMounted( () => {

  if(user && user.city_details && user.city_details.city && user.city_details.city == user.city) {

      search.value = user.city_details.city
      user.city_id = user.city_details.id


  } else if(user && user.city){

    search.value = user.city
  }
})


</script>

