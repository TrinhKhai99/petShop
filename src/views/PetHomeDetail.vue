<template>
  <div>
    <div
      class="row adopt no-gutter"
      style="background-image: url('src/assets/uploads/PetHomeDetail/jumbotron.jpg')"
    >
      <div class="bg-over"></div>
      <div class="box_Adopt">
        <h2>Thông Tin Từng Boss</h2>
        <div class="box_Adopt-Item">
          <a href="#">Trang Chủ</a> >
          <a href="#">Tất Cả Các Bé</a> >
          <span>Thông Tin Từng Boss</span>
        </div>
      </div>
    </div>
    <div class="row no-gutter pet_Info">
      <div class="col-md-5 img_PetHome">
        <img :src="'https://petadoption.j.layershift.co.uk/pet/image/' + pets.image" alt />
      </div>
      <div class="col-md-7 pet_Content">
        <div class="petName">{{ pets.petName }}</div>
        <hr class="hr" />
        <div class>
          <b>Giống</b>
          : {{pets.breed}}
        </div>
        <hr class="hr" />
        <div>
          <b>Màu sắc</b>
          : {{pets.color}}
        </div>
        <hr class="hr" />
        <div>
          <b>Tuổi</b>
          : {{pets.age}} tháng
        </div>
        <hr class="hr" />
        <div>
          <b>Cân nặng</b>
          : {{pets.weight}}kg
        </div>
        <hr class="hr" />
        <div>
          <b>Giới tính</b>
          : {{pets.gender}}
        </div>
        <hr class="hr" />
        <div>
          <b>Mã</b>
          : {{pets.petId }}
        </div>
      </div>
    </div>
    <div class="mt-5 mb-5 btn_gr">
      <div class>
        <button type="button" @click="changeTab('rq')" class="btn btn-primary btn_Adopt" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">NHẬN NUÔI</button>
<!-- <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Gửi Yêu Cầu Nhận Nuôi</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body text-justify">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Họ và Tên:</label>
            <input type="text" v-model="requestPet.fullName" class="form-control" id="recipient-name">
          </div>
          <div class="form-group">
            <label for="recipient-phone" class="col-form-label">Số Điện Thoại:</label>
            <input type="text" v-model="requestPet.phoneNumber" class="form-control" id="recipient-phone">
          </div>
          <div class="form-group">
            <label for="recipient-address" class="col-form-label">Địa Chỉ:</label>
            <input type="text" v-model="requestPet.address" class="form-control" id="recipient-address">
          </div>
          <div class="form-group">
            <label for="message-content" class="col-form-label">Tin Nhắn:</label>
            <textarea class="form-control" v-model="requestPet.content" id="message-content"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Huỷ</button>
        <button type="button" @click="checkForm" class="btn btn-primary" data-dismiss="modal">Gửi Yêu Cầu</button>
      </div>
    </div>
  </div>
</div> -->
      </div>
      <div class>
        <button class="btn btn-primary btn_MoreInfo">THÊM THÔNG TIN</button>
      </div>
    </div>
    <transition name="list">
    <div v-show="tabSelected == true" class="row no-gutter pet_Info text-justify">
      
      <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label  for="inputEmail4" >Họ và Tên</label>
      <input v-model="requestPet.fullName" required='' type="text" class="form-control">
    </div>
    <div class="form-group col-md-6">
      <label for="" required>Số Điện Thoại</label>
      <input v-model="requestPet.phoneNumber" type="text" class="form-control">
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress" >Địa Chỉ</label>
    <input v-model="requestPet.address" required='' type="text" class="form-control" >
  </div>
  <div class="form-group">
    <label for="inputAddress2">Nội Dung</label>
    <input v-model="requestPet.content" type="text" class="form-control" >
  </div>
  <button type="submit" class="btn btn-primary" @click="checkForm">Gửi Yêu Cầu</button>
