<template>
  <div>
    <div class="box_Option mb-4">
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >Đổi quyền hạn</button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Xác Nhận Đổi Quyền Hạn</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <select v-model="form.roleDTO.roleId" class="form-control form-control-sm">
                <option value="1" selected>admin</option>
                <option value="2">user</option>
              </select>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal" @click="changeRole">Xác nhận</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div v-if="!selectAdd" id="layoutSidenav">
        <div id="layoutSidenav_content">
          <div class="card card_" style="width: 38rem;">
            <img
              class="card-img-top img_Avatar"
              v-bind:src="'https://petadoption.j.layershift.co.uk/user/avatar/' + user.avatar"
              :alt="user.userName"
            />
            <div class="card-body">
              <h5 class="card-title text-center" style="font-size: 2.1rem;">{{user.userName}}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <b>Họ và tên</b>
                : {{user.fullName}}
              </li>
              <li class="list-group-item">
                <b>Số điện thoại</b>
                : {{user.phoneNumber}}
              </li>
              <li class="list-group-item">
                <b>Email</b>
                : {{user.email}}
              </li>
              <li class="list-group-item">
                <b>Giới tính</b>
                : {{user.gender}}
              </li>
              <li class="list-group-item">
                <b>Ngày sinh</b>
                : {{user.birthday}}
              </li>
              <li class="list-group-item">
                <b>Ngày tạo</b>
                : {{new Date(user.createdDate).toDateString()}}
              </li>
              <li class="list-group-item">
                <b>Thay đổi gần đây</b>
                : {{new Date(user.modifiedDate).toDateString()}}
              </li>
              <li class="list-group-item">
                <b>Quyền</b>
                : {{user.roleDTO.role_name}}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      form1: {
        userName: "",
        password: "",
        fullName: "",
        createdDate: "",
        modifiedDate: "",
        phoneNumber: "",
        email: "",
        gender: "",
        birthday: "",
        avatar: "",
        roleDTO: {
          roleId: 1,
        },
      },
      form: {
        userId: this.id,
        roleDTO: {
          roleId: '',
        },
      },
    };
  },
  methods: {
    
    changeRole() {
      console.log(this.form.userId)
      let data = JSON.stringify(this.form);
      this.$store.dispatch("changeRole", data);
      console.log(this.user);
    },
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  mounted() {
    this.$store.dispatch("getUser", this.id);
  },
};
</script>

<style scoped>
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
</style>>

