<template>
  <div>
    <div class="box_Option">
      <select @change="findStatus" class="form-control form-control-sm" style="width: 150px">
        <option selected value="">Tất cả</option>
        <option v-for="petStatusType in petStatusTypes" :value="petStatusType.petStatusTypeId" :key="petStatusType.petStatusTypeId" >{{petStatusType.name}}</option>
      </select>
      <select @change="ChangeTabSelect($event)" class="form-control form-control-sm" style="width: 150px">
        <option value="1">Tìm Theo Tên</option>
        <option value="2">Tìm Theo ID</option>
      </select>
      <form v-if="tabSelected != 2">
        <input
          type="text"
          v-model="searchPetsValue"
          v-on:keyup="searchPets"
          class="form-control form-control-sm"
          placeholder="Tìm kiếm Theo Tên"
          style="width: 150px"
        />
      </form>
      <form v-else-if="tabSelected != 1">
        <input
          type="text"
          v-model.number="searchPetsByID"
          v-on:keyup="searchPetsById"
          class="form-control form-control-sm"
          placeholder="Tìm kiếm Theo ID"
          style="width: 150px"
        />
      </form>
      <select @change="selectRecord" class="form-control form-control-sm" style="width: 100px">
        <option selected value="4">4</option>
        <option value="8">8</option>
        <option value="12">12</option>
      </select>
      <button
        type="button"
        class="btn btn-primary float-right mb-3"
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@mdo"
        v-if="close"
        @click="selectAddPet(e)"
      >Thêm Thú Nuôi</button>
      <button
        type="button"
        class="btn btn-danger float-right mb-3"
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@mdo"
        v-else-if="!close"
        @click="selectAddPet(e)"
      >Đóng</button>
    </div>
    <transition name="list">
    <div v-show="selectAdd" class="row no-gutter text-justify addPet">
      <div class="col-md-10">
      <form>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">Tên thú cưng:</label>
                <input type="text" v-model="form.petName" class="form-control" id="recipient-name" />
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Hình ảnh:</label>
                <input type="file" @change="uploadFiles" style="display:none" ref="getImagePet"  class="form-control" />
                
                <p><button v-on:click="getImagePet" class="btn btn-info">Nhấp để chọn Ảnh</button></p>
                <div id="preview">
                   <img v-if="url" :src="url" />
                </div>
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Mô tả:</label>
                <textarea class="form-control" v-model="form.description" id="message-text"></textarea>
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Cân nặng(kg):</label>
                <input type="number" class="form-control" v-model="form.weight" id="message-text" />
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Tuổi:</label>
                <select name v-model="form.age" class="form-control" id>
                  <option value="3">3 tháng</option>
                  <option value="6">6 tháng</option>
                  <option value="6">6-18 tháng</option>
                  <option value="18-36">18-36 tháng</option>
                  <option value="0">Chưa rõ</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Địa chỉ:</label>
                <input type="text" class="form-control" v-model="form.address" id="message-text" />
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Màu sắc:</label>
                <select name v-model="form.color" class="form-control" id>
                  <option value="Đen">Đen</option>
                  <option value="Trắng">Trắng</option>
                  <option value="Vàng">Vàng</option>
                  <option value="Mướp">Mướp</option>
                  <option value="Xám">Xám</option>
                  <option value="Xiêm">Xiêm</option>
                  <option value="Đen trắng">Đen trắng</option>
                  <option value="Trắng vàng">Trắng vàng</option>
                  <option value="Tam thể">Tam thể</option>
                  <option value="Nhị thể">Nhị thể</option>
                  <option value="Nâu vàng">Nâu vàng</option>
                  <option value="Đen vàng<">Đen vàng</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Giống:</label>
                <input type="text" class="form-control" v-model="form.breed" id="message-text" />
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Giới tính:</label>
                <select name class="form-control" v-model="form.gender" id>
                  <option value="Đực">Đực</option>
                  <option value="Cái">Cái</option>
                  <option value="Triệt sản">Triệt sản</option>
                  <option value="Chưa rõ">Chưa rõ</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Loại Pet:</label>
                <select name v-model="form.petTypeDTO.petTypeId" class="form-control" id>
                  <option value="1">Chó</option>
                  <option value="2">Mèo</option>
                  <option value="3">Khác</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Lý do được được giải cứu:</label>
                 <select v-model="form.petEntryTypeDTO.petEntryTypeId" class="form-control form-control-sm" style="width: 150px">
                  <option v-for="petEntryType in petEntryTypes" :value="petEntryType.petEntryTypeId" :key="petEntryType.petEntryTypeId" >{{petEntryType.name}}</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Ngày Được Nhận Nuôi:</label>
                 <DatePicker
                    :mode="mode"
                    v-model="form.entryDate"
                  />
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Trạng thái sức khỏe:</label>
                 <select v-model="form.petEntryStatusDTO.petEntryStatusId" class="form-control form-control-sm" style="width: 150px">
                  <option v-for="petEntryStatus in petEntryStatuss" :value="petEntryStatus.petEntryStatusId" :key="petEntryStatus.petEntryStatusId" >{{petEntryStatus.name}}</option>
                  <p>{{petEntryStatuss}}</p>
                </select>
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Khử trùng:</label>
                <select name v-model="form.petAboutDTO.sterilization" class="form-control" id>
                  <option value="có">Có</option>
                  <option value="không">Không</option>
                  <option value="Chưa rõ">Chưa rõ</option>
                </select>
              </div>
  <div class="form-group">
                <label for="message-text" class="col-form-label">Tiêm phòng:</label>
                <select name v-model="form.petAboutDTO.inject_rabies" class="form-control" id>
                  <option value="có">Có</option>
                  <option value="không">Không</option>
                  <option value="Chưa rõ">Chưa rõ</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Tiêm dại:</label>
                <select name v-model="form.petAboutDTO.vaccination" class="form-control" id>
                  <option value="có">Có</option>
                  <option value="không">Không</option>
                  <option value="Chưa rõ">Chưa rõ</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Thân thiện với người?:</label>
                <select name v-model="form.petAboutDTO.friendly_people" class="form-control" id>
                  <option value="có">Có</option>
                  <option value="không">Không</option>
                  <option value="Chưa rõ">Chưa rõ</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Thân thiện với mèo?:</label>
                <select name v-model="form.petAboutDTO.friendly_cat" class="form-control" id>
                  <option value="có">Có</option>
                  <option value="không">Không</option>
                  <option value="Chưa rõ">Chưa rõ</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Thân thiện với chó?:</label>
                <select name v-model="form.petAboutDTO.friendly_dog" class="form-control" id>
                  <option value="có">Có</option>
                  <option value="không">Không</option>
                  <option value="Chưa rõ">Chưa rõ</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Đi vệ sinh đúng chỗ?:</label>
                <select name v-model="form.petAboutDTO.toilet_place" class="form-control" id>
                  <option value="có">Có</option>
                  <option value="không">Không</option>
                  <option value="Chưa rõ">Chưa rõ</option>
                </select>
                <input type="submit" style="display:none" ref="submitForm" />
              </div>
  <button @click="onSubmit" class="btn btn-primary">Thêm</button>
