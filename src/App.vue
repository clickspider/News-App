<template>
  <v-app>
    <v-app-bar app color="red" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://lh3.googleusercontent.com/LB7LuEGqomUmDITSkev4n6nQxLQ94-22-fwyEVzRuGAdZhCRRG1R53LevqVdaFec-hjL=s180-rw"
          transition="scale-transition"
          width="40"
        />

        <v-toolbar-title>Ynet News</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        class="ma-2"
        :loading="loading"
        :disabled="loading"
        color="info"
        @click="loader = 'loading'"
      >
        Reload <v-icon>mdi-reload</v-icon>
        <template v-slot:loader>
          <span class="custom-loader">
            <v-icon light>mdi-reload</v-icon>
          </span>
        </template>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed left temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="text--accent-4">
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content @click="$router.go(item.url)">
              <router-link tag="v-list-item-title" :to="item.url">
                {{ item.title }}
              </router-link>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <div v-if="loading">
        <v-skeleton-loader
          v-for="(article, index) in 20"
          :key="index"
          class="mx-auto"
          max-width="400"
          type="card"
          :elevation="10"
          style="margin-top: 2rem;"
        >
        </v-skeleton-loader>
      </div>
      <router-view :loading="loading"></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "app",
  data() {
    return {
      loader: null,
      loading: true,
      drawer: false,
      group: null,
      counter: 0,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", url: "/" },
        { title: "Photos", icon: "mdi-image", url: "/" },
        { title: "About", icon: "mdi-help-box", url: "/" }
      ]
    };
  },

  created() {
    setTimeout(() => {
      if (this.$data.isOnline) {
        this.getData();
        this.loading = false;
      } else {
        this.loading = false;
      }
    }, 2000);
  },

  methods: {
    ...mapActions(["getData"])
  },

  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];
      this.$router.go();
      setTimeout(() => (this[l] = false), 3000);
      this.loader = null;
    },
    group() {
      this.drawer = false;
    }
  }
};
</script>

<style>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}

@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

@-o-keyframes loader {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes loader {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
