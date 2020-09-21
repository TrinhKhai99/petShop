<template>
  <div>
    <div class="box_Option">
      <form>
        <input
          type="text"
          v-model="searchEmployee"
          v-on:keyup="searchEmployeeById"
          class="form-control form-control-sm"
          placeholder="Tìm kiếm theo ID"
          style="width: 200px"
        />
      </form>
      <!-- <select @change="selectRecord" class="form-control form-control-sm" style="width: 100px">
        <option selected value="4">4</option>
        <option value="8">8</option>
        <option value="12">12</option>
      </select>-->
      <!-- <select
        @change="selectnewsCategory"
        v-model="selectCategory"
        class="form-control form-control-sm"
        style="width: 100px"
      >
        <option selected value>Tất cả</option>
        <option value="1">Kiến thức chăn nuôi</option>
        <option value="2">Dễ Thương</option>
        <option value="3">Góc yêu thương</option>
        <option value="4">Hoạt Động tình nguyện</option>
        <option value="5">Quá trình cứu hộ</option>
        <option value="6">Tin Tức và sự kiện</option>
      </select>-->
      <button
        type="button"
        class="btn btn-primary float-right mb-3"
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@mdo"
        v-if="!close"
        @click="!selectAddNews(e)"
      >Thêm Nhân Viên</button>
      <button
        type="button"
        class="btn btn-danger float-right mb-3"
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@mdo"
        v-else-if="close"
        @click="selectAddNews(e)"
      >Đóng</button>
    </div>
    <transition name="list">
      <div v-show="selectAdd" class="row">
        <div class="col-md-10 ml-5 mb-5">
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="recipient-name" class="col-form-label">Họ và tên:</label>
                <input
                  type="text"
                  required
                  v-model="form.fullName"
                  class="form-control"
                  id="recipient-name"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="message-text" class="col-form-label">Họ</label>
                <input type="text" class="form-control" v-model="form.firstName" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="message-text" class="col-form-label">Tên:</label>
                <input
                  class="form-control"
                  type="text"
                  required
                  v-model="form.lastName"
                  id="message-text"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="message-text" class="col-form-label">Giới tính</label>
                <select name required v-model="form.gender" class="form-control" id>
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                  <option value="Khác">Khác</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="recipient-name" class="col-form-label">Ngày Sinh</label>
                
                <DatePicker
                    :mode="mode"
                    v-model="form.birthday"
                  />
              </div>
              <div class="form-group col-md-6">
                <label for="message-text" class="col-form-label">Số điện thoại</label>
                <input type="text" class="form-control" v-model="form.phoneNumber" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="recipient-name" class="col-form-label">Ngày làm việc</label>
                <DatePicker
                    :mode="mode"
                    v-model="form.joinDate"
                  />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="recipient-name" class="col-form-label">Địa chỉ</label>
                <input
                  type="text"
                  required
                  v-model="form.address"
                  class="form-control"
                  id="recipient-name"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="message-text" class="col-form-label">Thường trú</label>
                <input type="text" class="form-control" v-model="form.region" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="message-text" class="col-form-label">Chức Vụ:</label>
                <select name v-model="form.departmentDTO.departmentId" class="form-control" id>
                  <option
                    v-for="department in departments"
                    :key="department.departmentId"
                    :value="department.departmentId"
                  >{{department.name}}</option>
                </select>
              </div>
            </div>
            <button @click.prevent="onSubmit" class="btn btn-primary">Thêm Nhân Viên</button>
          </form>
        </div>
      </div>
    </transition>
    <table class="table table-hover" :class="typeClass">
      <thead>
        <tr>
          <th>ID</th>
          <th>Họ và Tên</th>
          <th>Số điện thoại</th>
          <th>Giới tính</th>
          <th>Ngày sinh</th>
          <th>Được nhận vào</th>
          <th>Thường trú</th>
          <th>Chức vụ</th>
          <th>Option</th>
        </tr>
      </thead>
       <tbody v-if="(employees.objects).length == 0">
        <tr>
          <td colspan="9"><i style="color:red; font-size: 1.1rem" class="fas fa-exclamation-triangle"></i> Không tìm thấy kết quả</td>
        </tr>
      </tbody>
      <tbody>
        <ListEmployee
          v-for="(employee, index) in employees.objects"
          v-bind:key="index"
          :employee="employee"
        />
      </tbody>
    </table>
    <Paginate :ob="employees" @thisPage="getCurPage" />
  </div>
</template>
<script>
import Calendar from "v-calendar/lib/components/calendar.umd";
import DatePicker from "v-calendar/lib/components/date-picker.umd";
import ListEmployee from "./ListEmployee";
import Paginate from '../Paginate.vue'
// import ListUser from "./ListUser";
import mapState from "vuex";
export default {
  data() {
    return {
      searchEmployee: '',
      page: 1,
      mode: "single",
      selectAdd: false,
      close: false,
      form: {
        fullName: "",
        firstName: "",
        lastName: "",
        address: "",
        region: "",
        gender: "",
        birthday: "",
        phoneNumber: "",
        joinDate: "",
        departmentDTO: {
          departmentId: 1,
        },
      },
    };
  },
  methods: {
    selectAddNews() {
      this.selectAdd = !this.selectAdd;
      this.close = !this.close;
    },
    onSubmit() {
      let data = JSON.stringify(this.form);
      console.log(this.form);
      this.$store.dispatch("addEmployee", data);
      this.close = !this.close;
    },
    getCurPage(data) {
      this.page = data.curPage;
      let datas = {
        search: this.searchEmployee,
        page: this.page
      }
      this.$store.dispatch("getEmployee", datas);
    },
    searchEmployeeById() {
      let data = {
        search: this.searchEmployee,
        page: this.page
      }
      this.$store.dispatch("getEmployee", data);
    }
  },
  computed: {
    employees() {
      return this.$store.state.employees;
    },
    departments() {
      return this.$store.state.department;
    },
    typeClass() {
      return `${this.$store.state.themes}`;
    },
  },
  created() {
    let data = {
        search: this.searchEmployee,
        page: this.page
      }
    this.$store.dispatch("getEmployee", data);
    this.$store.dispatch("getDepartment");
  },
  components: {
    ListEmployee,
    Calendar,
    DatePicker,
    Paginate
  },
};
</script>

<style>
.box_Option {
  display: flex;
  justify-content: space-around;
}
</style>