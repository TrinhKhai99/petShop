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
          <span>Tin Tức</span>
          <span v-if="this.selectSearch == 'yes'"> > {{newsByCate.objects.name}}</span>
        </div>
      </div>
    </div>
    <div class="row mt-4 news">
      <div v-if="selectSearch == 'no'" class="col-md-10 news_Box">
        <div v-for="neww in news.objects" :key="neww.newsId" class="col-md-5 news_Item">
          <div class="img_News">
            <span class="month"> {{(new Date(neww.createdDate).toDateString()).slice(4,7)}}</span>
            <img :src="'https://comic.j.layershift.co.uk/news/avatar/' + neww.avatar" alt="">
          </div>
          <div class="content_News">
            <span class="date">{{(new Date(neww.createdDate).toDateString()).slice(0,3)}}</span>
            <h3 class="Capitalize">{{ (neww.title).slice(0, 30) }}...</h3>
            <p
              class="Capitalize mt-2"
            >{{ (neww.content).slice(0,100)}}...</p>
            
           <router-link tag="button" class="btn btn-primary mt-3 btn_More mb-4" :to="{ name: 'NewsHomeDetail', params: { id:neww.newsId }}">Chi Tiết</router-link>
          </div>
        </div>
        <div class="Pagi mb-4"><Paginate :ob="newsCates" @thisPage="getCurPage"/></div>
      </div>
      <div v-if="selectSearch == 'yes'" class="col-md-10 news_Box">
        <div v-for="(newCate, index) in newsByCate.objects.newsDTOS" :key="index" class="col-md-5 news_Item">
          <div class="img_News">
            <img :src="'https://comic.j.layershift.co.uk/news/avatar/' + newCate.avatar" alt="">
          </div>
          <div class="content_News">
            <h3 class="Capitalize">{{ (newCate.title).slice(0, 30) }}...</h3>
            <p
              class="Capitalize mt-2"
            >{{ (newCate.content).slice(0,100)}}...</p>
            <div class="mt-3 mb-2">
              Danh Mục
              <i style="font-size: 1.2rem; color:#7158e2" class="fas fa-th-list"></i>
               {{newsByCate.objects.name}}
            </div>
            <button class="btn btn-primary mt-3 btn_More">CHI TIẾT</button>
          </div>
        </div>
        <div class="Pagi mb-4"><Paginate :ob="newsCates" @thisPage="getCurPage"/></div>
      </div>
      <div class="col-md-2 news_Cate mb-3">
        <h3>Chuyên mục</h3>
        <hr class="hr" />
        <ul>
          <li class="li-List" v-for="(newsCate, index) in newsCates" :key="index" @click="getNewsCategory(newsCate.newsCategoryId)">{{newsCate.name}}</li>
        </ul>
      </div>
    </div>
    <div class="row event mb-4">
      <div class="col-md-12 col-md-offset-4 search_Pet">
        <h2>SỰ KIỆN</h2>
        <p class="icon_Pet">
          <i class="fas fa-paw"></i>
        </p>
      </div>
      <div class="col-md-12 event_">
        <VueSlickCarousel v-bind="settings">
          <div class=" event_Item">
          <div class="img_News">
            <img src="src/assets/uploads/Events/bde9ded4-80b8-4424-b312-8e50ec1c16bf.jpg"  alt />
          </div>
          <div class="content_Event Capitalize">
            <h3 class="mt-4">cuộc thi pet transformation</h3>
            <div class="mt-3 mb-3"><i  class="far fa-calendar-alt icon_Event mr-2"></i>  6/16/2020 11:09:00</div>
            <div class="mb-4"><i class="fas fa-map-marker-alt icon_Event mr-2"></i>  Group thị trấn mèo</div>
          </div>
        </div>
        <div class=" event_Item">
          <div class="img_News">
            <img src="src/assets/uploads/Events/5271fdd6-3763-41de-9eba-962a569756cb.jpg" alt />
          </div>
          <div class="content_Event Capitalize">
            <h3 class="mt-4">SỰ KIỆN GÂY QUỸ - Hanoi Pet Adoption</h3>
            <div class="mt-3 mb-3"><i  class="far fa-calendar-alt icon_Event mr-2"></i>  25/06/2020 lúc 22:02</div>
            <div class="mb-4"><i class="fas fa-map-marker-alt icon_Event mr-2"></i>  tại Ngõ 1 Âu Cơ, số 19 Xóm Chùa Kim Liên</div>
          </div>
        </div>
        <div class=" event_Item">
          <div class="img_News">
            <img src="src/assets/uploads/Events/8570fac4-c868-4946-8b73-fe501ee1a7b4.jpg" alt />
          </div>
          <div class="content_Event Capitalize">
            <h3 class="mt-4">Cuộc thi Pet Transformation</h3>
            <div class="mt-3 mb-3"><i  class="far fa-calendar-alt icon_Event mr-2"></i> 16/06/2020 lúc 23:09</div>
            <div class="mb-4"><i class="fas fa-map-marker-alt icon_Event mr-2"></i>  Group thị trấn mèo</div>
          </div>
        </div>
        </VueSlickCarousel>
      </div>
    </div>
    <ReadyHelp/>
    <FooterHome />
    <Ontop/>
  </div>
