<template>
  <div>
    <v-carousel>
      <v-carousel-item  vfor="imagem in imagens" src="https://www.google.com/search?q=imagens+de+animais&tbm=isch&source=univ&sa=X&ved=2ahUKEwiVuqCH__zhAhWkLLkGHXZKBYsQsAR6BAgHEAE&biw=1024&bih=625#"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template> 
<script>
export default {
  data() {
    return{
      imagens:[
        (link:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fmega.ibxk.com.br%2F%2F%2F2014%2F3%2Fmegacurioso%2F82475143900455691.jpg%3Fw%3D1200%26h%3D480%26mode%3Dcrop&imgrefurl=https%3A%2F%2Fm.megacurioso.com.br%2Fanimais%2F42501-estas-21-fotos-de-animais-sorrindo-vao-melhorar-o-seu-dia.htm&docid=KTCevpWsvKOfgM&tbnid=bcQoiMgQgScNeM%3A&vet=10ahUKEwivupOpgf3hAhUVK7kGHbSQDi8QMwhvKCQwJA..i&w=965&h=480&bih=625&biw=1024&q=imagens%20de%20animais&ved=0ahUKEwivupOpgf3hAhUVK7kGHbSQDi8QMwhvKCQwJA&iact=mrc&uact=8")
        (link:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww2.uol.com.br%2Fsciam%2Fnoticias%2Fimg%2Fanimais_escolhem_lider_a_politica_dos_patos_1__2014-11-03175014.jpg&imgrefurl=https%3A%2F%2Fwww2.uol.com.br%2Fsciam%2Fnoticias%2Fanimais_escolhem_lider_a_politica_dos_patos.html&docid=BYNO61EFHB0HcM&tbnid=dPmdLafO8528hM%3A&vet=12ahUKEwjnw8zxgf3hAhVOHLkGHa9tCoA4ZBAzKAkwCXoECAEQCg..i&w=419&h=350&bih=625&biw=1024&q=imagens%20de%20animais&ved=2ahUKEwjnw8zxgf3hAhVOHLkGHa9tCoA4ZBAzKAkwCXoECAEQCg&iact=mrc&uact=8")
      ]
    }
  }
}
</script>