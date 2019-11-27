<template>
  <news :loading="loading" />
</template>

<script>
import News from "@/components/News.vue";

export default {
  name: "home",
  props: ["loading"],
  inject: ["theme"],
  components: {
    News
  }
};
</script>
