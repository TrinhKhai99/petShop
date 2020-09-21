<template>

  <div>
    <div
      class="row adopt no-gutter"
      style="background-image: url('src/assets/uploads/nhan-nuoi/nhan-nuoi-online.jpg')"
    >
      <div class="bg-over"></div>
      <div class="box_Adopt">
        <h2>Nhận Nuôi</h2>
        <div class="box_Adopt-Item">
          <a href="#">Trang Chủ</a> >
          <span>Nhận Nuôi</span>
        </div>
      </div>
    </div>
    <ProcessAdopt/>
    <div
      class="row no-gutter all_Adopt"
      style="background-image: url('src/assets/uploads/nhan-nuoi/rescure-process-bg.jpg')"
    >
      <div class="bg-over-Adopt"></div>
      <div class="col-md-8 col-sm-12 all_Adopt_Content">
        <h2>Tất Cả Các Ca Cứu Hộ</h2>
        <p>Tìm hiểu về tất cả các ca cứu hộ, đang nằm viện, ở nhà fos, đã mất, đã được nhận nuôi...</p>
      </div>
      <div class="col-md-4 col-sm-12 all_Adopt_Btn">
        <a href="#" class="btn_All_Adopt">Xem tất cả</a>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 col-md-offset-4 search_Pet">
        <h2>TÌM THÚ CƯNG</h2>
        <p class="icon_Pet">
          <i class="fas fa-paw"></i>
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 btnGr_Search">
        <button @click="getAllPets">Tất cả</button>
        <button @click="getPetDog">Chó</button>
        <button @click="getPetCat">Mèo</button>
        <button @click="getPetOther">Khác</button>
      </div>
    </div>
    <div class="row result_Search">
      <div class="col-md-4 col-sm-6 col-6">
        <span>Giới tính</span>
        <select v-model="form.genderPet" class="form-control mt-2">
          <option value selected>Tất cả</option>
          <option value="Đực">Đực</option>
          <option value="Cái">Cái</option>
          <option valu="Chưa rõ">Chưa rõ</option>
        </select>
      </div>
      <div class="col-md-4 col-sm-6 col-6">
        <span>Độ tuổi</span>
        <select v-model="form.agePet" class="form-control mt-2">
          <option value="">Tất cả</option>
          <option value="5">Trẻ</option>
          <option value="1">Trưởng thành</option>
          <option value=2>Già</option>
        </select>
      </div>
      <div class="col-md-4 col-sm-6 col-6">
        <span>Triệt sản</span>
        <select v-model="form.sterilization" class="form-control mt-2">
          <option value>Tất cả</option>
          <option value="Có">Có</option>
          <option value="Không">Không</option>
          <option value="Chưa rõ">Chưa rõ</option>
        </select>
      </div>
      <div class="col-md-4 col-sm-6 col-6">
        <span>Màu</span>
        <select v-model="form.color" class="form-control mt-2">
          <option value="">Tất cả</option>
          <option value="Đen">Đen</option>
          <option value="Trắng">Trắng</option>
          <option value="Trắng vàng">Trắng vàng</option>
          <option value="Đen">Đen</option>
          <option value="Vàng">Vàng</option>
          <option value="Mướp">Mướp</option>
          <option value="Tam thể">Tam thể</option>
          <option value="Nhị thể">Nhị thể</option>
        </select>
      </div>
      <div class="col-md-4 col-sm-6 col-6">
        <span>Tên</span>
        <input type="text" v-model="form.namePet" class="form-control mt-2" />
      </div>
      <div class="col-md-4 col-sm-6 col-6 btn_SearchPet mt-2">
        <button @click="getResultSearch">TÌM KIẾM</button>
      </div>
      <div class="text-center mt-5 mb-4" v-if="(pets.objects).length == 0">
        <h3><i style="color:red" class="fas fa-exclamation-triangle"></i> Không tìm thấy kết quả</h3>
      </div>
      <div v-for="pet in pets.objects" :key="pet.petId" class="col-6 col-md-3 result_PetItem">
        <div  class="box_result_PetItem">
          <div
            class="img_ResultPet"
            v-bind:style='{ backgroundImage: "url(" + imgPet.item1 + pet.image +")", }'
          ></div>
          <div class="content_ProfPet">
            <h3><router-link class="name_Pet" :to="{ name: 'PetHomeDetail', params: { id:pet.petId }}">{{pet.petName}}</router-link></h3>
            <hr class="hr" />
            <p>
              <b>Giới tính</b> : {{ pet.gender }}
            </p>
            <p>
              <b>Tuổi</b>: {{ pet.age }} tháng
            </p>
            <p>
              <b>Tiêm phòng</b>: {{ pet.petAboutDTO.sterilization }}
            </p>
          </div>
        </div>
      </div>
      <div class="result_Page"></div>
    </div>
    <FakeAdopt/>
    <FooterHome/>
    <Ontop/>
  </div>
</template>

<script>
import FakeAdopt from '../components/FakeAdopt.vue'
import ProcessAdopt from '../components/ProcessAdopt.vue'
import FooterHome from '../components/FooterHome.vue'
import Ontop from '../components/Ontop.vue'
export default {
  data() {
    return {
      form : {
          genderPet: '',
          agePet: '',
          sterilization: '',
          color: '',
          namePet: '',
          petDog: 1,
          petCat: 2,
          petOther: null,
          record: 10,
      },
      recordPet: 16,
      imgPet: {
          item1 :'https://comic.j.layershift.co.uk/pet/image/',
          item2 :'src/assets/uploads/News/Video1.jpg',
          item3 :'https://comic.j.layershift.co.uk/news/avatar/',
      },
    };
  },
  methods: {},
  computed: {
    pets() {
      return this.$store.state.petsHome;
    },
    check_null() {
      return this.$store.state.checkNull;
    }
  },
  methods: {
      getPetDog() {
        this.$store.dispatch("getPetDog",  this.recordPet);
      },
      getPetCat() {
        this.$store.dispatch("getPetCat",  this.recordPet);
      },
      getPetOther() {
        this.$store.dispatch("getPetOther",  this.recordPet);
      },
      getResultSearch() {
        this.$store.dispatch("getResultSearchAdopt",  this.form);
      },
      getAllPets () {
        this.$store.dispatch("getPetsHome", this.recordPet);
      }
  },
  mounted() {
    this.$store.dispatch("getPetsHome", this.recordPet);
  },
   components: {
        ProcessAdopt,
        FakeAdopt,
        FooterHome,
        Ontop
    }
};
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