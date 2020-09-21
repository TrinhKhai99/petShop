<template>
  <div >
    <!-- <div class="col-md-12">
      <button v-if="close" @click="UpdateEmployee" class="btn btn-info float-right">Sửa Thông Tin</button>
      <button v-else-if="!close" @click="UpdateEmployee" class="btn btn-danger float-right">Hủy</button>
    </div>
    <div v-if="!isUpdate" class="col-md-12 mt-4">
      <h3 class="mb-5">THÔNG TIN NHÂN VIÊN</h3>
      <p>
        <b>Tên Nhân Viên:</b>
        {{employees.fullName}}
      </p>
      <p>
        <b>Họ:</b>
        {{employees.firstName}}
      </p>
      <p>
        <b>Tên:</b>
        {{employees.lastName}}
      </p>
      <p>
        <b>Giới Tính:</b>
        {{employees.gender}}
      </p>
      <p>
        <b>Sinh Nhật:</b>
        {{new Date(employees.birthday).toDateString()}}
      </p>
      <p>
        <b>Địa chỉ:</b>
        {{employees.address}}
      </p>
      <p>
        <b>Thường trú:</b>
        {{employees.region}}
      </p>
      <p>
        <b>Số điện thoại:</b>
        {{employees.phoneNumber}}
      </p>
      <p>
        <b>Ngày tạo:</b>
        {{new Date(employees.createdDate).toDateString()}}
      </p>
      <p>
        <b>Ngày thay đổi:</b>
        {{new Date(employees.modifiedDate).toDateString()}}
      </p>
      <p>
        <b>Chức vụ:</b>
        {{employees.departmentDTO.name}}
      </p>
      <p>
        <b>Không biết:</b>
        {{employees.rescueOrderEntities}}
      </p>
      <p>
        <b>Ngày vào làm:</b>
        {{new Date(employees.joinDate).toDateString()}}
      </p>
    </div>
    <div v-else-if="isUpdate" class="col-md-12 mt-4 text-justify p-4">
      <p>
        <b>Tên Nhân Viên:</b>
        <input type="text" v-model="form.fullName" class="form-control form-control-sm col-md-4" />
      </p>
      <p>
        <b>Họ:</b>
        <input type="text" v-model="form.firstName" class="form-control form-control-sm col-md-4" />
      </p>
      <p>
        <b>Tên:</b>
        <input type="text" v-model="form.lastName" class="form-control form-control-sm col-md-4" />
      </p>
      <p>
        <b>Giới Tính:</b>
        <input type="text" 
        v-model="form.gender"
        class="form-control form-control-sm col-md-4" />
      </p>
      <div class="form-group col-md-6">
                <label for="recipient-name" class="col-form-label">Ngày Sinh</label>
                
                <DatePicker
                    :mode="mode"
                    v-model="form.birthday"
                  />
              </div>
      <p>
        <b>Địa chỉ:</b>

        <input type="text" v-model="form.address" class="form-control form-control-sm col-md-4" />
      </p>
      <p>
        <b>Thường trú:</b>
        <input type="text" v-model="form.region" class="form-control form-control-sm col-md-4" />
      </p>
      <p>
        <b>Số điện thoại:</b>
        <input type="text" v-model="form.phoneNumber" class="form-control form-control-sm col-md-4" />
      </p>
      <p>
        <b>Ngày tạo:</b>
        <input type="text" disabled :value="new Date(this.$store.state.employeesId.createdDate).toDateString()" class="form-control form-control-sm col-md-4" />
      </p>
      <p>
        <b>Ngày thay đổi:</b>
        <input
          type="text"
          :value="new Date(this.$store.state.employeesId.modifiedDate).toDateString()"
          disabled
          class="form-control form-control-sm col-md-4"
        />
      </p>
      <p>
        <b>Chức vụ:</b>
        <input
          type="text"
          v-model="form.departmentDTO.departmentId"
          class="form-control form-control-sm col-md-4"
        />
      </p>
      <p>
        <b>Không biết:</b>
        <input
          type="text"
          v-model="form.rescueOrderEntities"
          class="form-control form-control-sm col-md-4"
        />
      </p>
      <div class="form-group col-md-6">
                <label for="recipient-name" class="col-form-label">Ngày Vào Làm Việc</label>
                
                <DatePicker
                    :mode="mode"
                    v-model="form.joinDate"
                  />
              </div>
              <button @click.prevent="UpdateEmployees" class="btn btn-warning">Xác Nhận Sửa</button>
    </div>-->
    <div class="_BoxDetailPet">
      <div class="_BoxDetailPet_Item">
        <div>
          <img
            class="img-responsive img-rounded"
            src="/src/assets/uploads/Mix/users-vector-icon-png_260862.jpg"
            style="border:1px; border-radius: 50%; width: 40%"
            alt="User picture"
          />
        </div>
        <div>
          <h3>{{employees.fullName}}</h3>
          <p>
            Họ:
            <b>{{employees.firstName}}</b>
          </p>
          <p>
            Tên:
            <b>{{employees.lastName}}</b>
          </p>
        </div>
      </div>
      <div class="_BoxDetailPet_Item">
        <p>
          Chức vụ:
          <b>{{employees.departmentDTO.name}}</b>
        </p>
        <p>
          Vị trí:
          <b>{{employees.region}}</b>
        </p>
        <p>
          Vào Ngày:
          <b>{{new Date(employees.joinDate).toDateString()}}</b>
        </p>
      </div>
      <div class="_BoxDetailPet_Item">
        <p>
          Bản ghi được thêm vào:
          <b>{{new Date(employees.createdDate).toDateString()}}</b>
        </p>
        <p>
          Thay đổi gần đây:
          <b>{{new Date(employees.modifiedDate).toDateString()}}</b>
        </p>
      </div>
    </div>
    <div>
      <button
        v-if="tabSelected == 'infoPet'"
        @click.prevent="UpdateEmployees"
        class="btn btn-info float-right"
      >Cập Nhật</button>
      <button
        v-else
        class="btn btn-success float-right"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >Thêm</button>
    </div>
    <div class="mt-5">
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button " @click="ChangeTabSelect('infoPet')" class="btn btn-info">Thông Tin</button>
        <button
        v-if="employees.departmentDTO.departmentId == 2"
          type="button "
          @click="ChangeTabSelect('localPet')"
          class="btn btn-primary"
        >Thông Tin Giải Cứu</button>
        <button
        v-else-if="employees.departmentDTO.departmentId == 1"
          type="button "
          @click="ChangeTabSelect('localPet')"
          class="btn btn-primary"
        >Thông Tin Chăm Sóc</button>
      </div>
    </div>
    <div v-if="tabSelected == 'infoPet'" id="accordion">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h5 class="mb-0">
            <button
              class="btn"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <i class="fas fa-caret-right"></i> Chi Tiết
            </button>
          </h5>
        </div>

        <div
          id="collapseOne"
          class="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div class="card-body card-Body">
            <div class="card-body-Item">
              <p>
                Họ và Tên:
                <input type="text" class="form-control" v-model="empl.form.fullName" />
              </p>
              <p>
                Họ:
                <input type="text" class="form-control" v-model="empl.form.firstName" />
              </p>
              <p>
                Tên:
                <input type="text" class="form-control" v-model="empl.form.lastName" />
              </p>
              <p>
                Giới tính :
                <select name class="form-control" v-model="empl.form.gender" id>
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                  <option value="Chưa rõ">Chưa rõ</option>
                </select>
              </p>
            </div>
            <div class="card-body-Item">
              <p>
                Thường trú:
                <input type="text" class="form-control" v-model="empl.form.region" />
              </p>
              <p>
                Số điện thoại :
                <input type="text" class="form-control" v-model="empl.form.phoneNumber" />
              </p>

              <p>
                Chức vụ:
                <select
                  type="number"
                  name
                  v-model="empl.form.departmentDTO.departmentId"
                  class="form-control"
                  id
                >
                  <option value="1">Chăm Sóc</option>
                  <option value="2">Giải Cứu</option>
                  <option value="3">Quản Lý</option>
                </select>
              </p>
              <p>
                Ngày làm việc:
                <DatePicker :mode="mode" v-model="empl.form.joinDate" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
        <table v-if="employees.departmentDTO.departmentId == 1" :class="typeClass" class="table table-bordered table-hover table-Light">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nội Dung</th>
          <th>Chi tiết</th>
        </tr>
      </thead>
      <tbody >
       <tr v-for="(employee_Foster, index) in employee_Fosters.objects" :key="index">
         <td>{{employee_Foster.fosterPetId}}</td>
         <td>{{employee_Foster.content}}</td> 
         <td><router-link tag="button" class="btn btn-sm btn-info" :to="{ name: 'DetailFoster', params: { id:employee_Foster.fosterPetId }}">Chi Tiết</router-link></td>        
       </tr>
      </tbody>
    </table>
    <table v-else-if="employees.departmentDTO.departmentId == 2" :class="typeClass" class="table table-bordered table-hover table-Light">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nội Dung</th>
          <th>Thường Trú</th>
            <th>Ngày Giải Cứu</th>
            <th>Chi tiết</th>
        </tr>
      </thead>
      <tbody >
       <tr v-for="(employeeRescue, index) in employeeRescues.objects" :key="index">
         <td>{{employeeRescue.rescueOrderId}}</td>
         <td>{{employeeRescue.content}}</td>
          <td>{{employeeRescue.region}}</td>
          <td>{{new Date(employeeRescue.dateRescue).toDateString()}}</td>
          <td><router-link tag="button" class="btn btn-sm btn-info" :to="{ name: 'DetailRescue', params: { id:employeeRescue.rescueOrderId }}">Chi Tiết</router-link></td>
       </tr>
      </tbody>
    </table>
    <h3 class="mt-5" v-else>Không có thông tin</h3>
    </div>
  </div>
