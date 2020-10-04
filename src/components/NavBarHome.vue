<template>
<div class="container-fluid">
  <div class="row no-gutter">
      <div class="col-md-12">
        <div class="nav_Menu" id="navbar">
          <span>
            <router-link :to="{ path: '/' }">
              <img
                src="src/assets/uploads/Mix/hanoi-adoption-logo.png"
                id="nav_logo"
                width="233px"
                height="59px"
                alt
              />
            </router-link>
          </span>
          <div class="nav_Menu_PC">
            <router-link exact active-class="pink" :to="{ path: '/' }">TRANG CHỦ</router-link>
            <router-link exact active-class="pink" :to="{ name: 'Adopt' }">NHẬN NUÔI</router-link>
            <router-link exact active-class="pink" :to="{ name: 'donate' }">ỦNG HỘ</router-link>
            <router-link exact active-class="pink" :to="{ name: 'volunteer' }">TÌNH NGUYỆN VIÊN</router-link>
            <router-link exact active-class="pink" :to="{ name: 'newspage' }">TIN TỨC</router-link>
            <router-link exact active-class="pink" :to="{ name: 'productpage' }">SẢN PHẨM</router-link>
            <router-link exact active-class="pink" :to="{ name: 'contact' }">LIÊN HỆ</router-link>
            <div v-if="isLogin" class="btn-group" style="height:50%; margin-top: 25px">
            <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img id="userAvatar" :src="'https://petadoption.j.layershift.co.uk/user/avatar/' + userLogin.avatar" width="50px" height="50px"/>
            </button>
            <div class="dropdown-menu dropdown-menu-right">
                <button class="dropdown-item" type="button"><i style="font-size: 1.2rem; color:#7158e2" class="fas fa-user-circle"></i>  {{userLogin.userName}}</button>
                <router-link v-if="isAdmin" class="dropdown-item" :to="{ path: '/admin' }"><i class="fas fa-tasks"></i> Quản trị</router-link>
                <button style="color:red" class="dropdown-item" @click="logout" type="button"> <i class="fas fa-power-off"></i> Đăng xuất</button>
            </div>
            </div>
            
          </div>
        </div>
        <label for="nav_input" class="nav_bars-btn">
          <i class="fas fa-bars"></i>
        </label>
        <input type="checkbox" class="nav_input" hidden id="nav_input" />
        <label for="nav_input" class="nav_overlay"></label>
        <div class="nav_Menu_Moblie">
          <div class="pt-3">
            <router-link :to="{ path: '/' }">TRANG CHỦ</router-link>
            <router-link :to="{ name: 'Adopt' }">NHẬN NUÔI</router-link>
            <router-link :to="{ name: 'donate' }">ỦNG HỘ</router-link>
            <router-link :to="{ name: 'volunteer' }">TÌNH NGUYỆN VIÊN</router-link>
            <router-link :to="{ name: 'newspage' }">TIN TỨC</router-link>
            <router-link :to="{ name: 'productpage' }">SẢN PHẨM</router-link>
            <router-link :to="{ name: 'contact' }">LIÊN HỆ</router-link>
            <div v-if="isLogin" class="btn-group" style="height:50%; margin-top: 25px">
            <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img id="userAvatar" :src="'https://petadoption.j.layershift.co.uk/user/avatar/' + userLogin.avatar" width="50px" height="50px"/>
            </button>
            <div class="dropdown-menu dropdown-menu-right">
                <button class="dropdown-item" type="button"><i style="font-size: 1.2rem; color:#7158e2" class="fas fa-user-circle"></i>  {{userLogin.userName}}</button>
                <router-link v-if="isAdmin" class="dropdown-item" :to="{ path: '/admin'}"><i class="fas fa-tasks"></i> Quản trị</router-link>
                <button style="color:red" class="dropdown-item" @click="logout" type="button"> <i class="fas fa-power-off"></i> Đăng xuất</button>
            </div>
            </div>
            
          </div>
          <label for="nav_input" class="icon_Close">
            <i class="fas fa-times"></i>
          </label>
        </div>
      </div>
    </div>
    <transition name="fade" mode="out-in">
    <router-view :key="componentKey"/>
    </transition>
</div>
</template>

<script>
import Home from '../views/Home'
import store from '../stores';
export default {
    data: function() {
        return {
              componentKey: 0,
             isLoggedIn: false,
        }
    },
    
    components: {
        Home
    },
    
    computed: {
      isLogin() {
          if(this.$store.state.isLogin) {
            return true
          }
          else return false
      },
      isAdmin() {
          if(store.state.role != 'admin' && store.state.role != 'root') {
              return false
          }
          else return true
      },
      userLogin() {
          return this.$store.state.userLogin;
      },
      
  },
  methods: {
    
    logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
      },
      forceRender() {
        this.copmKey +=1
      }
  },
  mounted() {
      this.$store.dispatch("getUserLogin");
  },
}
</script>

<style>
.pink {
  color: #d61c62 !important
}
</style>