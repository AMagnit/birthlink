<template>

<!--  <teleport to="head">-->

<!--    <title>S2</title>-->
    <!--    <link rel="canonical" :href="'https://bebeauty.pro/shop/brand/'+brand.data[0].id">-->
<!--    <link rel="canonical" href="'https://bebeauty.pro/'">-->

<!--  </teleport>-->


  <div class="container mt-3">

    <span class="h3">Subscription</span><br>

<!--    {{user}}-->

    <span v-if="user.type == 1" class="small text-muted">Individual Membership</span>
    <span v-if="user.type == 2" class="small text-muted">Professional Membership</span>
    <span v-if="user.type == 3" class="small text-muted">Corporate Membership</span>


    <!--    {{subscriptions}}-->
    <br><br>
    <div class="row row-cols-1 row-cols-md-3 g-4">

      <div class="col animate__animated animate__fadeIn" v-for="(s, index) in subscriptions" :key="s.id">

        <div class="card h-100">

          <div class="card-body">
            <span class="card-title">{{moment(s.date_start).format('DD/MM/YYYY')}}</span> —
            <span class="card-title">{{moment(s.date_end).format('DD/MM/YYYY')}}</span>


            <span class="card-text float-end fw-light">£{{s.amount}}</span>
            <img v-if="s.payed" src="/img/icons/check.svg" width="24" class="float-end me-1">

          </div>
<!--          <div class="card-footer">-->
<!--            <small class="text-muted">Last updated 3 mins ago</small>-->
<!--          </div>-->
        </div>
      </div>

    </div>


  </div>


</template>

<script setup>
import {onBeforeMount} from "vue";
import {Users} from '@/composables/Users';
import {Subscriptions} from '@/composables/Subscription'

import moment from "moment"


const {user, getUser} = Users()

const {getSubscriptions, subscriptions} = Subscriptions()

onBeforeMount( () => {

  getSubscriptions()

  if(user && !user.id){

    getUser()
  }
} )
</script>