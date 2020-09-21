<template>
  <div>
      <div
      class="row adopt no-gutter"
      style="background-image: url('src/assets/uploads/TNV/jumbotron-support.jpeg')"
    >
      <div class="bg-over"></div>
      <div class="box_Adopt">
        <h2>Ủng Hộ</h2>
        <div class="box_Adopt-Item">
          <a href="#">Trang Chủ</a> >
          <span>Ủng hộ</span>
        </div>
      </div>
    </div>
    <div class="row ">
            <div class="col-md-8 wantDonate">
                <h2>Tôi Muốn Ủng Hộ</h2>
                <hr class="hr">
                <p>Mọi hoạt động cứu hộ của Hanoi Pet Adoption hoàn toàn dựa trên các khoản quyên góp từ cộng đồng. Chi
                    phí trung bình hàng tháng của nhóm rơi vào khoảng 70 triệu đồng, bao gồm tiền thuê nhà, tiền viện
                    phí, thức ăn, điện, nước, thuốc men và đồ dùng, bỉm tã, lương hỗ trợ các bạn tnv dọn dẹp... Nhóm rất
                    cần sự giúp đỡ của các bạn để có thể duy trì nhà chung cũng như đội cứu hộ. Chỉ cần cố định 50k -
                    100k hàng tháng là các bạn đã giúp đỡ được cho nhóm và cách bé rất nhiều!
                </p>
                <p>Chi phí sẽ được chia đều cho các bé khác còn nằm viện và gây dựng nhà chung. Ngoài ra Nhóm cũng tiếp
                    nhận quyên góp bằng hiện vật như quần áo cũ (để lót chuồng), bỉm, găng tay y tế, thức ăn, cát vệ
                    sinh v.v...
                </p>
                <p>*Lưu ý: nhóm không dùng zalo và KHÔNG BAO GIỜ yêu cầu Mạnh Thường Quân cung cấp thông tin thẻ hoặc mã
                    OTP</p>
                <p>🧧Danh sách Mạnh Thường Quân quyên góp cho nhóm sẽ được cập nhật thường xuyên tại đây:</p>
                <p>2020: http://bit.ly/2RLgOgs</p>
                <p>2019: http://bit.ly/31cYEXs</p>
                <p>2018: http://bit.ly/2K5hr1K</p>
                <hr>
                <p>📜Link thống kê viện phí</p>
                <p>2020: https://bit.ly/2ULxqGA</p>
                <p>2019: http://bit.ly/2XynRtp</p>
                <hr>
                <p>🗳️ Địa điểm đặt hòm quyên góp:</p>
                <p>Better World Hanoi số 8 Xuân Diệu Hà Nội</p>
                <p>Phòng khám Animal Care: nhà 20 ngõ 424 Thuỵ Khuê
                </p>
                <a href="#" class="donate">ỦNG HỘ NGAY</a>
            </div>
            <div class="col-md-4 img_volunteers">
                <img class="img-fluid float-left about_Img mt-5"
                    src="src/assets/uploads/TNV/256b940f-9028-443d-8fcf-f39f5f1618af.jpg" alt="">
            </div>
        </div>
    
        <div class="row">
            <div class="donors_PC">
                <h2>NHÀ TÀI TRỢ CỐ ĐỊNH</h2>
                <p class="icon_Pet"><i class="fas fa-paw"></i></p>
                <VueSlickCarousel v-bind="settings2">
                    <div class="carousel-cell box_Donors">
                        <div class="img_Donors">
                            <img src="src/assets/uploads/TNV/7bddabcf-f70a-4bf0-9141-c87e67437a47.png" alt="">
                        </div>
                        <h3 class="mt-3 mb-5">Me-O Việt Nam</h3>
                        <span class="icon_PetSm"><i class="fas fa-paw"></i></span>
                    </div>
                    <div class="carousel-cell box_Donors">
                        <div class="img_Donors"
                            >
                            <img src="src/assets/uploads/TNV/7bddabcf-f70a-4bf0-9141-c87e67437a47.png" alt="">
                        </div>
                        <h3 class="mt-3 mb-5">Me-O Việt Nam</h3>
                        <span class="icon_PetSm"><i class="fas fa-paw"></i></span>
                    </div>
                    <div class="carousel-cell box_Donors">
                        <div class="img_Donors"
                            >
                            <img src="src/assets/uploads/TNV/7bddabcf-f70a-4bf0-9141-c87e67437a47.png" alt="">
                        </div>
                        <h3 class="mt-3 mb-5">Me-O Việt Nam</h3>
                        <span class="icon_PetSm"><i class="fas fa-paw"></i></span>
                    </div>
                    <div class="carousel-cell box_Donors">
                        <div class="img_Donors"
                            >
                            <img src="src/assets/uploads/TNV/7bddabcf-f70a-4bf0-9141-c87e67437a47.png" alt="">
                        </div>
                        <h3 class="mt-3 mb-5">Me-O Việt Nam</h3>
                        <span class="icon_PetSm"><i class="fas fa-paw"></i></span>
                    </div>
                 </VueSlickCarousel>
            </div>
        </div>
        
        <div class="row">
            <div class="col-md-12 option_Donate">
                <h2>CÁC PHƯƠNG THỨC ỦNG HỘ KHÁC</h2>
                <p class="icon_Pet mt-3 mb-4"><i class="fas fa-paw"></i></p>
                <div class="box_icon_Donate mb-3">
                    <span><i class="fas fa-baby"></i></span>
                    <span><i class="fas fa-tshirt"></i></span>
                    <span><i class="fas fa-pizza-slice"></i></span>
                </div>
                <a href="#" class=" donate">LIÊN HỆ HPA</a>
            </div>
        </div>
        <Donors/>
        <div class="row no-gutter _padding_Pet">
            <div class="col-md-12 pc_Pet">
                <div class="pet">
                    <h2>BÉ NGOAN TRONG TUẦN</h2>
                    <p class="icon_Pet"><i class="fas fa-paw"></i></p>
                    <VueSlickCarousel v-bind="settings2">
                            <div v-for="pet in pets.objects" :key="pet.petId" class="carousel-cell box_Pet_Item">
                                
                                <div class="img_Pet" v-bind:style='{ backgroundImage: "url(" + imgPet.item1 + pet.image +")", }'></div>
                                        <p class="name_Pet"><router-link class="name_Pet" :to="{ name: 'PetHomeDetail', params: { id:pet.petId }}">{{pet.petName}}</router-link></p>
                                        <hr>
                                        <p><b>Giới tính</b> {{ pet.gender }}</p>
                                        <p><b>Tuổi</b>: {{ pet.age }} tháng</p>
                                        <p><b>Tiêm phòng</b>: {{ pet.petAboutDTO.sterilization }}</p>
                                
                            </div>
            </VueSlickCarousel>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="video_Pet">
                <h2>QUÁ TRÌNH TRƯỚC VÀ SAU</h2>
                <p class="icon_Pet"><i class="fas fa-paw"></i></p>
                <div class="video_BoxPet">
                    <div class="video_PetItem">
                        <div class="img_videoPet"
                            style="background-image: url('src/assets/uploads/TNV/0f4472b0-4a8a-47ed-93f4-f6f108945cbc.png')">

                        </div>
                        <h3 class="mt-3">Trước Và Sau Khi Bé Smile Được Nhận</h3>
                        <hr class="hr">
                        <p>Sự khác biệt khi em được yêu thương và chăm sóc, từ 12kg lên 19kg...</p>

                    </div>
                    <div class="video_PetItem">
                        <div class="img_videoPet"
                            style="background-image: url('src/assets/uploads/TNV/0f4472b0-4a8a-47ed-93f4-f6f108945cbc.png')">

                        </div>
                        <h3 class="mt-3">Trước Và Sau Khi Bé Smile Được Nhận</h3>
                        <hr class="hr">
                        <p>Sự khác biệt khi em được yêu thương và chăm sóc, từ 12kg lên 19kg...</p>

                    </div>
                    <div class="video_PetItem">
                        <div class="img_videoPet"
                            style="background-image: url('src/assets/uploads/TNV/0f4472b0-4a8a-47ed-93f4-f6f108945cbc.png')">

                        </div>
                        <h3 class="mt-3">Trước Và Sau Khi Bé Smile Được Nhận</h3>
                        <hr class="hr">
                        <p>Sự khác biệt khi em được yêu thương và chăm sóc, từ 12kg lên 19kg...</p>

                    </div>
                    <div class="video_PetItem">
                        <div class="img_videoPet"
                            style="background-image: url('src/assets/uploads/TNV/0f4472b0-4a8a-47ed-93f4-f6f108945cbc.png')">

                        </div>
                        <h3 class="mt-3">Trước Và Sau Khi Bé Smile Được Nhận</h3>
                        <hr class="hr">
                        <p>Sự khác biệt khi em được yêu thương và chăm sóc, từ 12kg lên 19kg...</p>

                    </div>
                </div>
                <a href="#" class="more_Video mt-2">Xem Thêm</a>
            </div>
        </div>
        <FooterHome/>
        <Ontop/>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import FooterHome from '../components/FooterHome.vue'
import Donors from '../components/Donors.vue'
import Ontop from '../components/Ontop.vue'
export default {
  data() {
    return {
        recordPet: 8,
        isLoggedIn: false,
      image: "",
      imgPet: {
          item1 :'https://comic.j.layershift.co.uk/pet/image/',
          item2 :'src/assets/uploads/News/Video1.jpg',
          item3 :'https://comic.j.layershift.co.uk/news/avatar/',
          item4 :'src/assets/uploads/TNV/7bddabcf-f70a-4bf0-9141-c87e67437a47.png'
      },
      settings: {
        "dots": true,
        "dotsClass": "slick-dots custom-dot-class",
        "edgeFriction": 0.35,
        "infinite": false,
        "speed": 500,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "autoplay": true,
        "autoplaySpeed": 1000,
        },
        settings2: {
            "dots": true,
            "infinite": false,
            "speed": 500,
            "slidesToShow": 4,
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
  computed: {
      pets() {
      return this.$store.state.petsHome;
    },
  },
  mounted() {
    this.$store.dispatch("getPetsHome", this.recordPet);
    
  },
  components: {
    VueSlickCarousel,
    FooterHome,
    Donors,
    Ontop
  }
}
</script>

<style>
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
</style>