</template>

<script>
import ReadyHelp from '../components/ReadyHelp.vue'
import FooterHome from '../components/FooterHome.vue'
import VueSlickCarousel from "vue-slick-carousel";
import Ontop from '../components/Ontop.vue'
import Paginate from "./Paginate";
export default {
    data() {
        return {
          selectSearch: 'no',
          page: 1,
          newsCategory: '',
          
            img :'https://comic.j.layershift.co.uk/news/avatar/',
            settings: {
  "dots": true,
  "infinite": false,
  "speed": 500,
  "slidesToShow": 3,
  "slidesToScroll": 4,
  "initialSlide": 0,
  "responsive": [
    {
      "breakpoint": 1024,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "infinite": true,
        "dots": true
      }
    },
    {
      "breakpoint": 600,
      "settings": {
        "slidesToShow": 2,
        "slidesToScroll": 2,
        "initialSlide": 2
      }
    },
    {
      "breakpoint": 480,
      "settings": {
        "slidesToShow": 1,
        "slidesToScroll": 1
      }
    }
  ]
}
        }
    },
  components: {
    FooterHome,
    VueSlickCarousel,
    ReadyHelp,
    Ontop,
    Paginate
  },
  computed: {
    news (){
        return this.$store.state.newsHome;
    },
    newsCates() {
      return this.$store.state.newsCategoryHome
    },
    newsByCate() {
      return this.$store.state.newsHomeByCate
    }
  },
  methods: {
    getCurPage(data) {
      this.page = data.curPage;
      let pageRecord = {
        page: this.page,
        newsCate: this.newsCategory
      };
      this.$store.dispatch("getNewsHome", pageRecord);
    },

    getNewsCategory(e) {
      let id = e;
      this.$store.dispatch("getNewsCateByIdHome", id);
      this.selectSearch = 'yes'
    },
  },
  created() {
      let data = {
        page : this.page,
        newsCate: this.newsCategory,
      }
      this.$store.dispatch("getNewsHome", data);
      this.$store.dispatch("getNewsCateHome");
  }

};
</script>

<style scopred>
.news {
  padding: 10px 50px 0 ;
}
.event {
  padding: 10px 70px 30 !important;
  background-color: #f6f6f6;
}
.news_Box {
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.news_Item {
  width: 390px;
  min-height: 555px;
  display: inline-block;
  padding:  0;
  background-color: #f4f4f4;
  border: 1px;
  border-radius: 11px;
  margin: 0 20px 20px 0;
}
.news_Cate {
  padding: 20px 12px;
  background-color: #f6f6f6;
  height: 566px;
  text-align: center;
  border: 1px;
  border-radius: 15px;

}
.news_Cate ul {
  text-align: left;
  list-style-type: none;
  display: flex;
  flex-direction: column;
}
.news_Cate ul li {
  display: inline-block;
  padding: 7px 10px;
  background-color: #ffffff;
  margin: 10px 0 0 0;
  border: 1px;
  border-radius: 11px;
  font-weight: bold;
  cursor: pointer;
}
.event_Item {
  min-height: 534px;
  display: inline-block;
  padding: 0 10px 0;
  background-color: #ffffff;
}
.event_ {
    padding: 0 70px 20px;
}
.content_Event {
  min-height: 253px;
  padding: 10px 15px;
  text-align:left;
  color: #a5a5bf;
  font-size: 1.3rem;
  z-index: 2;
}
.content_Event h3 {
    font-size: 1.6rem;
    color: #000000;
}
.Capitalize {
  text-transform: capitalize;
  text-align: justify;
}
.img_News {
  position: relative;
  width: 100%;
  height: 390px;
  z-index: 1;
  overflow: hidden;
}
.img_News img {
  width: 100%;
  height: 100%;
}
.img_News img:hover {
  transform: scale(1.1);
  transition: 0.3s all ease-in-out;
}
.content_News {
  position: relative;
  text-align: center;
}
.content_News button {
  display: inline-block;
}
.btn_More {
  border: 1px;
  display: inline-block;
  padding: 10px 30px;
  border-radius: 30px !important;
  font-weight: bold;
  margin-bottom: 10px;
}
.icon_Event {
    color:#c01958;
}
.Pagi {
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.li-List:hover {
  background-color: #d61c62;
  color:#FFFFFF;
}
</style>