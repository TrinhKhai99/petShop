<template>
    <div>
    <div class="row no-gutter">
            <div class="col-md-12">
                    <VueSlickCarousel v-bind="settings">
                        <div class="carousel-item active">
                        <div class="img_Carousel">
                        </div>
                        <img class=" d-block w-100 " :src="'src/assets/uploads/Carousel/f810481d-2e97-45d6-b638-1c1d5c68bd30.jpg'" alt="First slide">
                        <div class="carousel-caption d-md-block content-Carousel">
                            <h4>TUYỂN NGƯỜI CHĂM SÓC THÚ CƯNG - HPA</h4>
                            <p>Hiện tại số lượng các bé chó mèo nhóm đang cưu mang khá lớn, nhân lực lại có hạn nên không thể đảm bảo các bé được chăm sóc tốt nhất. Nên chúng mình đăng...</p>
                            <router-link class="carousel_MoreBtn" tag="a" :to="{ name: 'volunteer' }">Đọc Thêm</router-link>
                          </div>
                      </div>
                      <div class="carousel-item">
                        <div class="img_Carousel">
                        </div>
                        <img class="d-block w-100 "  :src="'src/assets/uploads/Carousel/b28bf75e-fc33-48a1-939e-3338436726d2.jpg'" alt="Second slide">
                        <div class="carousel-caption  d-md-block content-Carousel">
                            <h4>HÃY NHẬN NUÔI, ĐỪNG XUA ĐUỔI!</h4>
                            <p>Loài vật cũng có tri giác và cảm xúc, chúng cũng biết đau, biết sợ hãi, biết yêu thương và muốn được yêu thương.                            </p>
                            
                            <router-link class="carousel_MoreBtn" tag="a" :to="{ name: 'Adopt' }">NHẬN NUÔI</router-link>
                        </div>
                    </div>
                        <div class="carousel-item ">
                        <div class="img_Carousel">
                        </div>
                        <img class="d-block w-100 " :src="'src/assets/uploads/Carousel/b39e6553-5b33-4fd7-b10a-99ff21bfd5a7.jpg'" alt="Third slide">
                        <div class="carousel-caption  d-md-block content-Carousel">
                            <h4>GHÉ THỊ TRẤN MÈO CHƠI NHÉ CÁC BẠN!</h4>
                            <p>Group của nhóm nhằm chia sẻ kinh nghiệm nuôi và cứu hộ thú cưng.</p>
                            <a class="carousel_MoreBtn" href="https://www.facebook.com/groups/thitranmeo/permalink/446750289258344/">Đọc thêm</a>
                        </div>
                        </div>
                    </VueSlickCarousel>
            </div>
    </div>
    
    <div class="row _padding-about">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <h2>Nhận Nuôi Thú Cưng - Hanoi Pet Adoption</h2>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12">
                <p class="text-justify mt-3 about_Content">
                    <img class="img-fluid float-right about_Img" src="src/assets/uploads/News/ca35ac07-24b7-4e83-bddd-866a6a450365.jpg" alt="">
                   Chúng tôi là một nhóm trẻ tình nguyện viên Việt Nam và quốc tế, hoạt động vì tình yêu chó mèo. Công việc chính của chúng tôi là cứu hộ chó và mèo bị ngược đãi, bị bỏ rơi và / hoặc mất tích ở Hà Nội. Sau khi giải cứu, nếu cần thiết, chúng tôi mang chó mèo tới thú y để kiểm tra và chữa trị. Nếu không phải trường hợp nặng, chúng tôi tìm người giúp chăm sóc tạm thời hoặc mang bé về nhà chung chăm sóc. Các bé sẽ ở đây cho đến khi phục hồi về tâm lý & thể chất, và sẵn sàng tìm mái ấm mới, nơi sẽ yêu thương các bé trọn đời.
                </p>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12">
                <a href="#" class="text-uppercase btn_about">
                    Về chúng tôi
                </a>
            </div>
        </div>
        <div class="row _padding-Service">
                <div class="col-sm-12 col-md-12 box-Flex">
                    <div class=" mother-Box">
                        <div class="bg-Service">
        
                        </div>
                        <div class="bg__Sevice">
                            <img src="https://hanoipetadoption.com/Images/patterns/pattern3.png" alt="">
                        </div>
                        <div class="box-Service">
                            <img class="img-fluid" width="160px" height="160px" src="src/assets/uploads/News/03fc601a-a150-4d55-b051-15d6d3ced88e.jpg" alt="">
                            <h3 class="mt-3 mt-2">ỦNG HỘ</h3>
                            <p>Giúp duy trì hoạt động của HPA qua hình thức quyên góp hoặc nhu yếu phẩm</p>
                        </div>
                        <router-link tag="a" class="btn_MoreService" :to="{ name: 'donate' }">ỦNG HỘ</router-link>
                        
                    </div>
                    <div class=" mother-Box">
                        <div class="bg-Service">
        
                        </div>
                        <div class="bg__Sevice">
                            <img src="https://hanoipetadoption.com/Images/patterns/pattern3.png" alt="">
                        </div>
                        <div class="box-Service">
                            <img class="img-fluid" width="160px" height="160px" src="src/assets/uploads/News/28516d17-6278-4bd4-8eb7-0f3400d07969.jpg" alt="">
                            <h3 class="mt-3 mt-2">TÌNH NGUYỆN</h3>
                            <p>Hành động để thay đổi cuộc sống của chó, mèo và thú cưng khác</p>
                        </div>
                        <router-link class="btn_MoreService" tag="a" :to="{ name: 'volunteer' }">Đọc Thêm</router-link>
                    </div>
                    <div class=" mother-Box">
                        <div class="bg-Service">
        
                        </div>
                        <div class="bg__Sevice">
                            <img src="https://hanoipetadoption.com/Images/patterns/pattern3.png" alt="">
                        </div>
                        <div class="box-Service">
                            <img class="img-fluid" width="160px" height="160px" src="src/assets/uploads/News/423cf220-b557-4644-a769-dd508226180d.jpg" alt="">
                            <h3 class="mt-3 mt-2">NHẬN NUÔI</h3>
                            <p>Hãy nuôi, cưu mang, đừng xuôi đuổi, và yêu thương những loài động vật bị bỏ rơi</p>
                        </div>
                       
                        <router-link class="btn_MoreService" tag="a" :to="{ name: 'Adopt' }">NHẬN NUÔI</router-link>
                    </div>
            </div>
            <div class="col-sm-12 carousel-Service">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <div class="d-block w-100 mother-Box">
                            <div class="bg-Service">
            
                            </div>
                            <div class="bg__Sevice">
                                <img src="https://hanoipetadoption.com/Images/patterns/pattern3.png" alt="">
                            </div>
                            <div class="box-Service">
                                <img class="img-fluid" width="160px" height="160px" src="src/assets/uploads/News/03fc601a-a150-4d55-b051-15d6d3ced88e.jpg" alt="">
                                <h3 class="mt-3 mt-2">ỦNG HỘ</h3>
                                <p>Giúp duy trì hoạt động của HPA qua hình thức quyên góp hoặc nhu yếu phẩm</p>
                            </div>
                            <a href="#" class="btn_MoreService">Tìm hiểu thêm</a>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <div class="d-block w-100 mother-Box">
                            <div class="bg-Service">
            
                            </div>
                            <div class="bg__Sevice">
                                <img src="https://hanoipetadoption.com/Images/patterns/pattern3.png" alt="">
                            </div>
                            <div class="box-Service">
                                <img class="img-fluid" width="160px" height="160px" src="src/assets/uploads/News/28516d17-6278-4bd4-8eb7-0f3400d07969.jpg" alt="">
                                <h3 class="mt-3 mt-2">TÌNH NGUYỆN</h3>
                                <p>Hành động để thay đổi cuộc sống của chó, mèo và thú cưng khác</p>
                            </div>
                            <a href="#" class="btn_MoreService">Tìm hiểu thêm</a>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <div class="d-block w-100 mother-Box">
                            <div class="bg-Service">
            
                            </div>
                            <div class="bg__Sevice">
                                <img src="https://hanoipetadoption.com/Images/patterns/pattern3.png" alt="">
                            </div>
                            <div class="box-Service">
                                <img class="img-fluid" width="160px" height="160px" src="src/assets/uploads/News/423cf220-b557-4644-a769-dd508226180d.jpg" alt="">
                                <h3 class="mt-3 mt-2">NHẬN NUÔI</h3>
                                <p>Hãy nuôi, cưu mang, đừng xuôi đuổi, và yêu thương những loài động vật bị bỏ rơi</p>
                            </div>
                            <a href="#" class="btn_MoreService">Tìm hiểu thêm</a>
                        </div>
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
            </div> 
                       
        </div>
        <div class="row no-gutter _padding_Pet">
            <div class="col-md-12 pc_Pet">
                <div class="pet">
                    <h2>BÉ NGOAN TRONG TUẦN</h2>
                    <p class="icon_Pet"><i class="fas fa-paw"></i></p>
                    <VueSlickCarousel v-bind="settings2">
                            <div v-for="pet in pets.objects" :key="pet.petId" class="carousel-cell box_Pet_Item">
                                <div class="img_Pet" v-bind:style='{ backgroundImage: "url(" + imgPet.item1 + pet.image +")", }'></div>
                                        <router-link class="name_Pet" :to="{ name: 'PetHomeDetail', params: { id:pet.petId }}">{{pet.petName}}</router-link>
                                        <hr>
                                        <p><b>Giới tính</b> {{ pet.gender }}</p>
                                        <p><b>Tuổi</b>: {{ pet.age }} tháng</p>
                                        <p><b>Tiêm phòng</b>: {{ pet.petAboutDTO.sterilization }}</p>   
                            </div>
                    </VueSlickCarousel>
                    <!-- <flickity  class="flickity" ref="flickity" :options="flickityOptions">
                        <div v-for="pet in pets.objects" :key="pet.petId" class="carousel-cell box_Pet_Item">
                                <div class="img_Pet" v-bind:style='{ backgroundImage: "url(" + imgPet.item1 + pet.image +")", }'></div>
                                        <router-link class="name_Pet" :to="{ name: 'PetHomeDetail', params: { id:pet.petId }}">{{pet.petName}}</router-link>
                                        <hr>
                                        <p><b>Giới tính</b> {{ pet.gender }}</p>
                                        <p><b>Tuổi</b>: {{ pet.age }} tháng</p>
                                        <p><b>Tiêm phòng</b>: {{ pet.petAboutDTO.sterilization }}</p>   
                            </div>
                    </flickity> -->
                </div>
            </div>
        </div>
        <div class="row mt-3 ">
            <div class="news">
                <h2>TIN TỨC</h2>
                <p class="icon_Pet"><i class="fas fa-paw"></i></p>
            </div>
        </div>
        <div class="row no-gutter newsHome text-justify mb-5">
            <!-- <div v-for="n in news.objects" :key="n.newsId" class="newsHomeBox">
                <div class="img_NewsHome">
                    <img :src="'https://petadoption.j.layershift.co.uk/news/avatar/' + n.avatar" alt="">
                </div>
                <div class="content_NewsHome">
                     <router-link class="mt-3 mb-4 toNewsDetail" :to="{ name: 'NewsHomeDetail', params: { id:n.newsId }}">{{n.title}}</router-link>
                    <p>{{ (n.content).slice(0,100) }}</p>
                </div>
            </div> -->
            <div class="col-md-12">
                <!-- <VueSlickCarousel v-bind="settings3"> -->
            <flickity  class="flickity" ref="flickity" :options="flickityOptions">
                <div v-for="(n, index) in news.objects" :key="index" class="newsHomeItem carousel-cell mr-3">
                    <div class="newsHomeImg">
                        <span class="month"> {{(new Date(n.createdDate).toDateString()).slice(4,7)}}</span>
                        <img :src="'https://petadoption.j.layershift.co.uk/news/avatar/' + n.avatar" alt="">
                    </div>
                    <div class="newsHomeContent">
                        <span class="date">{{(new Date(n.createdDate).toDateString()).slice(0,3)}}</span>
                        <h4><router-link class="mt-3 mb-4 toNewsDetail" :to="{ name: 'NewsHomeDetail', params: { id:n.newsId }}">{{(n.title).slice(0,30)}} ...</router-link></h4>
                        <p>{{ (n.content).slice(0,100)}}...</p>
                    </div>
                </div>
            </flickity>
                <!-- </VueSlickCarousel> -->
            </div>
         </div>
        <div class="row mb-4">
            <div class="news">
                
                <router-link tag="a" class="more_Video" :to="{ name: 'newspage' }">TIN TỨC</router-link>
            </div>
        </div>
        
        <div class="row rescue no-gutter" style="background-image: url('src/assets/uploads/News/counterbg.jpg')">
            <div class="bg-over">
                
            </div>
                <div class="col-lg-3 col-md-3 col-12 rescue_Item">
                    <span><i class="fas fa-hospital-symbol"></i></span>
                    <p class="count">301</p>
                    <h3>Ca Cứu Hộ</h3>
                </div>   
                <div class="col-lg-3 col-md-3 col-12 rescue_Item">
                    <span><i class="fas fa-dog"></i></span>
                    <p class="count">100</p>
                    <h3>Đã Có Chủ</h3>
                </div> 
                <div class="col-lg-3 col-md-3 col-12 rescue_Item">
                    <span><i class="fas fa-cat"></i></span>
                    <p class="count">119</p>
                    <h3>Chờ Tìm Chủ</h3>
                </div> 
                <div class="col-lg-3 col-md-3 col-12 rescue_Item">
                    <span><i class="fas fa-bone"></i></span>
                    <p class="count">35</p>
                    <h3>Chưa Sẵn Sàng</h3>
                </div> 
           
        </div>
        <div class="row">
            <div class="video_Pet">
                <h2>QUÁ TRÌNH CỨU HỘ</h2>
                <p class="icon_Pet"><i class="fas fa-paw"></i></p>
                <VueSlickCarousel v-bind="settings2" :dots='false'>
                    <div class="video_PetItem">
                        <div class="img_videoPet" v-bind:style='{ backgroundImage: "url(" + imgPet.item2 + ")", }'>
                            
                        </div>
                        <h3 class="mt-3">Mun Liệt 4 Chân Bị Bỏ Rơi Ở Bãi Xe</h3>
                        <span>Ngày Đăng: 19/02/2020</span>
                        <hr class="hr">
                        <p>Chó mẹ nuôi ở bãi giữ xe đẻ được 5 bé cún con, rồi một ngày chó mẹ bị xe ô tô cán chết. 5 bé cún con không ai chăm sóc cũng chết dần...</p>

                    </div>
                    <div class="video_PetItem">
                        <div class="img_videoPet" v-bind:style='{ backgroundImage: "url(" + imgPet.item6 + ")", }'>
                            
                        </div>
                        <h3 class="mt-3">Quá trình phục hồi kì diệu của Gấu liệt</h3>
                        <span>Ngày Đăng: 19/04/2020</span>
                        <hr class="hr">
                        <p>Các bạn còn nhớ bé Gấu liệt - code 290 bị vứt bãi rác Hà Đông chúng mình cứu đầu tháng 5 không</p>

                    </div>
                    <div class="video_PetItem">
                        <div class="img_videoPet" v-bind:style='{ backgroundImage: "url(" + imgPet.item5 + ")", }'>
                            
                        </div>
                        <h3 class="mt-3">Hành trình phục hồi của bé Cam</h3>
                        <span>Ngày Đăng: 09/03/2020</span>
                        <hr class="hr">
                        <p>Bé được cứu ngày 21/07/2019 tại một bãi rác, chủ em để em gầy tới mức như một bộ xương khô, hai chân sau co cơ không thể đi lại được. Em không thể chạy đi đâu được </p>

                    </div>
                    <div class="video_PetItem">
                        <div class="img_videoPet" v-bind:style='{ backgroundImage: "url(" + imgPet.item4 + ")", }'>
                            
                        </div>
                        <h3 class="mt-3">Cún con bị chủ cũ bạo hành</h3>
                        <span>Ngày Đăng: 29/05/2020</span>
                        <hr class="hr">
                        <p>Các bạn theo dõi nhóm lâu chắc hẳn sẽ nhớ bé. Đây là bé cún bị chủ cũ bạo hành mà chúng mình cứu được ngày 4/3/2019. Thật sự đây không phải lần đầu bé</p>
                    </div>
                    
                </VueSlickCarousel>
               
                <router-link tag="a" class="more_Video mt-4" :to="{ name: 'newspage' }">TIN TỨC</router-link>
            </div>
        </div>
        <div class="row no-gutter ready_Donate" style="background-image: url('src/assets/uploads/Mix/ready-to-support.jpg')">
            <div class="bg-over">

            </div>
            <div class="content_Donate ">   
                <h2 >Bạn Đã Sẵn Sàng Giúp Đỡ?</h2>
                
                <router-link tag="a" class=" donate" :to="{ name: 'donate' }">ỦNG HỘ</router-link>
            </div>
        </div>
        <FooterHome/>
        <Ontop/>
        </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import FooterHome from '../components/FooterHome.vue'
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import Login from "./functions/Login.vue";
import store from '../stores';
import {mapActions} from 'vuex'
import { mapStates } from 'vuex'
import Flickity from 'vue-flickity'
export default {
    name: 'Home',
    props: ["key"],
  data() {
    return {    
        flickityOptions: {
        initialIndex: 3,
        prevNextButtons: true,
        pageDots: true,
        wrapAround: true,
        freeScroll: true
        // any options from Flickity can be used
      },
        recordPet: 8,
        isLoggedIn: false,
      image: "",
      imgPet: {
          item1 :'https://petadoption.j.layershift.co.uk/pet/image/',
          item2 :'src/assets/uploads/News/Video1.jpg',
          item3 :'https://petadoption.j.layershift.co.uk/news/avatar/',
          item4: 'src/assets/uploads/News/video2.jpg',
          item5: 'src/assets/uploads/News/dd6cad4a-8b58-4a0d-9e55-3d6a1941d598.jpg',
          item6: 'src/assets/uploads/News/video4.jpg',
      },
      settings: {
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        },
        settings2: {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            autoplay: true,
        autoplaySpeed: 1000,
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
                },
                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
            ]
        },
        settings3: {
            "dots": true,
            "infinite": false,
            "speed": 500,
            "slidesToShow": 3,
            "slidesToScroll": 4,
            "initialSlide": 0,
            "autoplay": true,
        "autoplaySpeed": 1000,
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
        },
        
    };
    
  },
  methods: {
      carousel() {
            this.settings2.dots = true,
            this.settings2.infinite = false,
            this.settings2.speed = 500,
            this.settings2.slidesToShow = 4,
            this.settings2.slidesToScroll = 4,
            this.settings2.initialSlide = 0,
            this.settings2.autoplay = true,
            this.settings2.autoplaySpeed = 1000,
            this.settings2.responsive[0].breakpoint = 1024,
             this.settings2.responsive[0].settings.slidesToShow = 3,
             this.settings2.responsive[0].settings.slidesToScroll = 3,
             this.settings2.responsive[0].settings.infinite = true,
             this.settings2.responsive[0].settings.dots = true,
             this.settings2.responsive[1].breakpoint = 600,
             this.settings2.responsive[1].settings.slidesToShow = 2,
             this.settings2.responsive[1].settings.slidesToScroll = 2,
             this.settings2.responsive[1].settings.initialSlide = 2,
             this.settings2.responsive[2].settings.slidesToShow = 1,
             this.settings2.responsive[2].settings.slidesToScroll = 1
    }
  },
  beforeMount() {
      this.carousel();
    },
  created() {
      let data = {
          page: 1,
      }
     this.$store.dispatch("getPetsHome", this.recordPet);
    this.$store.dispatch("getNewsHome", data);
  },
  computed: {
      pets() {
      return this.$store.state.petsHome;
    },
    news (){
        return this.$store.state.newsHome;
    },
    
  },

  mounted() {

    window.onscroll = function() {myFunction()};

    var navbar = document.getElementById("navbar");

    var sticky = navbar.offsetTop;

    function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
    }
    $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

  },
  components: {
    Login, 
    VueSlickCarousel,
    FooterHome,
    Flickity
  }
};
</script>