</form>
</div>
    </div>
    </transition>
    <transition name="list">
    <table :class="typeClass" class="table table-bordered table-hover table-Light">
      <thead>
        <tr>
          <th>ID</th>
          <th>Tên thú cưng</th>
          <th>Cân nặng</th>
          <th>Tuổi</th>
          <th> Màu</th>
          <th>Giống</th>
          <th>Giới tính</th>
          <th>Ngày nhận nuôi</th>
          <th>Ảnh</th>
          <th>Trạng thái</th>
          <td>Option</td>
        </tr>
      </thead>
      <tbody v-if="(pets.objects).length == 0">
        <tr>
          <td colspan="9"><i style="color:red; font-size: 1.1rem" class="fas fa-exclamation-triangle"></i> Không tìm thấy kết quả</td>
        </tr>
      </tbody>
      <tbody>
        <ListPet v-for="pet in pets.objects" :key="pet.petId" :pet="pet" />
      </tbody>
    </table>
    </transition>
    <Paginate :ob="pets" @thisPage="getCurPage" />
  </div>
</template>

<script>
import Calendar from "v-calendar/lib/components/calendar.umd";
import DatePicker from "v-calendar/lib/components/date-picker.umd";
import ListPet from "./ListPet.vue";
import Paginate from "../Paginate";
import { mapActions } from "vuex";

