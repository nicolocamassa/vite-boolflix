<script>
import AppHeader from './components/AppHeader.vue';
import { store } from './store';

export default {
  components: {
    AppHeader
  },
  app(){
    return{
      store
    }
  }
};
</script>
<template lang="">
  <AppHeader />
</template>
<style lang="scss">
@use './styles/general.scss' as *
</style>
