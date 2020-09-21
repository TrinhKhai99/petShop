<template>
  <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
    <nav id="sidebar" class="sidebar-wrapper">
      <div class="sidebar-content">
        <!-- sidebar-brand  -->
        <div class="sidebar-item sidebar-brand">
         <router-link :to="{ path: '/' }">Trang Chủ</router-link>
        </div>
        <!-- sidebar-header  -->
        <div class="sidebar-item sidebar-header d-flex flex-nowrap">
          <div class="user-pic">
            <img
              class="img-responsive img-rounded"
              :src="'https://comic.j.layershift.co.uk/user/avatar/' + userLogin.avatar"
              style="border:1px; border-radius: 50%"
              alt="User picture"
            />
          </div>
          <div class="user-info">
            <span class="user-name">
              <strong>{{ userLogin.userName }}</strong>
            </span>
            <span class="user-role"></span>
            <span class="user-status">
              <i class="fa fa-circle"></i>
              <span>Online</span>
            </span>
          </div>
        </div>
        <!-- sidebar-search  -->
        <div class="sidebar-item sidebar-search">
          <div>
            <router-link :to="{ path: '/admin'}" exact active-class="pink">
                <i class="fas fa-satellite-dish"></i>
                <span class="menu-text">Quản Trị</span>
              </router-link>
          </div>
        </div>
        <!-- sidebar-menu  -->
        <div class="sidebar-item sidebar-menu">
          <ul>
            <li class="sidebar-dropdown">
              <router-link :to="{ path: '/admin/UserInfo'  }" exact active-class="pink">
                <i class="fas fa-user-circle"></i>
                <span class="menu-text">Người Dùng</span>
              </router-link>
            </li>
            <li class="sidebar-dropdown">
              <router-link :to="{ path: '/admin/employee'  }" exact active-class="pink">
                <i class="fas fa-users"></i>
                <span class="menu-text">Nhân Viên</span>
              </router-link>
            </li>
            <li class="sidebar-dropdown">
              <router-link exact active-class="pink" :to="{ path: '/admin/requestpets' }">
                <i class="fa fa-tachometer-alt"></i>
                <span class="menu-text">Yêu Cầu</span>
                <font class="badge badge-pill badge-danger">{{getTotalRq.totalItem}}</font>
              </router-link>
            </li>
            <li class="sidebar-dropdown">
              <router-link exact active-class="pink" :to="{ path: '/admin/appointment' }">
                <i class="far fa-calendar-check"></i>
                <span class="menu-text">Cuộc Hẹn</span>
                <font class="badge badge-pill badge-danger">{{appointToday.totalItem}}</font>
              </router-link>
            </li>
            <li class="sidebar-dropdown">
              <router-link exact active-class="pink" :to="{ path: '/admin/PetInfo' }">
                <i class="fas fa-paw"></i>
                <span class="menu-text">Thú Nuôi</span>
              </router-link>
            </li>
            <li class="sidebar-dropdown">
              <router-link exact active-class="pink" :to="{ path: '/admin/rescueorder' }">
                <i class="fas fa-first-aid"></i>
                <span class="menu-text">Giải Cứu</span>
              </router-link>
            </li>
            <li class="sidebar-dropdown">
              <router-link exact active-class="pink" :to="{ path: '/admin/fosterpet' }">
                <i class="fas fa-first-aid"></i>
                <span class="menu-text">Chăm Sóc</span>
              </router-link>
            </li>
            <li class="sidebar-dropdown">
              <router-link exact active-class="pink" :to="{ path: '/admin/news' }">
                <i class="far fa-newspaper"></i>
                <span class="menu-text">Tin Tức</span>
              </router-link>
            </li>
            <li class="sidebar-dropdown">
              <router-link exact active-class="pink" :to="{ path: '/admin/newscategory' }">
                <i class="far fa-newspaper"></i>
                <span class="menu-text">Danh Mục Tin Tức</span>
              </router-link>
            </li>
            <li class="sidebar-dropdown">
              <router-link  exact active-class="pink" :to="{ path: '/admin/productcate' }">
              <i class="fas fa-caret-square-down"></i>
              <span class="menu-text"> Danh Mục Sản phẩm</span>
              </router-link>
            </li>
            <li class="sidebar-dropdown">
              <router-link  exact active-class="pink" :to="{ path: '/admin/product' }">
              <i class="fab fa-product-hunt"></i>
              <span class="menu-text"> Quản Lí Sản Phẩm
                  </span>
              </router-link>
            </li>      
          </ul>
        </div>
        <!-- sidebar-menu  -->
      </div>
      <!-- sidebar-footer  -->
      <div class="sidebar-footer">
        <div class="dropdown">
          <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-bell"></i>
            <span class="badge badge-pill badge-warning notification">3</span>
          </a>
          <div class="dropdown-menu notifications" aria-labelledby="dropdownMenuMessage">
            <div class="notifications-header">
              <i class="fa fa-bell"></i>
              Notifications
            </div>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              <div class="notification-content">
                <div class="icon">
                  <i class="fas fa-check text-success border border-success"></i>
                </div>
                <div class="content">
                  <div class="notification-detail">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. In totam explicabo
                  </div>
                  <div class="notification-time">6 minutes ago</div>
                </div>
              </div>
            </a>
            <a class="dropdown-item" href="#">
              <div class="notification-content">
                <div class="icon">
                  <i class="fas fa-exclamation text-info border border-info"></i>
                </div>
                <div class="content">
                  <div class="notification-detail">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. In totam explicabo
                  </div>
                  <div class="notification-time">Today</div>
                </div>
              </div>
            </a>
            <a class="dropdown-item" href="#">
              <div class="notification-content">
                <div class="icon">
                  <i class="fas fa-exclamation-triangle text-warning border border-warning"></i>
                </div>
                <div class="content">
                  <div class="notification-detail">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. In totam explicabo
                  </div>
                  <div class="notification-time">Yesterday</div>
                </div>
              </div>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item text-center" href="#">View all notifications</a>
          </div>
        </div>
        <div class="dropdown">
          <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-envelope"></i>
            <span class="badge badge-pill badge-success notification">7</span>
          </a>
          <div class="dropdown-menu messages" aria-labelledby="dropdownMenuMessage">
            <div class="messages-header">
              <i class="fa fa-envelope"></i>
              Messages
            </div>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              <div class="message-content">
                <div class="pic">
                  <img src="" alt />
                </div>
                <div class="content">
                  <div class="message-title">
                    <strong>Jhon doe</strong>
                  </div>
                  <div class="message-detail">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. In totam explicabo
                  </div>
                </div>
              </div>
            </a>
            <a class="dropdown-item" href="#">
              <div class="message-content">
                <div class="pic">
                  <img src="" alt />
                </div>
                <div class="content">
                  <div class="message-title">
                    <strong>Jhon doe</strong>
                  </div>
                  <div class="message-detail">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. In totam explicabo
                  </div>
                </div>
              </div>
            </a>
            <a class="dropdown-item" href="#">
              <div class="message-content">
                <div class="pic">
                  <img src="" alt />
                </div>
                <div class="content">
                  <div class="message-title">
                    <strong>Jhon doe</strong>
                  </div>
                  <div class="message-detail">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. In totam explicabo
                  </div>
                </div>
              </div>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item text-center" href="#">View all messages</a>
          </div>
        </div>
        <div class="dropdown">
          <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-cog"></i>
            <span class="badge-sonar"></span>
          </a>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuMessage">
            <a class="dropdown-item" href="#">My profile</a>
            <a class="dropdown-item" href="#">Help</a>
            <a class="dropdown-item" href="#">Setting</a>
          </div>
        </div>
        <div>
          <a href="#">
            <i class="fa fa-power-off" @click="logout"></i>
          </a>
        </div>
        <div class="pinned-footer">
          <a href="#">
            <i class="fas fa-ellipsis-h"></i>
          </a>
        </div>
      </div>
    </nav>
    <!-- page-content  -->
    <main class="page-content pt-2">
      <div id="overlay" class="overlay"></div>
      <div class="container-fluid p-5">
        <div class="row">
          <div class="form-group col-md-12">
            <h2>Hà Nội PET</h2>
            <p></p>
          </div>
        </div>
        <hr />
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </main>
    <ThemesAdmin :getTotalRq="getTotalRq.totalRqItem" :appointToday="appointToday.totalRqItem"/>
    <!-- page-content" -->
  </div>
</template>

<script>
import Dashboard from './Dashboard'
import ThemesAdmin  from '../components/ThemesAdmin'
export default {
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    }
  },
  computed: {
    userLogin() {
      return this.$store.state.userLogin;
    },
    getTotalRq() {
      return this.$store.state.totalRqItem;
    },
    appointToday() {
      return this.$store.state.appointToday;
    }
  },
  created() {
      this.$store.dispatch("getUserLogin");
    this.$store.dispatch("getNewRqPet");
    this.$store.dispatch("getNewAppoint");
  },
  mounted() {
    
  },
  components: {
    ThemesAdmin
  }
};
</script>

<style scoped>
.dropProduct {
  background: #FFFFFF;
}
.dropProduct a {
  color:#000000

}
.dropdown-toggle::after {
       content: none !important
}
.pink span{
  color: #ffffff;
  transform: scale(1.04);
  font-weight: bold;
}
.pink i {
  color: #22ff16;
}

</style>