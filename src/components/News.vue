<template>
  <div>
    <div v-if="loading">
      <v-skeleton-loader
        v-for="(article, index) in articles"
        :key="index"
        class="mx-auto"
        max-width="400"
        type="card"
        :elevation="10"
        style="margin-top: 2rem;"
      >
      </v-skeleton-loader>
    </div>

    <div v-if="!loading">
      <v-card
        v-show="article.urlToImage"
        v-for="(article, index) in articles"
        :key="index"
        class="mx-auto article"
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

        <v-card-subtitle class="pb-0">{{
          article.publishedAt
        }}</v-card-subtitle>

        <v-card-text class="text--primary card-text">
          <div>{{ article.description }}</div>
        </v-card-text>

        <v-card-actions class="btn-ltr">
          <v-btn color="orange" text :to="'/about/' + index">View</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "News",
  data: () => ({
    loading: true
  }),

  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },

  computed: {
    ...mapGetters(["articles", "isRTL"])
  }
};
</script>

<style lang="scss">
.card-title {
  background: radial-gradient(black, #00000082);
}

.article {
  margin-top: 2rem;
  text-align: center;
}

.RTL {
  direction: rtl;
}

.btn-ltr {
  direction: ltr;
}
</style>
