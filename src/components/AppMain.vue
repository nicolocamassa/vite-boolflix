<script>
import axios from "axios";
import { store } from "../store";
import CardGen from "./CardGen.vue";
import AppHeader from "./AppHeader.vue";
import TvGen from "./TvGen.vue";
import MainJumbo from "./MainJumbo.vue";

export default {
  name: "AppMain",
  props: {
    film: Object,
  },
  data() {
    return {
      store,
    };
  },
  components: {
    CardGen,
    AppHeader,
    TvGen,
    MainJumbo,
  },
  methods: {
    /* AVVIO DELLA FUNZIONE TRAMITE PULSANTE */
    
    searchClick() {
      
      let API_KEY = 'cd8576f9be964ebd86b19d98f629ae98'
      this.store.endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=it_IT`

      /* SE LA LUNGHEZZA DELL'ARRAY CHE CONTIENE IL CAST E' UGUALE A QUELLA CHE CONTIENE I FILM LA RESETTA */
      if(this.store.cast.length == this.store.films.length){
        this.store.cast = []
      }

      /* SE SEARCH NON É VUOTO */
      if (this.store.search !== "") {
        this.store.endpoint += `&query=${this.store.search}`;
        this.store.endpoint_tv += `&query=${this.store.search}`; /* L'ELEMENTO CERCATO VIENE AGGIUNTO ALL'ENDPOINT */
        store.click = true;
      }

      /* CHIAMATA PER I FILM */
      axios.get(this.store.endpoint).then((response) => {
        this.store.films = response.data.results;

        /* PER OGNI FILM VIENE RECUPERATO L'ENDPOINT */
        this.store.films.forEach((element, index) => {
          this.store.endpoint_cast = `https://api.themoviedb.org/3/movie/${this.store.films[index].id}/credits?api_key=${this.store.apiKey}`;
          
          /* VIENE RICHIAMATO L'ENDPOINT DEL CAST DI OGNI SINGOLO FILM */
          axios.get(this.store.endpoint_cast).then((response) => {

              /* IL CAST DI OGNI SINGOLO FILM VIENE PUSHATO NELL'ARRAY*/
              this.store.cast.push(response.data.cast);
          })
        });
      })

      /* FIXME: LA QUERY DEVE RITORNARE ALLO STATO PRIMARIO QUANDO SI RICERCA NUOVAMENTE */
      /* CHIAMATA PER LE SERIE TV */
      axios.get(this.store.endpoint_tv).then((response) => {
        this.store.tv_series = response.data.results;
      });
    },

    returnHome() {
      // Svuota gli array tv_series e films
      this.store.tv_series.splice(0, this.store.tv_series.length);
      this.store.films.splice(0, this.store.films.length);
      this.store.cast = []
    },
  },
};
</script>
<template lang="">
  <!-- RICERCA EFFETTUATA NELL'HEADER  -->
  <AppHeader @searchedFilm="searchClick" @returnHome="returnHome" />
<MainJumbo />
   

  <!-- GENERAZIONE DI TUTTE LE CARD RICERCATE -->
  <!-- TODO: SONO PIÙ PAGINE, FARE IN MODO DI SCORRERE TRA DI ESSE -->
  <h1 class="type" v-if="store.films.length != 0">Film</h1>
  <div class="card_container">
    <CardGen v-for="(film, index) in store.films" :key="index" :film="film" />
  </div>

  <h1 class="type">Serie TV</h1>
  <div class="card_container">
    <TvGen
      v-for="(serie, index) in store.tv_series"
      :key="index"
      :serie="serie"
    />
  </div>
</template>
<style lang="scss" scoped>
.type {
  color: white;
  margin-left: 70px;
  margin-top: 0px;
  font-size: 36px;
}
.card_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: -100px;
}
</style>
