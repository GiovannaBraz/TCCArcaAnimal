<template>
<v-app>
    <v-toolbar color="cyan lighten-1  white --text">
        <v-toolbar-side-icon
            class="Black --text"
            @click="exibe = !exibe"
        ></v-toolbar-side-icon>
        <v-toolbar-title>Arca Animal</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn to="/Adocao" flat class="Black --text">Adoção</v-btn>
            <v-btn to="/Apadrinhamento" flat class="Black --text">Apadrinhamento</v-btn>
            <v-btn to="/Doacao" flat class="Black--text">Doação</v-btn>
            <v-btn to="/contatos" flat class="Black--text">contatos</v-btn>
            <v-text-field
                placehoolder="pesquisa"
                box
                append-icon="search"
                class= "hidden-sm-and-down"
            ></v-text-field>
        </v-toolbar-items> 
    </v-toolbar>
    <v-navigation-drawer
         absolute
         temporary
         v-model="exibe"
    >
    <v-toolbar color="cyan lighten-1 white --text">
            <h1>Arca Animal</h1>
          </v-toolbar>
          <v-divider></v-divider>
          <v-list dense>
            <v-list-tile to="/">
              <v-list-tile-action>
                <v-icon color="Black">home</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                Início
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile to="/login">
              <v-list-tile-action>
                <v-icon color="cyan">person</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                Login

              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile to="/Adoção">
              <v-list-tile-action>
                <v-icon color="cyan">pets</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                Exemplo de Cartão
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
    </template>
    <script>
        export default {
            data() {
                return{
                    exibe: false,
                    logado: false
                }
            },
            methods:{
                
            }
        }
    </script>
