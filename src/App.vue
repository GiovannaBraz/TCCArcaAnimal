<template>
<v-app>
    <v-toolbar color="teal lighten-2 white--text">
        <v-toolbar-side-icon
            class="white--text"
            @click="exibe = !exibe"
        ></v-toolbar-side-icon>
        <v-toolbar-title>Arca Animal</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn to="/Adocao" flat class="white--text">Adoção</v-btn>
            <v-btn to="/Apadrinhamento" flat class="white--text">Apadrinhamento</v-btn>
            <v-btn to="/Doacao" flat class="white--text">Doação</v-btn>
            <v-btn to="/contatos" flat class="white--text">contatos</v-btn>
            <v-text-field
                placehoolder="pesquisa"
                box
                append-icon="search"
                class= "hidden-sm-and-down"
            ></v-text-field>
        </v-toolbar-items>
        <v-navigation-drawer
            absolute
            temporary
            v-model="exibe"
        >

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
                }
            },
            methods:{
                
            }
        }
    </script>
