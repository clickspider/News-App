<template>
  <div style="padding-top: 100px; text-align: center;">
    <v-btn
      large
      color="primary"
      @click="$router.go(-1)"
      style="margin-bottom: 15px;"
      >&larr; GO BACK</v-btn
    >

    <v-card
      class="mx-auto"
      :class="{ RTL: isRTL }"
      max-width="400"
      :elevation="10"
      :shaped="true"
      :loading="loading"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        :src="article.urlToImage"
      >
        <v-card-title class="card-title">{{ article.title }}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">
        {{ article.publishedAt }}
      </v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{ article.description }}</div>
      </v-card-text>

      <v-card-actions class="btn-ltr">
        <v-btn
          class="ma-2"
          :loading="loading"
          :disabled="loading"
          color="secondary"
          @click="loader = 'loading'"
          :href="article.url"
          target="_blank"
          >READ</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["id"],
  data: () => ({
    article: [],
    loader: null,
    loading: true
  }),

  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    }
  },

  created() {
    setTimeout(() => {
      this.loading = false;
      this.article = this.articles[this.id];
    }, 2000);
  },

  computed: {
    ...mapGetters(["articles", "isRTL"])
  }
};
</script>

<style scoped>
.RTL {
  direction: rtl;
}

.btn-ltr {
  direction: ltr;
}
</style>
