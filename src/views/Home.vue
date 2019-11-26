<template>
  <news />
</template>

<script>
import News from "@/components/News.vue";

export default {
  name: "home",
  inject: ["theme"],
  components: {
    News
  }
};
</script>
