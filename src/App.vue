<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import { store } from "./store";

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    searchClick() {
      if (this.store.search !== "") {
        this.store.endpoint += `&query=${this.store.search}`;
        console.log(this.store.endpoint);
      }

      axios.get(this.store.endpoint).then((response) => {
        this.store.films = response.data.results;

        console.log(this.store.films) /* Risultato film cercato */
      });
    },
  },
};
</script>

<template>
  <div>
    <AppHeader @searchedFilm="searchClick" />
    <AppMain />

    <div v-for='(film, index) in store.films' :key="index">{{ film.original_title }}</div>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
