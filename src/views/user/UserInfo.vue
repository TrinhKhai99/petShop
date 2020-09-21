<template>
<div>
  <div class="box_Option mb-4">
    <button v-if="close" @click="changeTab(e)" class="btn btn-info">
      Thêm Người Dùng
    </button>
    <button v-else-if="!close" @click.prevent="changeTab(e)" class="btn btn-danger">
      Hủy
    </button>
  </div>
  <div class="row">
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
                <label for="message-text" class="col-form-label">Tên Người Dùng</label>
                <input type="text" class="form-control" v-model="form.userName" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="recipient-name" class="col-form-label">Mật Khẩu</label>
                <input
                  type="password"
                  required
                  v-model="form.password"
                  class="form-control"
                  id="recipient-name"
                />
              </div>
              <div class="form-group col-md-6">
                <div class="form-group col-md-6">
                <label for="message-text" class="col-form-label">Avatar</label>
                <input type="file" required="" ref="getImage" style="display:none" @change="uploadFiles" class="form-control" />
                <p><button v-on:click="getImage" class="btn btn-info">Nhấp để chọn Ảnh</button></p>
                 <div id="preview">
                   <img v-if="url" :src="url" />
                </div>
              </div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="message-text" class="col-form-label">Email:</label>
                <input
                  class="form-control"
                  type="email"
                  required
                  v-model="form.email"
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
                <label for="message-text" class="col-form-label">Quyền Hạn</label>
                <select name required v-model="form.roleDTO.roleId" class="form-control" id>
                  <option selected value="1">Admin</option>
                  <option value="2">Người Dùng</option>
                </select>
              </div>
              
            </div>
            <button @click.prevent="onSubmit" class="btn btn-primary">Thêm Người Dùng</button>
          </form>
        </div>
      </div>
    </transition>
  </div>
  <transition name="list">
  <table class="table table-hover " :class="typeClass">
    <thead>
      <tr>
        <th>ID</th>
        <th>Tên Tài Khoản</th>
        <th>Họ và Tên</th>
        <th>Số điện thoại</th>
        <th>Email</th>
        <th>Giới tính</th>
        <th>Ngày sinh</th>
        <th>Avatar</th>
        <th>Quyền hạn</th>
        <th>Xử Lý</th>
      </tr>
    </thead>
    <tbody>
      <ListUser v-for="user in users.objects" v-bind:key="user.UserId" :user="user" />
    </tbody>
  </table>
 
  </transition>
   <Paginate :ob="users" @thisPage="getCurPage"/>
  </div>
</template>
<script>
import Paginate from '../Paginate'
import axios from 'axios'
import Calendar from "v-calendar/lib/components/calendar.umd";
import DatePicker from "v-calendar/lib/components/date-picker.umd";
import ListUser from "./ListUser";
import mapState from "vuex";
export default {
  data() {
    return {
      page: 1,
      url: null,
      selectAdd: false,
      close: true,
      form: {
        userName: '',
        password: '',
        fullName: '',
        phoneNumber: '',
        email: '',
        gender: '',
        birthday: '',
        avatar: '',
        roleDTO: {
          roleId: 1
        }
      }
    }
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    typeClass() {
      return `${this.$store.state.themes}`
    },
    
    
  },
  methods: {
    uploadFiles(event) {
      console.log(event);
      const file = event.target.files[0];
      this.url = URL.createObjectURL(file);
      const uRL = "https://comic.j.layershift.co.uk/user/avatar/";

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
        this.form.avatar = response.data.file;
        console.log(this.form.avatar);
      });
    },
    onSubmit() {
      let data = JSON.stringify(this.form);
      console.log(this.form)
      this.$store.dispatch("addUsers", data);
      this.selectAdd = !this.selectAdd;
      this.close = !this.close;
    },
    changeTab(e) {
       this.selectAdd = !this.selectAdd;
      this.close = !this.close;
    },
    getImage(e) {
      this.$refs.getImage.click();
    },
    getCurPage(data) {
      this.page = data.curPage;
      console.log(" Page hiện tại =", this.page);
      let datas = {
          page : this.page,
        };
      this.$store.dispatch("getUsers", datas);
    }
  },
  mounted() {
    let datas = {
          page : this.page,
    };
    this.$store.dispatch("getUsers", datas);
  },
  components: {
    ListUser,
    Calendar,
    DatePicker,
    Paginate
  }
};
</script>

<style>
</style>