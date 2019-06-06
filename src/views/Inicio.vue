<template>
  <v-container fluid class="ma-0 pa-0">
      <v-carousel class="carrosel">
        <v-carousel-item  
          v-for="(item,i) in items" 
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
  </v-container>
</template> 
<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://guidable.co/wp-content/uploads/2018/08/dog-2606759.jpg'
          },
          {
            src: 'https://hypescience.com/wp-content/uploads/2018/07/animais-necrofilicos-necrofilia-3-838x503.jpg'
          },
          {
            src: 'https://hypescience.com/wp-content/uploads/2018/07/animais-necrofilicos-necrofilia-5-838x559.jpg'
          },
          {
            src: 'https://hypescience.com/wp-content/uploads/2018/07/animais-necrofilicos-necrofilia-9-838x419.jpg'
          },
          {
            src: 'https://hypescience.com/wp-content/uploads/2018/07/animais-necrofilicos-necrofilia-10-838x559.jpg'
          },
          {
            src: 'https://cdn.pixabay.com/photo/2015/02/14/10/16/cat-636172_960_720.jpg'
          }
        ]
      }
    }
  }
</script>