</form>
    </div>
    </transition>
    <div class="row no-gutter pet_Gender">
      <h3 class="col-md-12">Thông Tin</h3>
      <hr class="hr" />
    </div>
    <div class="row mb-4 no-gutter pet_Gender text">
      <div class="col-md-3 info_BoxItem">
        <div>Triệt sản
          <span v-if="pets.petAboutDTO.sterilization =='không'">
            <i class="far fa-times-circle x"></i>
          </span>
          <span v-else-if="pets.petAboutDTO.sterilization =='có'">
            <i class="fas fa-check-circle v"></i>
          </span>
        </div>
        <div class="mt-3 mb-3">Tiêm dại 
          <span v-if="pets.petAboutDTO.inject_rabies =='không'">
            <i class="far fa-times-circle x"></i>
          </span>
          <span v-else-if="pets.petAboutDTO.inject_rabies =='có'">
            <i class="fas fa-check-circle v"></i>
          </span>
          </div>
          
        <div>Tiêm phòng bệnh
          <span v-if="pets.petAboutDTO.vaccination =='không'">
            <i class="far fa-times-circle x"></i>
          </span>
          <span v-else-if="pets.petAboutDTO.vaccination =='có'">
            <i class="fas fa-check-circle v"></i>
          </span>
        </div>
      </div>
      <div class="col-md-3 info_BoxItem">
        <div>Thân thiện với con người
          <span v-if="pets.petAboutDTO.friendly_people =='không'">
            <i class="far fa-times-circle x"></i>
          </span>
          <span v-else-if="pets.petAboutDTO.friendly_people =='có'">
            <i class="fas fa-check-circle v"></i>
          </span>
        </div>
        <div class="mt-3 mb-3">Thân thiện với chó
          <span v-if="pets.petAboutDTO.friendly_dog =='không'">
            <i class="far fa-times-circle x"></i>
          </span>
          <span v-else-if="pets.petAboutDTO.friendly_dog =='có'">
            <i class="fas fa-check-circle v"></i>
          </span>
        </div>
        <div>Thân thiện với mèo
          <span v-if="pets.petAboutDTO.friendly_cat =='không'">
            <i class="far fa-times-circle x"></i>
          </span>
          <span v-else-if="pets.petAboutDTO.friendly_cat =='có'">
            <i class="fas fa-check-circle v"></i>
          </span>
        </div>
      </div>
      <div class="col-md-3 info_BoxItem">
        <div>
          
        </div>
        <div class="mt-3 mb-3">Đi vệ sinh đúng chỗ
          <span v-if="pets.petAboutDTO.toilet_place =='không'">
            <i class="far fa-times-circle x"></i>
          </span>
          <span v-else-if="pets.petAboutDTO.toilet_place =='có'">
            <i class="fas fa-check-circle v"></i>
          </span>
        </div>
      </div>
    </div>
    <div class="row no-gutter pet_More">
      <h3 class="col-md-12">Tìm Hiểu Về Thú Cưng</h3>
      <hr class="hr" />
      <p
        class="text col-md-12"
      >Bé là cái, hơi nhút nhát. Nghiện nhưng khá ngại nên cần thời gian làm quen với người. Ăn uống tốt và đáng yêu xinh đẹp</p>
    </div>
    <div class="row no-gutter pet_Gender">
      <h3 class="col-md-12 text-justify">Thư Viện Ảnh</h3>
      <hr class="hr" />
    </div>
    <div class="row no-gutter pet_Gender">
      <div class="col-md-3 pet_ImgItem">
        <img :src="'https://petadoption.j.layershift.co.uk/pet/image/' + pets.image" alt />
      </div>
      <div class="col-md-3 pet_ImgItem"></div>
      <div class="col-md-3 pet_ImgItem"></div>
      <div class="col-md-3 pet_ImgItem"></div>
    </div>
    <div
      class="row mt-5 no-gutter ready_Donate"
      style="background-image: url('src/assets/uploads/Mix/ready-to-support.jpg')"
    >
      <div class="bg-over"></div>
      <div class="content_Donate">
        <h2>Bạn Đã Sẵn Sàng Giúp Đỡ?</h2>
        <a href="#" class="donate">Ủng Hộ Ngay</a>
      </div>
    </div>
    <ProcessAdopt/>
    <div class="row no-gutter _padding_Pet">
            <div class="col-md-12 pc_Pet">
                <div class="pet">
                    <h2>CÁC BÉ KHÁC</h2>
                    <p class="icon_Pet"><i class="fas fa-paw"></i></p>
                    <VueSlickCarousel v-bind="settings2">
                            <div v-for="pet in petss.objects" :key="pet.petId" class="carousel-cell box_Pet_Item">
                                
                                <div class="img_Pet" v-bind:style='{ backgroundImage: "url(" + imgPet.item1 + pet.image +")", }'></div>
                                        <router-link class="name_Pet" :to="{ name: 'PetHomeDetail', params: { id:pet.petId }}">{{pet.petName}}</router-link>
                                        <hr>
                                        <p><b>Giới tính</b> {{ pet.gender }}</p>
                                        <p><b>Tuổi</b>: {{ pet.age }} tháng</p>
                                        <p><b>Tiêm phòng</b>: {{ pet.petAboutDTO.sterilization }}</p>
                                
                            </div>
            </VueSlickCarousel>
                </div>
            </div>
        </div>
        <FakeAdopt/>
        <FooterHome/>
  </div>
