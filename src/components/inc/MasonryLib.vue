<template>

<!--  How to use: -->
<!--  <div class="row" data-masonry='{"percentPosition": true }'>-->


  <teleport to="head">

    <component :is="'script'" defer src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"/>

  </teleport>

</template>

