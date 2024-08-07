<template>

  <div style="min-height: 350px; background-image: url('/img/main/about_us/history2_ptb.jpg'); background-position: center center; background-size: cover; ">

    <div class="container">


      <br><br>

      <h1 class="text-white ms-4">Our history</h1>
    </div>

  </div>


  <router-list :set_route="'/'"/>


  <div class="container">


    <div class="row mt-5">

      <div class="col-12">

        <div class="card card_yellow rounded-4">

          <div class="card-body">

            <h1 class="card-title text-warning h1 fw-bolder title montserrat">1911</h1>
            <p class="card-text h5 fw-light">The agency originated as the Eastern Branch of the National Vigilance Association, its aim being to protect vulnerable women and girls.</p>

          </div>
        </div>

      </div>


      <div class="col-md-6 col-12 mt-4">

        <div class="card card_blue rounded-4  h-100">

          <div class="card-body">

            <h1 class="card-title text-primary h1 fw-bolder  title montserrat">1941</h1>
            <p class="card-text h5 fw-light">The association became the Guild of Service continuing its work with vulnerable families.</p>

          </div>
        </div>

      </div>


      <div class="col-md-6 col-12 mt-4">

        <div class="card card_blue rounded-4  h-100">

          <div class="card-body">

            <h1 class="card-title text-primary h1 fw-bolder title montserrat">1947</h1>
            <p class="card-text h5 fw-light">Edzell Lodge – Originally opened in 1945 in Inverleith Terrace before moving in 1960’s to Newbattle Terrace and then closed in the early 80’s. Was considered to be one of Scotland’s first Family Group Homes. We hold historical records for Edzell.</p>

          </div>
        </div>

      </div>


      <div class="col-12 mt-4">

        <div class="card card_dark_blue rounded-4">

          <div class="card-body">

            <h1 class="card-title h1 fw-bolder title montserrat" style="color: #097BB3">1954</h1>
            <p class="card-text h5 fw-light">The agency originated as the Eastern Branch of the National Vigilance Association, its aim being to protect vulnerable women and girls.</p>

          </div>
        </div>

      </div>


      <div class="col-12 mt-4">

        <div class="card card_yellow rounded-4">

          <div class="card-body">

            <h1 class="card-title h1 fw-bolder text-warning title montserrat">1975</h1>
            <p class="card-text h5 fw-light">By 1975 social changes meant there were fewer babies being placed for Adoption, contraception was more effective and there were improvements in housing and benefits for single parents. </p>
            <p class="card-text h5 fw-light">By the late 1970s more and more adopted adults were returning for help to find out about their origins. Birth parents and relatives were also contacting us to ask what had become of those children placed for adoption. Service users include adopted adults,
              birth parents and their family members, adoptive family members, local authority social workers and voluntary adoption agencies. </p>

          </div>
        </div>

      </div>


      <div class="col-12 mt-4">

        <div class="card card_blue rounded-4">

          <div class="card-body">

            <h1 class="card-title h1 fw-bolder text-primary title montserrat">1978</h1>
            <p class="card-text h5 fw-light">The name of the agency was changed to Family Care.</p>

          </div>
        </div>

      </div>


      <div class="col-md-6 col-12 mt-4">

        <div class="card card_dark_blue rounded-4  h-100">

          <div class="card-body">

            <h1 class="card-title h1 fw-bolder title montserrat" style="color: #097BB3">1984</h1>
            <p class="card-text h5 fw-light">
              <span style="font-weight: 500;">Birthlink</span> and the <span style="font-weight: 500;">Adoption Contact Register</span> were established by Family Care (the renamed Guild of Service).
            </p>

          </div>
        </div>

      </div>


      <div class="col-md-6 col-12 mt-4">

        <div class="card card_dark_blue rounded-4  h-100">

          <div class="card-body">

            <h1 class="card-title h1 fw-bolder title montserrat" style="color: #097BB3">...</h1>
            <p class="card-text h5 fw-light">
              The <span style="font-weight: 500;">After Adoption Information Line</span> was established for anyone with questions about after adoption issues.
            </p>

            <p class="card-text h5 fw-light">
              Service users include adopted adults, birth parents and their family members, adoptive family members, local authority social workers and voluntary adoption agencies.
            </p>

          </div>
        </div>

      </div>


      <div class="col-12 mt-4">

        <div class="card card_yellow rounded-4">

          <div class="card-body">

            <h1 class="card-title h1 fw-bolder text-warning title montserrat">2003</h1>
            <p class="card-text h5 fw-light">Our <span style="font-weight: 500;">Care Connect</span> service was set up to help adults who have been in care to find information about their past or trace estranged family members.&nbsp;Many of this group have the same issues as adopted adults such as
              lack of information about their birth parents and family which impacts on their sense of identity.</p>

          </div>
        </div>

      </div>


      <div class="col-12 mt-4">

        <div class="card card_yellow rounded-4">

          <div class="card-body">

            <h1 class="card-title h1 fw-bolder text-warning title montserrat">2007</h1>
            <p class="card-text h5 fw-light">Family care became “Birthlink” in recognition of the growing demand for Birthlink services. This was subsequently registered at Companies House on 13 August 2007.</p>

          </div>
        </div>

      </div>


    </div>

  </div>

</template>

<script setup>

import RouterList from "@/components/inc/RouterList.vue";
</script>

<style scoped>

.card_yellow {
  border-top: 8px solid #ffc819;
}

.card_blue {
  border-top: 8px solid #19B5FF;
}

.card_dark_blue {
  border-top: 8px solid #097BB3;
}

.title {

  font-weight: 800;
  font-size: 48px;

}

</style>
<script setup lang="ts">
</script>