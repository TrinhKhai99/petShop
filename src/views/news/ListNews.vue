<template>
  <tr>
    <td>{{ news.newsId }}</td>
    <td>
      <router-link :to="{ name: 'NewsDetail', params: { id:news.newsId }}">{{news.title}}</router-link>
    </td>
    <td>
      <img
        class="img_Newss"
        v-bind:src="'https://petadoption.j.layershift.co.uk/news/avatar/' + news.avatar"
        :alt="news.avatar"
      />
    </td>
    <td>{{ getDateNews }}</td>

    <td>{{news.userDTO.userName}}</td>
    <td>{{news.newsCategoryDTO.name}}</td>
    <td>
      <router-link class="btn btn-sm btn-primary" :to="{ name: 'NewsDetail', params: { id:news.newsId }}">Sửa</router-link>
      <button class="btn btn-sm btn-danger" @click="deleteNews">Xoá</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["news"],
  //   computed: {
  //     news() {
  //       return this.$store.state.news;
  //     }
  //   }
  computed: {
    getDateNews() {
      let dateNews = new Date(this.news.createdDate);
      // console.log(dateNews);
      return dateNews.toDateString();
    }
  },
  methods: {
    deleteNews() {
     this.$store.dispatch("deleteNews", this.news.newsId)
    console.log(this.news.newsId)
    },
    
  }
};
</script>

<style scoped>

.img_Newss {
  width: 90px;
  height: 50px;
}
td:hover {
  overflow: visible;
}
</style>>