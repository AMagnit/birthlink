<template>

<!--  {{products}}-->
  <div class="row row-cols-1 row-cols-md-3 g-4">

    <div class="col animate__animated animate__fadeInUp" v-for="(p, i) in products">

      <div class="card h-100 rounded-4">

        <div class="card-header">
          {{ p.podcast ? 'Podcast' : 'Document' }}

          <category-product :category="p.category_id" :float_end="true" />

        </div>

        <div class="card-body">

<!--          {{p}} - {{i}}-->

          <h5 class="card-title">{{ p.title }}</h5>
          <!--            <div class="card-text" v-html="p.description"></div>-->

          <div class="d-grid gap-2 col-12 mx-auto">

            <button data-bs-toggle="modal" @click="product = p" data-bs-target="#viewProductModal"
                    class="btn btn-primary rounded-4" type="button">VIEW
            </button>
          </div>


        </div>

      </div>
    </div>

  </div>
</template>
<script setup>
import CategoryProduct from '@/components/user/profiles/products/CategoryProduct.vue';
import {Products} from "@/composables/Products";

const {products, product} = Products()
</script>