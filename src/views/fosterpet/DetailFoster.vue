<template>
  <div class="mt-3">
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
              <input type="text" v-model="searchEmployee" v-on:keyup.enter="searchEmployees" placeholder="Tìm Nhân Viên..." class="form-control">
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
    <h3>THÔNG TIN GIẢI CHĂM SÓC SỐ {{this.id}}</h3>
    <hr class="hr" />
    <h4 class="text-left">
      <i style="color:#ff9f1a" class="fas fa-info-circle"></i> Thông tin
      <button v-if="tabSelected" @click="changeTab(e)" class="btn btn-info float-right">Thay Đổi</button>
      <button v-else-if="!tabSelected" @click="changeTab(e)" class="btn btn-danger float-right">Hủy</button>
    </h4>

    <table v-if="tabSelected" class="table table-hover mt-3" :class="typeClass">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nội Dung</th>
          <th>Ngày Bắt Đầu</th>
          <th>Nhân Viên Chăm Sóc</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{this.id}}</td>
          <td>{{fosters.content}}</td>
          <td>{{new Date(fosters.fosterDate).toDateString()}}</td>
          <td>{{fosters.employeeDTO.fullName}}</td>
        </tr>
      </tbody>
    </table>
    <table v-if="!tabSelected" class="table table-hover mt-3" :class="typeClass">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nội Dung</th>
          <th>Ngày Nhận</th>
          <th>Nhân Viên Chăm Sóc</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{this.id}}</td>
          <td><textarea v-model="form.content" class="form-control"></textarea></td>
          <td><DatePicker :mode="mode" v-model="form.dateRescue"/></td>
          <td><button
                v-if="!this.$store.state.selectEmployeeFoster"
                  type="button"
                  class="btn btn-primary ml-5"
                  data-toggle="modal"
                  data-target="#employee"
                >Nhấp Để Chọn Nhân Viên</button>
                <button
                v-if="this.$store.state.selectEmployeeFoster"
                  type="button"
                  class="btn btn-primary ml-5"
                  data-toggle="modal"
                  data-target="#employee"
                >{{this.$store.state.selectEmployeeFoster.name}}</button>        
        </td>
        </tr>
      </tbody>
      <button @click.prevent="updateRescue" class="btn btn-info float-right">Xác Nhận Sửa</button>
    </table>
    <hr class="hr" />
    <h4 class="text-left mt-4 m-b">
      <i style="color:#32ff7e" class="fas fa-list"></i> Danh sách các Bé được chăm sóc
    </h4>
    <table class="table table-hover" :class="typeClass">
      <thead>
        <tr>
          <th>ID</th>
          <th>Hình Ảnh</th>
          <th>Tên</th>
          <th>Giống</th>
          <th>Giới Tính</th>
          <th>Option</th>
        </tr>
      </thead>
      <tbody>
        <!-- <ListRescue v-for="(rescue, index) in rescues.objects" v-bind:key="index" :rescue="rescue" /> -->
        <tr v-for="infoPet in fosters.petDTOS" :key="infoPet.petId">
          <td>{{infoPet.petId}}</td>
          <td>
            <img
              class="img_ListUser"
              v-bind:src="'https://petadoption.j.layershift.co.uk/pet/image/' + infoPet.image"
            />
          </td>
          <td>{{infoPet.petName}}</td>
          <td>{{infoPet.breed}}</td>
          <td>{{infoPet.gender}}</td>
          <td>
            
            <button class="btn btn-sm btn-danger" @click="deletePet(infoPet.petId)">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Calendar from "v-calendar/lib/components/calendar.umd";
import DatePicker from "v-calendar/lib/components/date-picker.umd";
import ListEmployeeFoster from "./ListEmployeeFoster.vue";
export default {
  props: ["id"],
  data() {
    return {
        searchEmployee: '',
      tabSelected: true,
      form: {
        fosterPetId: this.id,
        content: this.$store.state.detailFoster.content,
        fosterDate: this.$store.state.detailFoster.fosterDate,
        employeeDTO: {
          employeeId: 1,
        },
      },
      deletePetTo: {
        fosterPetId: this.id,
        form1: {
          petId: null
        }
      }
    };
  },
  methods: {
    changeTab(e) {
      this.tabSelected = !this.tabSelected;
    },
    searchEmployees() {
        let datas = {
        id: 2,
        search: this.searchEmployee,
    }
    this.$store.dispatch("getEmployeeDepart", datas);
    },
    updateRescue() {
        this.form.employeeDTO.employeeId = this.$store.state.selectEmployeeFoster.id
        this.$store.dispatch("updateFoster", this.form);
        this.tabSelected = !this.tabSelected;
    },
    deletePet(id) {
      this.deletePetTo.form1.petId = id
      console.log(this.deletePetTo.form1.petId)
      this.$store.dispatch("deletePetFoster", this.deletePetTo);
    }
  },
  computed: {
    typeClass() {
      return `${this.$store.state.themes}`;
    },
    fosters() {
      return this.$store.state.detailFoster;
    },
    employees() {
      return this.$store.state.employeeFoster;
    },
  },
  created() {
      let datas = {
        id: 1,
        search: this.searchEmployee,
    }
    this.$store.dispatch("getEmployeeFoster", datas);
    this.$store.dispatch("getDetailFoster", this.id);
  },
  components: {
      Calendar,
      DatePicker,
      ListEmployeeFoster
  }
};
</script>

<style>
.img_ListUser {
  width: 50px;
  height: 50px;
  border: 1px;
  border-radius: 50%;
}
</style>