</template>

<script>
import FooterHome from '../components/FooterHome.vue'
import FakeAdopt from '../components/FakeAdopt.vue'
import VueSlickCarousel from "vue-slick-carousel";
import ProcessAdopt from '../components/ProcessAdopt.vue'
export default {
  props: ["id"],
  data() {
    return {
      tabSelected: false,
      recordPet: 8,
      requestPet: {
        petDTO: {
            petId: this.id
          },
        content: '',
        fullName: '',
        address: '',
        phoneNumber: ''
      },
      image: "",
      imgPet: {
          item1 :'https://petadoption.j.layershift.co.uk/pet/image/',
          item2 :'src/assets/uploads/News/Video1.jpg',
          item3 :'https://petadoption.j.layershift.co.uk/news/avatar/',
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
    }
  },
  methods: {
      checkForm() {
           let mail = JSON.stringify(this.requestPet);
        this.$store.dispatch("rqPet", mail);       
      },
      changeTab(e) {
        this.tabSelected = !this.tabSelected;
      }
  },
  computed: {
    pets() {
      return this.$store.state.pet_home;
    },
    petss() {
      return this.$store.state.petsHome;
    },
  },
  mounted() {
    this.$store.dispatch("getPetHome", this.id);
    this.$store.dispatch("getPetsHome", this.recordPet);
  },
  components: {
    ProcessAdopt,
    VueSlickCarousel,
    FakeAdopt,
    FooterHome
  }
};
</script>

<style scoped>
.pet_Info {
  padding: 20px 150px;
}
.pet_Gender {
  padding: 20px 150px;
  text-align: justify;
}
.img_PetHome {
  width: 438px;
  height: 438px;
}
.info_BoxItem {
  font-size: 1.1rem;
  font-weight: 500;
}
.pet_More {
  text-align: justify;
  padding: 0 150px;
}
.pet_More p {
  font-size: 1.4rem;
}

.text {
  color: #856f6f;
}
.img_PetHome img {
  width: 100%;
  height: 100%;
}
.pet_ImgItem {
  width: 258px;
  height: 258px;
  overflow: hidden;
}
.pet_ImgItem img {
  width: 100%;
  height: 100%;
}
.pet_ImgItem img:hover {
  transform: scale(1.1);
  transition: 0.3s all ease-in-out;
}
.pet_Content {
  text-align: justify;
  padding: 0 0 0 100px;
}
.pet_Content div {
  font-size: 1.3rem;
}
.petName {
  font-size: 1.8rem !important;
  font-weight: bold;
}
.btn_gr {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.btn_gr button {
  border: 1px;
  border-radius: 20px !important;
  padding: 8px 20px;
  font-weight: bold;
  font-size: 1.2rem;
}
.btn_Adopt:hover {
  background-color: #d61c62 !important;
}
.btn_MoreInfo:hover {
  background-color: #d61c62;
}
.btn_MoreInfo {
  background-color: #ffcc00;
}
._padding_Pet {
  overflow: hidden;
}
.x {
  color: red;
  font-weight: bold;
  margin-left: 10px;
}
.v {
  color: green;
  font-weight: bold;
  margin-left: 10px;
}
</style>>