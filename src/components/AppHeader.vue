<script>
import { store } from '../store';

export default {
    name: 'AppHeader',
    data(){
        return{
            store,
        }
    },
    methods: {
        /* Quando il pulsante è cliccato */

    },
};
</script>
<template lang="">
  <header>

    <!-- Barra di ricerca del film -->
    <input type="text" name="searchBar" id="searchBar" v-model="store.search">

    <!-- Pulsante per la conferma -->
    <input type="button" value="Cerca"  @click="$emit('searchedFilm')">

    <!-- TODO: Creare layout con searchbar e pulsante
               Cliccando il bottone deve cercare nell'api
               Dopo la risposta dell'API stampa:
                1. TITOLO
                2. TITOLO ORIGINALE
                3. LINGUA
                4. VOTO
    -->
  </header>
</template>
<style lang="scss" scoped>
    header{
        width: 100%;
        height: 100px;
        background-color: black;
    }
</style>
