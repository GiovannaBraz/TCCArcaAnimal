<template>
<v-app>
    <v-toolbar>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>Arca Animal</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat>Adoção</v-btn>
            <v-btn flat>Apadrinhamento</v-btn>
            <v-btn flat>Doação</v-btn>
            <v-btn flat>contatos</v-btn>
            <v-text-field
                placehoolder="pesquisa"
                box
                append-icon="search"
            ></v-text-field>
            
        </v-toolbar-items>   
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
</v-app>

</template>
<script>
    export default {
        data() {
            return{
                usuarioLogado: false
            }
        },
        methods:{
            
        }
    }
</script>
