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
              <input type="text" v-model="searchPet" v-on:keyup="searchPets" placeholder="Tìm Thú Nuôi Theo ID..." class="form-control">
              <p v-if="this.$store.state.petRescueId"><b>Đã Chọn</b>: {{this.$store.state.petRescueId.name}}</p>
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
                <ListPetRescueOrder
                  v-for="(petRescueOrder, index) in petRescueOrders.objects"
                  v-bind:key="index"
                  :petRescueOrder="petRescueOrder"
                />
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal" @click="addPetToRescue">Xác Nhận</button>
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
                <ListEmployeeSelect
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
      <button v-if="!selectAdd" @click="changeTab(e)" class="btn btn-info">Thêm Ca Cứu Hộ</button>
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
              <div class="form-group col-md-6">
                <label for="message-text" class="col-form-label">Địa Điểm Giải Cứu</label>
                <input type="text" class="form-control" v-model="form.region" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="message-text" class="col-form-label">Nhân Viên Giải Cứu</label>
                <!-- <select name required v-model="form.employeeDTO.employeeId" class="form-control" id>
                  <option value="1">Nam</option>
                  <option value="2">Nữ</option>
                  <option value="3">Khác</option>
                </select>-->
                <button
                v-if="!this.$store.state.employeeRescue"
                  type="button"
                  class="btn btn-primary ml-5"
                  data-toggle="modal"
                  data-target="#employee"
                >Nhấp Để Chọn Nhân Viên</button>
                <button
                v-else-if="this.$store.state.employeeRescue"
                  type="button"
                  class="btn btn-warning ml-5"
                  data-toggle="modal"
                  data-target="#employee"
                >{{this.$store.state.employeeRescue.name}}</button>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="recipient-name" class="col-form-label">Ngày Giải Cứu</label>

                <DatePicker :mode="mode" v-model="form.dateRescue" />
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
          <th>Địa Chỉ</th>
          <th>Ngày Giải Cứu</th>
          <th>Nhân Viên Giải Cứu</th>
          <th>
            Thú Nuôi Được Giải Cứu
            
          </th>
          <th>Option</th>
         <th></th>
        </tr>
      </thead>
      <tbody>
        <ListRescue v-for="(rescue, index) in rescues.objects" v-bind:key="index" :rescue="rescue" />
    </tbody>    
    </table>
    <Paginate :ob="rescues" @thisPage="getCurPage" />
  </div>
</template>

<script>
import Paginate from '../Paginate.vue'
import Calendar from "v-calendar/lib/components/calendar.umd";
import DatePicker from "v-calendar/lib/components/date-picker.umd";
import ListRescue from "./ListRescue.vue";
import ListEmployeeSelect from "./ListEmployeeSelect.vue";
import ListPetRescueOrder from './ListPetRescueOrder.vue'
export default {
  data() {
    return {
      page: 1,
      searchPet: '',
        searchEmployee:'',
      selectAdd: false,
      addPet: {
        rescueOrderId: null,
        from1: {
          petId: null
        }
      },
      form: {
        content: "",
        region: "",
        dateRescue: "",
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
    onSubmit() {
        this.form.employeeDTO.employeeId = this.$store.state.employeeRescue.id
        let data = JSON.stringify(this.form);
        console.log(this.form)
        this.$store.dispatch("addRescue", data);
    },
    searchEmployees() {
        let datas = {
        id: 2,
        search: this.searchEmployee,
    }
    this.$store.dispatch("getEmployeeDepart", datas);
    },
    getCurPage(data) {
      this.page = data.curPage;
      let pageRecord = {
        page: this.page,
      };
      this.$store.dispatch("getRescue", pageRecord);
    },
    addPetToRescue() {
      this.addPet.from1.petId = this.$store.state.petRescueId.id
      this.addPet.rescueOrderId = this.$store.state.RescueOrderId.rescueOrderId,
      // this.addPet = JSON.stringify(this.addPet);
      console.log(this.addPet)
      this.$store.dispatch("addPetToRescue", this.addPet);
    },
    searchPets() {
      this.$store.dispatch("getPetRescueorder", this.searchPet);
    }
  },
  computed: {
    typeClass() {
      return `${this.$store.state.themes}`;
    },
    rescues() {
      return this.$store.state.rescues;
    },
    employees() {
      return this.$store.state.employeesByDe;
    },
    petRescueOrders() {
      return this.$store.state.petRescueOrder
    }
  },
  created() {
    let data = {
      page: this.page,
     
    };
    let datas = {
        id: 2,
        search: this.searchEmployee,
    }
    this.$store.dispatch("getRescue", data);
    this.$store.dispatch("getEmployeeDepart", datas);
    this.$store.dispatch("getPetRescueorder", this.searchPet);
  },

  components: {
    ListRescue,
    Calendar,
    DatePicker,
    ListEmployeeSelect,
    Paginate,
    ListPetRescueOrder
  },
};
</script>

<style>
</style>