import axios from "axios";

export default {
  data: function() {
    return {
      mode: "single",
      url: null,
      selectAdd: false,
      close: true,
      findPetStatus:'',
      tabSelected: 1,
      searchPetsByID: '',
      searchPetsValue: '',
      page: 1,
      selectedRecord: 4,
      form: {
        entryDate: null,
        petEntryTypeDTO: {
          petEntryTypeId: null
        },
        petEntryStatusDTO: {
          petEntryStatusId: null
        },
        petName: "",
        image: null,
        description: "",
        weight: 5,
        age: 3,
        address: "",
        color: null,
        breed: "",
        gender: null,
        petTypeDTO: {
          petTypeId: 1
        },
        petAboutDTO: {
          sterilization: null,
          inject_rabies: null,
          vaccination: null,
          friendly_people: null,
          friendly_cat: null,
          friendly_dog: null,
          toilet_place: null
        }
      }
    };
  },
  methods: {
    ChangeTabSelect(e) {
        this.tabSelected = e.target.value;
        console.log(this.tabSelected)
    },
    selectAddPet(e) {
      this.selectAdd = !this.selectAdd
      this.close = !this.close
    },
    searchPets() {
        this.$store.dispatch("getResultPets", this.searchPetsValue);
    },
    searchPetsById() {
        this.$store.dispatch("getResultPetsById", this.searchPetsByID);
    },
    getImagePet(e) {
      this.$refs.getImagePet.click();
    },
    uploadFiles(event) {
      console.log(event);
      const uRL = "https://petadoption.j.layershift.co.uk/admin/pet/image/";
      const file = event.target.files[0];
      this.url = URL.createObjectURL(file);
      let data = new FormData();
      data.append("name", "my-picture");
      data.append("file", event.target.files[0]);

      let config = {
        header: {
          "Content-Type": "multipart/form-data"
        }
      };

      axios.post(uRL, data, config).then(response => {
        // console.log("image upload response > ", response.data.urlFile);
        this.form.image = response.data.file;
        console.log(this.form.image);
      });
    },
    // ...mapActions(['addPet']),
    onSubmit() {
      let data = JSON.stringify(this.form);
      this.$store.dispatch("addPet", data);
    },
    submitForm(e) {
      this.$refs.submitForm.click();
    },
    selectRecord(e) {
      this.selectedRecord = e.target.value;
      this.$store.dispatch("setRecord", this.selectedRecord);
    },
    findStatus (e) {
      this.findPetStatus = e.target.value;
      this.$store.dispatch("setPetsStatus", this.findPetStatus);
    },
     getCurPage(data) {
      // this.selectedRecord = this.$store.state.record
      // console.log("record =", selectedRecord)
      this.page = data.curPage;
      console.log(" Page hiện tại =", this.page);
      let pageRecord = {
        page: this.page,
        record: this.selectedRecord
      };
      this.$store.dispatch("getPage", pageRecord);
    },
  },
  computed: {
    pets() {
      return this.$store.state.pets;
    },
    typeClass() {
      return `${this.$store.state.themes}`
    },
    petStatusTypes() {
        return this.$store.state.petStatusType
    },
    petEntryTypes() {
      return this.$store.state.petEntryType
    },
    petEntryStatuss() {
      return this.$store.state.petEntryStatus
    }
  },
   created() {
    this.$store.dispatch("isLoading")
    let data = {
      page: this.page,
      record: this.selectedRecord,
      search: this.searchPetsValue,
      searchById: this.searchPetsByID,
      status: this.findPetStatus,
    }
   this.$store.dispatch("getPets", data);
    this.$store.dispatch("endLoad")
    this.$store.dispatch("getPetStatusType");
    this.$store.dispatch("getPetEntryType");
    this.$store.dispatch("getPetEntryStatus");
  },
  mounted() {
    
  },
  components: {
    ListPet,
    Paginate,
    Calendar,
    DatePicker
  }
};
</script>

<style scoped>
.box_Option {
  display: flex;
  justify-content: space-around;
}
.addPet {
  margin: 20px 0 40px 130px;
}

</style>