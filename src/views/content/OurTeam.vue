<template>

  <div style="min-height: 350px; background-image: url('/img/main/about_us/team_ptb.jpg'); background-position: center center; background-size: cover; ">

    <div class="container">


      <br><br>

      <h1 class="text-white ms-4">Our team</h1>

    </div>

  </div>

  <router-list :set_route="'/'" />

  <div class="container">



    <div class="row mt-4">

      <div class="col-md-6 col-12 h5">
        All our staff, volunteers and Board of Directors are dedicated to supporting and helping our organisation to bring the highest level of care to our clients.
      </div>

      <div class="col-md-6 col-12">

        <h3 class="text-primary">Our Board of Directors</h3>

        <!-- Ian Todd -->
        <div class="card rounded-4">

          <div class="card-body">

          <span @click="ian_todd = !ian_todd"
                data-bs-toggle="collapse" href="#collapseIanTodd" role="button" aria-expanded="false" aria-controls="collapseIanTodd"
                class="badge rounded-pill text-bg-primary float-end">{{ ian_todd ? 'x' : '+' }}</span>


            <span class="h5" @click="ian_todd = !ian_todd"
                  style="color: #097bb3" data-bs-toggle="collapse" href="#collapseIanTodd" role="button" aria-expanded="false" aria-controls="collapseIanTodd">
            Ian Todd – Chairperson
          </span>


            <div class="collapse" id="collapseIanTodd">
              <div class="card card-body mt-3">
                Ian is a former service user and Birthlink director of over 10 years and a trusted provider of people solutions across the Voluntary, Public and Private Sectors in Scotland. His career began in employee benefits before progressing into executive recruitment and career management and
                ultimately on to corporate sustainability and business transformation. Ian has a passion for cross -sector collaboration and has worked at the interface of all three to help build capacity through business skills and resource transfer.
              </div>
            </div>


          </div>

        </div>


        <!-- Linda McLeod -->
        <div class="card rounded-4 mt-3">

          <div class="card-body">

          <span @click="linda_mcleod = !linda_mcleod"
                data-bs-toggle="collapse" href="#collapseLindaMcLeod" role="button" aria-expanded="false" aria-controls="collapseLindaMcLeod"
                class="badge rounded-pill text-bg-primary float-end">{{ ian_todd ? 'x' : '+' }}</span>


            <span class="h5" @click="linda_mcleod = !linda_mcleod"
                  style="color: #097bb3" data-bs-toggle="collapse" href="#collapseLindaMcLeod" role="button" aria-expanded="false" aria-controls="collapseLindaMcLeod">
            Linda McLeod – Acting Company Secretary
          </span>

            <div class="collapse mt-3" id="collapseLindaMcLeod">
              <div class="card card-body">
                Ian is a former service user and Birthlink director of over 10 years and a trusted provider of people solutions across the Voluntary, Public and Private Sectors in Scotland. His career began in employee benefits before progressing into executive recruitment and career management and
                ultimately on to corporate sustainability and business transformation. Ian has a passion for cross -sector collaboration and has worked at the interface of all three to help build capacity through business skills and resource transfer.
              </div>
            </div>

          </div>


        </div>




        <!-- Alasdair MacDonald -->
        <div class="card rounded-4 mt-3">

          <div class="card-body">

          <span @click="alasdair_macdonald = !alasdair_macdonald"
                data-bs-toggle="collapse" href="#collapseAlasdairMacDonald" role="button" aria-expanded="false" aria-controls="collapseAlasdairMacDonald"
                class="badge rounded-pill text-bg-primary float-end">{{ ian_todd ? 'x' : '+' }}</span>


            <span class="h5" @click="alasdair_macdonald = !alasdair_macdonald"
                  style="color: #097bb3" data-bs-toggle="collapse" href="#collapseAlasdairMacDonald" role="button" aria-expanded="false" aria-controls="collapseLindaMcLeod">
            Alasdair MacDonald
          </span>

            <div class="collapse mt-3" id="collapseAlasdairMacDonald">
              <div class="card card-body">
                Alasdair is a Teaching Fellow at the Strathclyde Institute for Genealogical Studies (SIGS) at the University of Strathclyde and has a passion for helping individuals reconnect with their family and explore their ancestry. He specialises in the use of DNA for genealogical research (including adoption and unknown parentage). He is an administrator of the Scottish DNA Project and a member of the Register of Qualified Genealogists (RQG).
              </div>
            </div>

          </div>


        </div>



      </div>

    </div>

  </div>



  <div class="container">

    <h2 class="text-primary mt-5">Staff Team </h2>

    <h5>
      Interim Chief Exectutive Officer
    </h5>

    Abbi Jackson<br>
    <img src="/img/main/about_us/abbi_photo.jpg" class="img-fluid rounded">


    <br><br>

    <h4 class="text-primary">Post Adoption Team </h4>


    <div class="row row-cols-1 row-cols-md-6 g-4 text-center">

      <div class="col h-100">

        <span class="card-title">
              Practice Manager – Sally Lynch</span>

        <img src="/img/main/about_us/sally.jpg" class="rounded-bottom-2 img-fluid" alt="...">


      </div>


      <div class="col h-100">

        <span class="card-title">
              Social Worker – Louise Wilson</span>

        <img src="/img/main/about_us/louise.jpg" class="rounded-bottom-2 img-fluid" alt="...">

      </div>



      <div class="col h-100">

        <span class="card-title">
              Social Worker – Lara Wierzoch</span>

        <img src="/img/main/about_us/lara.jpg" class="rounded-bottom-2 img-fluid" alt="...">

      </div>


      <div class="col h-100">

        <span class="card-title">
              Social Worker – Laura MacDonald</span>

        <img src="/img/main/about_us/laura_macdonald.jpg" class="rounded-bottom-2 img-fluid" alt="...">

      </div>


      <div class="col h-100">

        <span class="card-title">
              Social Worker – Suzanne Smith</span>

        <img src="/img/main/about_us/suzanne_smith.jpg" class="rounded-bottom-2 img-fluid" alt="...">

      </div>


      <div class="col h-100">

        <span class="card-title">
              Student Social Worker – Success Ameh</span>

        <img src="/img/main/about_us/success_pics.jpg" class="rounded-bottom-2 img-fluid" alt="...">

      </div>

    </div>


    <!-- ///////////////////////// -->

    <h3 class="text-primary mt-5">Redress team</h3>

    <div class="row row-cols-1 row-cols-md-6 g-4">

      <div class="col h-100">

        <span class="card-title">
              Senior Practice Manager – Jonny Kinross</span><br>

        <img src="/img/main/about_us/jonny.jpg" class="rounded-bottom-2 img-fluid" alt="...">


      </div>


      <div class="col h-100">

        <br>
        <span class="card-title">
              Administrator – Caroline Coll</span><br>

        <img src="/img/main/about_us/caroline_coll.jpg" class="rounded-bottom-2 img-fluid" alt="...">


      </div>


      <div class="col h-100">

        <br>
        <span class="card-title">
              Support worker – Oscar Del Rio </span><br>

        <img src="/img/main/about_us/oscar_del_rio.jpg" class="rounded-bottom-2 img-fluid" alt="...">

      </div>


      <div class="col h-100">

        <br>
        <span class="card-title">Support Worker – Laura Dunnett </span><br>

        <img src="/img/main/about_us/laura_dunnett.jpg" class="rounded-bottom-2 img-fluid" alt="...">

      </div>



      <div class="col h-100">

        <br>
        <span class="card-title">
              Support Worker – Emma Mackintosh </span><br>

        <img src="/img/main/about_us/emma_mackintosh.jpg" class="rounded-bottom-2 img-fluid" alt="...">

      </div>


      <div class="col h-100">

        <br>
        <span class="card-title">
              Support Worker – Laura Burnett </span><br>

        <img src="/img/main/about_us/laura_burnett.jpg" class="rounded-bottom-2 img-fluid" alt="...">

      </div>


    </div>


