<script>
import { store } from "../store";
export default {
  name: "TvGen",
  props: {
    serie: Object,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    generateFlagImageUrl(language) {
      /* API Bandiera con lingua. */
      return `https://www.unknown.nu/flags/images/${language}-100`;
    },

    generateCoverImage(path) {
        if(path == null){
            return `https://picsum.photos/200/300`;
            
        }

      return `https://image.tmdb.org/t/p/w342/${path}`;
    },
  },
};
</script>
<template lang="">
  <img :src="generateCoverImage(serie.poster_path)" alt="" />
  <div>{{ serie.name }}</div>
  <div>{{ serie.original_name }}</div>
  <div>{{ serie.vote_average }}</div>
  <img :src="generateFlagImageUrl(serie.original_language)" alt="" />
</template>
<style lang="scss" scoped></style>
