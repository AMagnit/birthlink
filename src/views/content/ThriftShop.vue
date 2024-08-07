<template>


  <div style="min-height: 350px; background-image: url('/img/main/about_us/thrift_shops.jpg'); background-position: center center; background-size: cover; ">

    <div class="container">


      <br><br>

<!--      <h1 class="text-white ms-4">Thrift shops</h1>-->

    </div>

  </div>


  <div class="container">

    <router-list :set_route="'/'" />

  </div>


  <div class="container text-center">

    <h2 class="text-primary mt-3">Two of the oldest thrift shops in Scotland</h2>

    <p>
      We sell absolutely everything and anything under the sun, from books, clothes and small electrical items, to furniture, bric a brac and even artwork. Please don’t hesitate to come and have bargain hunt.
    </p>

    <p class="text-primary h5">‘I got on the wrong bus and found your charity shop, definitely the best in Edinburgh.’</p>

  </div>


  <div class="container">

    <div class="row mt-5">

      <div class="col-md-8 col-sm-12">
        <h2 class="text-primary">Birthlink Thrift Shop</h2>

        <span class="h5 fw-light">6 Bruntsfield Place,</span><br>
        <span class="h5 fw-light">Edinburgh</span><br>
        <span class="h5 fw-light">EH10 4HN</span>

        <br><br>

        0131 229 4646

        <h5 class="text-primary mt-5">Monday – Saturday</h5>
        9.30am – 5pm

        <h5 class="text-primary mt-3">Donate</h5>
        Adult & children’s clothing, footwear, jewellery
      </div>

      <div class="col-md-4 col-sm-12">
        <img src="/img/main/about_us/thriftshop1.jpg" class="rounded-4 img-fluid mb-3">
      </div>

    </div>

  </div>


  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4469.071115222406!2d-3.204454!3d55.940089!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c79ff2553c51%3A0xed1549f1f8e67b87!2s6%20Bruntsfield%20Pl%2C%20Edinburgh%20EH10%204HN!5e0!3m2!1sen!2suk!4v1718385488599!5m2!1sen!2suk" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>



  <div class="container">

    <div class="row mt-5">

      <div class="col-md-8 col-sm-12">
        <h2 class="text-primary">Birthlink Thrift Shop 2</h2>

        <span class="h5 fw-light">26 Lochrin Buildings</span><br>
        <span class="h5 fw-light">Edinburgh</span><br>
        <span class="h5 fw-light">EH3 9NB</span>

        <br><br>

        0131 259 0119

        <h5 class="text-primary mt-5">Monday – Saturday</h5>
        9.30am – 5pm

        <h5 class="text-primary mt-3">Donate</h5>
        Unwanted books, bric-a-brac, linen, curios, toys and anything unwanted, we can find a home for it
      </div>

      <div class="col-md-4 col-sm-12">
        <img src="/img/main/about_us/thrift2.jpg" class="rounded-4 img-fluid mb-3">
      </div>

    </div>

  </div>


  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4468.858353407459!2d-3.204411!3d55.941933!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c79f73e6448f%3A0x91504d532d9e6a88!2s26%20Lochrin%20Buildings%2C%20Edinburgh%20EH3%209NB!5e0!3m2!1sen!2suk!4v1718386827194!5m2!1sen!2suk" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>



  <div class="container text-center mt-3">

    <h3 class="text-primary">Do you have any spare time?</h3>

    <p>We are looking for Volunteers to help in our Thrift shops, even if it was only an hour, every minute helps. Just pop into one of the shops, call <span style="font-weight: 500">0131 225 6441</span> for an application form or <a style="font-weight: 500; color: #383838" href="#">contact us here</a> and our staff will be happy to assist.</p>

    <p class="h5 text-primary">
      ‘I really appreciate the customer service you provide, you always go the extra mile.’
    </p>

  </div>

</template>
<script setup>
import RouterList from "@/components/inc/RouterList.vue";
</script>