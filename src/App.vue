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
                class= "black--text"
                @click="exibe = lexibe"
            ></v-text-field>
        </v-toolbar-items>   
    </v-toolbar>
        <v-navigation-drawer absolute permanent>
            <v-toolbar color="teal lighten-2 white--text">
            <h1>Barbearia</h1>
            </v-toolbar>
            <v-divider></v-divider>
            <v-list dense>
            <v-list-tile to="/">
                <v-list-tile-action>
                <v-icon color="teal">dashboard</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                Início
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile to="/login">
                <v-list-tile-action>
                <v-icon color="teal">person</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                Login
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
            }
        },
        methods:{
            
        }
    }
</script>
