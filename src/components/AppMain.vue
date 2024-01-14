<script>
import { store } from "../store";

export default {
  name: "AppMain",
  props: {
    film: Object
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<template lang="">
  <div>{{ film.original_title }}</div>
</template>
<style lang="scss" scoped></style>
