<template>
  <div id="layoutSidenav card_">
    <button v-on:click="ChangeTabSelect('infoNews')" class="btn btn-info">
        Thông tin Tin Tức
    </button>
    <button v-on:click="ChangeTabSelect('updateNews')" class="btn btn-success">
        Cập Nhật Tin Tức
    </button>
    <transition name="list">
    <div class="mt-4" id="layoutSidenav_content"  v-if="tabSelected != 'updateNews'">
      <div class="card card_" style="width: 38rem;">
        <img
          class="img_ListUser img_noCircle"
          v-bind:src="'https://comic.j.layershift.co.uk/news/avatar/' + news.avatar"
          :alt="news.avatar"
        />
        <div class="card-body">
          <h5 class="card-title text-center" style="font-size: 2.1rem;">{{news.title}}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Nội dung: {{news.content}}</li>
          <li class="list-group-item">Ngày tạo: {{news.createdDate}}</li>
          <li class="list-group-item">Thay đôi gần đây: {{news.modifiedDate}}</li>
          <li class="list-group-item">Người đăng: {{news.userDTO.userName}}</li>
          <li class="list-group-item">Danh mục :{{news.newsCategoryDTO.name}}</li>
          <li class="list-group-item">Trạng thái: {{news.status}}</li>
        </ul>
      </div>
    </div>
    <form action="" v-else enctype="Multipart / form-data" >
    <div id="layoutSidenav_content" class="mt-4">
      <div class="card card_" style="width: 38rem;">
       <input type="file" @change="uploadFiles" style="display:none" ref="getImage"  class="form-control" />
        <img class="card-img-top img_noCircle" v-if="url"  :src="url" />
        <img class="card-img-top img_noCircle" v-else-if="!url"  :src="'https://comic.j.layershift.co.uk/news/avatar/' + news.avatar" :alt="news.avatar" />
        <div class="card-body text-center">
          <button class="btn btn-secondary" v-on:click="getImage">Nhấp Để Thay Đổi Ảnh</button>
        </div>
        <div class="card-body">
          <input type="text"  v-model="form.title" :placeholder="news.title" class="form-control" id="recipient-name" /> 
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            Nội dung:
            <textarea class="form-control" :placeholder="news.content"  v-model="form.content" id="message-text"></textarea>
          </li>
          <li class="list-group-item">
            Trạng thái:
            <select name v-model="form.status" class="form-control" id>
              <option value="show">Hiển thị</option>
              <option value="hide">Ẩn</option>
            </select>
          </li>
          <li class="list-group-item">
            Danh mục:
            <select name v-model="form.newsCategoryDTO.newsCategoryId" class="form-control" id>
              <option  value="1">Kiến thức chăn nuôi</option>
              <option  value="2">Dễ Thương</option>
            </select>
          </li>
          <li class="list-group-item">
            <button type="submit" @click="onSubmit" class="btn btn-info float-right">Cập Nhật</button>
          </li>
        </ul>
      </div>
    </div>
    </form>
    </transition>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ["id"],
  data() {
    return {
      url: null,
      tabSelected: "infoNews",
      form: {
        newsId: this.id,
        content: '',
        title: '',
        avatar: '',
        status: '',
        newsCategoryDTO: {
          newsCategoryId: Number(1),
        }
      }
    }
  },
  methods: {
    ChangeTabSelect(tab) {
        this.tabSelected = tab
    },
    uploadFiles(event) {
      console.log(event);
      const file = event.target.files[0];
      this.url = URL.createObjectURL(file);
      const uRL = "https://comic.j.layershift.co.uk/admin/news/avatar/";

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
    getImage(e) {
      this.$refs.getImage.click();
    },
    onSubmit() {
       this.form.newsCategoryDTO.newsCategoryId = Number(this.form.newsCategoryDTO.newsCategoryId);
      let data = JSON.stringify(this.form);
      
      console.log(data)
      this.$store.dispatch("updateNews", data);
      this.tabSelected = "infoNews"
    },
  },
  computed: {
    news() {
      return this.$store.state.new;
    },
  },
  mounted() {
      this.$store.dispatch("getNew", this.id);
    }
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

</style>