<!--    //////////////-->

    <br>
    <h3 class="text-primary mt-4 text-center">Admin team</h3>

    <div class="row row-cols-1 row-cols-md-4 g-4">

      <div class="col h-100 text-center">

        <span class="fw-bold">
              Finance and Office Manager
        </span><br> Sandra Walkingshaw<br>

        <img src="/img/main/about_us/sandra.jpg" width="200" class="rounded-circle img-fluid" alt="...">


      </div>



      <div class="col h-100 text-center">

        <span class="fw-bold">
              Heritage Officer</span> <br>

          Jenny Duffy<br>

        <img src="/img/main/about_us/jenny_duffy.jpg" width="200" class="rounded-circle img-fluid" alt="...">

      </div>




      <div class="col h-100 text-center">

        <span class="fw-bold">
              Income Generation Manager</span> <br>

        Liz Laing<br>

        <img src="/img/main/about_us/liz_laing.jpg" width="200" class="rounded-circle img-fluid" alt="...">

      </div>



      <div class="col h-100 text-center">

        <span class="fw-bold">
              Office Administrator
        </span> <br>

        Lynsey Harding<br>

        <img src="/img/main/about_us/lynsey_harding.jpg" width="200" class="rounded-circle img-fluid" alt="...">

      </div>





    </div>

  </div>

</template>

<script setup>
import {ref} from "vue";
import RouterList from "@/components/inc/RouterList.vue";

const ian_todd = ref(false)
const linda_mcleod = ref(false)
const alasdair_macdonald = ref(false)

</script>