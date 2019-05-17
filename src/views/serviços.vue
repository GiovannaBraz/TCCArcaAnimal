<template>
    <v-layout >
       <v-flex >
      <v-parallax
      :src="require('@/assets/fundo.jpg')"
    >
      <v-layout
        column
        align-center
        justify-center
        id="pedro"
        class="black--text"
        xs12 sm4 md6 lg2
      >
       <h1>Arca Animal</h1>
       <h3>tofo testo</h3><br>
      </v-layout>
    </v-parallax>
        </v-flex> 
        
    </v-layout>
   
       

</template>
<style type="text/css">
    #pedro{
      background: rgba(226,226,226,0.84);
      background: -moz-linear-gradient(left, rgba(226,226,226,0.84) 83%, rgba(210,210,210,0.84) 99%, rgba(209,209,209,0.53) 100%);
      background: -webkit-gradient(left top, right top, color-stop(83%, rgba(226,226,226,0.84)), color-stop(99%, rgba(210,210,210,0.84)), color-stop(100%, rgba(209,209,209,0.53)));
      background: -webkit-linear-gradient(left, rgba(226,226,226,0.84) 83%, rgba(210,210,210,0.84) 99%, rgba(209,209,209,0.53) 100%);
      background: -o-linear-gradient(left, rgba(226,226,226,0.84) 83%, rgba(210,210,210,0.84) 99%, rgba(209,209,209,0.53) 100%);
      background: -ms-linear-gradient(left, rgba(226,226,226,0.84) 83%, rgba(210,210,210,0.84) 99%, rgba(209,209,209,0.53) 100%);
      background: linear-gradient(to right, rgba(226,226,226,0.84) 83%, rgba(210,210,210,0.84) 99%, rgba(209,209,209,0.53) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2e2e2', endColorstr='#d1d1d1', GradientType=1 );
  }
</style>