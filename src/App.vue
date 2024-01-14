<script>

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import { store } from "./store";
import CardGen from "./components/CardGen.vue";

export default {
  components: {
    AppHeader,
    AppMain,
    CardGen
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    
  },
};
</script>

<template>
  <div>
    <AppMain />
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
