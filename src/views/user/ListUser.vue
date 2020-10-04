<template>
  <tr>
    <td>{{ user.userId }}</td>
    <td>
      <router-link :to="{ name: 'UserDetail', params: { id:user.userId }}">{{user.userName}}</router-link>
    </td>
    <td>{{user.fullName}}</td>
    <td>{{user.phoneNumber}}</td>
    <td>{{user.email}}</td>
    <td>{{user.gender}}</td>
    <td>{{new Date(user.birthday).toDateString()}}</td>
    <td>
      <img
        class="img_ListUser"
        v-bind:src="'https://petadoption.j.layershift.co.uk/user/avatar/' + user.avatar"
      />
    </td>
    <td>{{setRoleName}}</td>
    <td>
      <router-link tag="button" class="btn btn-info" :to="{ name: 'UserDetail', params: { id:user.userId }}">Chi Tiết</router-link>
      <!-- <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >Đổi</button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text_Custom" id="exampleModalLabel">Xác Nhận Thay Đổi</h5>
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
              <button
                type="button"
                @click="changeRole"
                class="btn btn-primary"
                data-dismiss="modal"
              >Xác Nhận</button>
            </div>
          </div>
        </div>
      </div> -->
    </td>
  </tr>
</template>

<script>
export default {
  props: ["user"],
  data() {
    return {
      form: {
        userId: this.user.userId,
        roleDTO: {
          roleId: '',
        },
      },
    };
  },
  computed: {
    setRoleName() {
      if (this.user.roleDTO.role_name === "admin") return "Quản trị viên"
     if(this.user.roleDTO.role_name === "root") return "Root"
      else return "Người dùng";
    },
  },
  components: {},
  methods: {
    changeRole() {
      console.log(this.form.userId)
      let data = JSON.stringify(this.form);
      this.$store.dispatch("changeRole", data);
      console.log(this.user);
    },
  },
};
</script>

<style scoped>
.img_ListUser {
  width: 50px;
  height: 50px;
  border: 1px;
  border-radius: 50%;
}
.text_Custom {
  color: #000000;
}
.btn_Custom {
  display: flex;
  justify-content: space-around;
}
</style>>