<style scopred>
.name_Pet {
    margin-top: 20px;
    font-size: 1.7rem;
    font-weight: bold;
    color: #000
}
.name_Pet:hover {
    text-decoration: none;
    color: #d61c62;
}
.newsHomeItem {
    width: 30%;
    border-radius: 11px;
    height: 535px;
}
.newsHomeContent {
    padding: 40px 15px 20px;
    height: 212px;
    background-color:#f4f4f4 ;
    position: relative;
}
.about_Content {
    font-size: 1.1rem;
}
.date {
    font-weight: bold;
    font-size: 1rem;
    top: 0;
    margin-left: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 30px;
    position: absolute;
    background-color: #c01958;
    color: #FFF;
 }
.newsHomeContent h3 {
    color: #535353;
    font-size: 1.4rem;
}
.newsHomeContent h3:hover {
    color: #d61c62
}
.newsHomeContent p {
    font-size: 1rem;
    color: #797979;
}
.newsHome {
    padding: 0 115px;
}
.newsHomeImg {
    position: relative;
    width: 100%;    
    height: 323px;
}
.month {
    font-weight: bold;
    font-size: 1rem;
    bottom: 0;
    margin-left: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 30px;
    position: absolute;
    background-color: #d61c62;
    color: #FFF;
}
.newsHomeImg img {
    width: 100%;
    height: 100%;
}
.img_NewsHome {
    width: 323px;
    height: 323px;
    background-color: #f6f6f6;
}
.newsHomeBox {
    padding: 10px 15px;
    text-align: justify;
}
.img_NewsHome img {
    width: 100%;
    height: 100%;
}
.content_NewsHome {
    padding: 10px 15px;
}
.toNewsDetail {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 10px 0 20px 0;
    color: #000000
}
.toNewsDetail:hover {
    text-decoration: none;
    color: #d61c62;
}
.content_NewsHome p {
    font-size: 1rem;
}
@media only screen and (max-width: 640px) { 
    .news_Boxs {
        width: 393px;
        height: 323px;
    }
}
</style>