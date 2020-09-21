<template>
  <div>
    <!-- Button trigger modal -->

    <!-- Modal -->
    <div
      class="modal fade"
      id="pet"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Chọn Thú Nuôi</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
              <input type="text" v-model="searchPet" v-on:keyup="searchPets" placeholder="Tìm Thú Nuôi Theo ID" class="form-control">
              <p v-if="this.$store.state.petFosterById"><b>Đã Chọn</b>: {{this.$store.state.petFosterById.name}}</p>
            <table class="table table-hover" :class="typeClass">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tên Thú Nuôi</th>
                  <th>Ảnh</th>
                  <th>Chọn</th>
                </tr>
              </thead>
              <tbody>
                <ListPetFoster
                  v-for="(petFoster, index) in petFosters.objects"
                  v-bind:key="index"
                  :petFoster="petFoster"
                />
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal" @click="addPetToFoster">Xác Nhận</button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="employee"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Chọn Nhân Viên</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
              <input type="text" v-model="searchEmployee" v-on:keyup="searchEmployees" placeholder="Tìm Nhân Viên..." class="form-control">
            <table class="table table-hover" :class="typeClass">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Họ và Tên</th>
                  <th>Chức Vụ</th>
                  <th>Chọn</th>
                </tr>
              </thead>
              <tbody>
                <ListEmployeeFoster
                  v-for="(employee, index) in employees.objects"
                  v-bind:key="index"
                  :employee="employee"
                />
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            
          </div>
        </div>
      </div>
    </div>
    <div class="box_Option mb-5">
      <button v-if="!selectAdd" @click="changeTab(e)" class="btn btn-info">Thêm Ca Chăm Sóc</button>
      <button v-else-if="selectAdd" @click="changeTab(e)" class="btn btn-danger">Hủy</button>
    </div>
    <transition name="list">
      <div v-show="selectAdd" class="row">
        <div class="col-md-10 ml-5 mb-5">
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="recipient-name" class="col-form-label">Nội Dung:</label>
                <input
                  type="text"
                  required
                  v-model="form.content"
                  class="form-control"
                  id="recipient-name"
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="message-text" class="col-form-label">Nhân Viên Chăm Sóc</label>
                <button
                v-if="!this.$store.state.selectEmployeeFoster"
                  type="button"
                  class="btn btn-primary ml-5"
                  data-toggle="modal"
                  data-target="#employee"
                >Nhấp Để Chọn Nhân Viên</button>
                <button
                v-else-if="this.$store.state.selectEmployeeFoster"
                  type="button"
                  class="btn btn-warning ml-5"
                  data-toggle="modal"
                  data-target="#employee"
                >{{this.$store.state.selectEmployeeFoster.name}}</button>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="recipient-name" class="col-form-label">Ngày Chăm Sóc</label>

                <DatePicker :mode="mode" v-model="form.fosterDate" />
              </div>
            </div>
            <button @click.prevent="onSubmit" class="btn btn-primary">Thêm</button>
          </form>
        </div>
      </div>
    </transition>
    <table class="table table-hover" :class="typeClass">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nội Dung</th>
          <th>Ngày Chăm Sóc</th>
          <th>Nhân Viên Chăm Sóc</th>
          <th>Thú Nuôi Chăm Sóc</th>
          
          <th>Option</th>
         <th></th>
        </tr>
      </thead>
      <tbody>
        <ListFoster v-for="(fosterPet, index) in fosterPets.objects" v-bind:key="index" :fosterPet="fosterPet" />
    </tbody>    
    </table>
    <Paginate :ob="fosterPets" @thisPage="getCurPage" />
  </div>
</template>

<script>
import Paginate from '../Paginate.vue'
import Calendar from "v-calendar/lib/components/calendar.umd";
import DatePicker from "v-calendar/lib/components/date-picker.umd";
import ListEmployeeFoster from './ListEmployeeFoster.vue'
import ListPetFoster from './ListPetFoster.vue'
import ListFoster from './ListFosterPet'
export default {
  data() {
    return {
      page: 1,
      searchPet: '',
        searchEmployee:'',
      selectAdd: false,
      addPet: {
        fosterPetId: null,
        from1: {
          petId: null
        }
      },
      form: {
        content: "",
        fosterDate: "",
        employeeDTO: {
          employeeId: '',
        },
        petDTOS: [],
      },
    };
  },
  methods: {
    changeTab(e) {
      this.selectAdd = !this.selectAdd;
    },
    searchPets() {
      this.$store.dispatch("getPetFoster", this.searchPet);
    },
    onSubmit() {
        this.form.employeeDTO.employeeId = this.$store.state.selectEmployeeFoster.id
        let data = JSON.stringify(this.form);
        console.log(this.form)
        this.$store.dispatch("addFoster", data);
    },
    searchEmployees() {
        let datas = {
        id: 2,
        search: this.searchEmployee,
    }
    this.$store.dispatch("getEmployeeFoster", datas);
    },
    getCurPage(data) {
      this.page = data.curPage;
      let pageRecord = {
        page: this.page,
      };
      this.$store.dispatch("getRescue", pageRecord);
    },
    addPetToFoster() {
        console.log(this.$store.state.petFosterById.id)
      this.addPet.from1.petId = this.$store.state.petFosterById.id
      this.addPet.fosterPetId = this.$store.state.fosterBydId.fosterPetId,
      // this.addPet = JSON.stringify(this.addPet);
      console.log(this.addPet)
      this.$store.dispatch("addPetToFoster", this.addPet);
    }
  },
  computed: {
    typeClass() {
      return `${this.$store.state.themes}`;
    },
    fosterPets() {
      return this.$store.state.fosterPet;
    },
    employees() {
      return this.$store.state.employeeFoster;
    },
    petFosters() {
      return this.$store.state.petFoster
    }
  },
  created() {
    let data = {
      page: this.page,
     
    };
    let datas = {
        id: 1,
        search: this.searchEmployee,
    }
    this.$store.dispatch("getFosterPet", data);
    this.$store.dispatch("getEmployeeFoster", datas);
    this.$store.dispatch("getPetFoster", this.searchPet);
  },

  components: {
    Calendar,
    DatePicker,
    ListEmployeeFoster,
    Paginate,
    ListPetFoster,
    ListFoster
  },
};
</script>

<style>
</style>