</template>

<script>
import Calendar from "v-calendar/lib/components/calendar.umd";
import DatePicker from "v-calendar/lib/components/date-picker.umd";
export default {
  props: ["id"],
  data() {
    return {
      isUpdate: false,
      close: true,
      mode: "single",
      tabSelected: "infoPet",
      form: {
        employeeId: this.id,
        fullName: '',
        firstName: '',
        lastName: '',
        address: '',
        region: '',
        gender: '',
        birthday: '',
        phoneNumber: '',
        joinDate: '',
        departmentDTO: {
          departmentId: 1,
        },
      },
    };
  },

  computed: {
    empl() {
      return {
        form: {
        employeeId: this.id,
        fullName: this.$store.state.employeesId.fullName,
        firstName: this.$store.state.employeesId.firstName,
        lastName: this.$store.state.employeesId.lastName,
        address: this.$store.state.employeesId.address,
        region: this.$store.state.employeesId.region,
        gender: this.$store.state.employeesId.gender,
        birthday: this.$store.state.employeesId.birthday,
        phoneNumber: this.$store.state.employeesId.phoneNumber,
        joinDate: this.$store.state.employeesId.joinDate,
        departmentDTO: {
          departmentId: 1,
        },
      },
      }
    },
    employees() {
      return this.$store.state.employeesId;
    },
    typeClass() {
      return `${this.$store.state.themes}`
    },
    employeeRescues() {
       return this.$store.state.employee_Rescue;
    },
    employee_Fosters() {
      return this.$store.state.employee_Foster;
    }
  },
  methods: {
    ChangeTabSelect(tab) {
      this.tabSelected = tab;
    },
    UpdateEmployees() {
      this.$store.dispatch("updateEmployee", this.empl.form);
    },
  },
  created() {
    this.$store.dispatch("getEmployeeById", this.id);
    this.$store.dispatch("getEmployeeRescueOrder", this.id);
    this.$store.dispatch("getEmployeeFosterForDetail", this.id);
  },
  components: {
    Calendar,
    DatePicker,
  },
};
</script>

<style>
._BoxDetailPet {
  display: flex;
  justify-content: space-around;
}
.detailPet {
  text-align: justify;
}
._BoxDetailPet_Item {
  width: 30%;
}
.card-body-Item {
  width: 50%;
  padding: 20px 15px;
}
.card_ {
  margin: 0 auto;
  padding: 10px 20px !important;
  text-align: justify;
}
.img_Avatar {
  border: 3px solid #f6f6f6;
  border-radius: 50%;
  width: 40%;
  margin: 0 auto;
}
.card-Body {
  display: flex;
  justify-content: space-around;
}
.active{
  background-color: #f7f7f7;
  color: #f7f7f7;
}
</style>