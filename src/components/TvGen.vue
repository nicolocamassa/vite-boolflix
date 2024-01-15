<script>
import { store } from "../store";
export default {
    name: 'TvGen',
    props: {
        serie: Object
    },
    data() {
        return {
            store
        }
    },
  methods: {
    generateFlagImageUrl(language) {
        /* API Bandiera con lingua. */
        return `https://www.unknown.nu/flags/images/${language}-100`
    }
}
};
</script>
<template lang="">
  <div>{{ serie.name }}</div>
  <div>{{ serie.original_name }}</div>
  <div>{{ serie.vote_average }}</div>
  <img :src="generateFlagImageUrl(serie.original_language)" alt="">

</template>
<style lang="scss" scoped></style>
