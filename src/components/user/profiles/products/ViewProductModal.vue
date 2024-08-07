<template>

  <!-- Modal -->
  <div class="modal fade" id="viewProductModal" tabindex="-1" aria-labelledby="viewProductModalLabel" aria-hidden="true">

    <div class="modal-dialog modal-lg">

      <div v-if="product && product.id" class="modal-content">
        <div class="modal-header m-0">

          <div class="container">
            <div class="row">

              <div class="col-11">
                <span class="modal-title fs-5" id="viewProductModalLabel">{{ product.title }}</span>
                <br><category-product :category="product.category_id"/>
              </div>

              <div class="col-1">

                <button type="button" class="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button>

              </div>
            </div>
          </div>


        </div>

        <div class="modal-body">



          <div v-html="product.description"></div>

          <product-files-list/>

          <!--          {{product}}-->

        </div>

        <div class="modal-footer">
          <!--          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>-->
          <!--          <button type="button" class="btn btn-primary">Save changes</button>-->
        </div>

      </div>
    </div>
  </div>


</template>

<script setup>
import {Products} from '@/composables/Products';
import CategoryProduct from '@/components/user/profiles/products/CategoryProduct.vue'
import ProductFilesList from '@/components/user/profiles/products/ProductFilesList.vue'

const {product} = Products()
</script>