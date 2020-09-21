<template>
  <div>
     <div
      class="row adopt no-gutter"
      style="background-image: url('src/assets/uploads/Events/jumbotron-news.jpg')"
    >
      <div class="bg-over"></div>
      <div class="box_Adopt">
        <h2>Tin Tức</h2>
        <div class="box_Adopt-Item">
          <a href="#">Trang Chủ</a> >
          <span>Tin Tức</span> >
          <span>{{newsHome.title}}</span>
        </div>
      </div>
    </div>
    <div class="row text-justify">
      <div class="newsHome">
        <h3>Những Boss Mèo Cùng Chiếc Đệm Đáng Yêu Của Chúng</h3>
        <div class="newInfo">{{new Date(newsHome.createdDate).toDateString()}} bởi  <span style="color:blue">{{newsHome.userDTO.userName}}</span></div>
      </div>
    </div>
  
    <div class="row">
      <div class="newsHome">
          <hr class="hr">
        <p>{{newsHome.content}}</p>
        <img :src="'https://comic.j.layershift.co.uk/news/avatar/' + newsHome.avatar" alt="">
      </div>
    </div>
    <ReadyHelp/>
    <FooterHome/>
  </div>
</template>

<script>
import ReadyHelp from '../components/ReadyHelp.vue'
import FooterHome from '../components/FooterHome.vue'
export default {
    props: ["id"],
    computed: {
      newsHome() {
        return this.$store.state.newHomeDetail
      }
    },
    created() {
      this.$store.dispatch("getNewsHomeDetail", this.id);
    },
    components: {
      FooterHome,
      ReadyHelp
    }
}
</script>

<style>
.newsHome {
  padding: 30px 100px;
}
.newsHome h3 {
    font-size: 1.8rem;
}
.newsHome p {
  font-size: 1rem
}
.newInfo {
  font-size: 1.1rem;
}
</style>