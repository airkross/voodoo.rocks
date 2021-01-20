<template>
  <div class="container">
    <!-- Поиск -->
    <div class="row">
      <div class="col-12 col-lg-4 mt-5 mx-auto">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="searchField"
        />
      </div>
    </div>

    <!-- Список карточек -->
    <div class="row mt-3">
      <div
        class="col-12 col-md-6 col-lg-4"
        v-for="(post, index) in posts"
        :key="index"
      >
        <PostCard :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState, mapMutations } from "vuex";
import PostCard from "@/components/PostCard.vue";
export default {
  name: "Home",
  components: {
    PostCard,
  },
  computed: {
    // фильтрация карточек
    searchField: {
      get() {
        return this.search;
      },
      set(value) {
        this.SEARCH_CHANGED(value);
      },
    },
    ...mapState(["search"]),
    ...mapGetters(["posts"]),
  },
  methods: {
    ...mapMutations(["SEARCH_CHANGED"]),
    ...mapActions(["getPosts", "getUsers"]),
  },
  mounted() {
    // получение постов при первой загрузке страницы
    this.getPosts();
  },
};
</script>
