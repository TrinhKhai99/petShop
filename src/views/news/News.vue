<template>
  <div>
    <div class="box_Option">
      <form>
        <input
          type="text"
          v-model="searchNewsValue"
          v-on:keyup.enter="searchNews"
          class="form-control form-control-sm"
          placeholder="Tìm kiếm"
          style="width: 100px"
        />
      </form>
      <select @change="selectRecord" class="form-control form-control-sm" style="width: 100px">
        <option selected value="4">4</option>
        <option value="8">8</option>
        <option value="12">12</option>
      </select>
      <select
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
      </select>
      <button
        type="button"
        class="btn btn-primary float-right mb-3"
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@mdo"
        v-if="!close"
        @click="selectAddNews(e)"
      >Thêm Tin Tức</button>
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
                <label for="recipient-name" class="col-form-label">Tiêu đề:</label>
                <input type="text" required="" v-model="form.title" class="form-control" id="recipient-name" />
              </div>
              <div class="form-group col-md-6">
                <label for="message-text" class="col-form-label">Hình ảnh:</label>
                <input type="file" required="" ref="getImage" style="display:none" @change="uploadFiles" class="form-control" />
                <p><button v-on:click="getImage" class="btn btn-info">Nhấp để chọn Ảnh</button></p>
                 <div id="preview">
                   <img v-if="url" :src="url" />
                </div>
              </div>
  </div>  
  <div class="form-row">
    <div class="form-group col-md-6">
                <label for="message-text" class="col-form-label">Nội dung:</label>
                <textarea class="form-control" required="" v-model="form.content" id="message-text"></textarea>
              </div>

              <div class="form-group col-md-6">
                <label for="message-text" class="col-form-label">Trạng thái:</label>
                <select name required="" v-model="form.status" class="form-control" id>
                  <option value="show">Hiển thị</option>
                  <option value="hide">Ẩn</option>
                </select>
              </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
                <label for="message-text" class="col-form-label">Danh mục:</label>
                <select name v-model="form.newsCategoryDTO.newsCategoryId" class="form-control" id>
                <option v-for="(newsCate, index) in newsCates" :key="index" :value="newsCate.newsCategoryId">{{newsCate.name}}</option>
                </select>
              </div>
          
  </div>
  <button @click="onSubmit" class="btn btn-primary">Thêm</button>
</form>
      </div>
    </div>
    </transition>
    <table class="table table-hover " :class="typeClass">
      <thead>
        <tr>
          <th>ID</th>
          <th>Tiêu đề</th>
          <th>Hình ảnh</th>
          <th>Ngày tạo</th>
          <th>Người đăng</th>
          <th>Danh mục</th>
          <th colspan="2">Tuỳ Chọn</th>
        </tr>
      </thead>
      <tbody>
        <ListNews v-for="news in news.objects" :key="news.newsId" :news="news" />
      </tbody>
    </table>
    <PaginateNews :news="news" @thisPage="getCurPage" />
  </div>
</template>

<script>
import PaginateNews from "./PaginateNews";
import ListNews from "./ListNews";
import axios from "axios";
export default {
  data: function() {
    return {
      url:null,
      selectAdd: false,
      close :false,
      disabled: true,
      searchNewsValue: "",
      isTyping: false,
      searchResult: [],
      isLoading: false,
      page: 1,
      selectedRecord: 4,
      selectCategory: "",
      awaitingSearch: false,
      form: {
        title: null,
        avatar: null,
        content: null,
        status: null,
        newsCategoryDTO: {
          newsCategoryId: null
        }
      }
    };
  },
  computed: {
    news() {
      return this.$store.state.news;
      
    },
    typeClass() {
      return `${this.$store.state.themes}`
    },
    newsCates() {
      return this.$store.state.newsCate
    }
  },
  watch: {
    
  },
  methods: {
    selectAddNews(e) {
      this.selectAdd = !this.selectAdd
      this.close = !this.close
    },
    searchNews() {
       console.log(" Page hiện tại =", this.page);
      console.log("bản ghi hiện tại = ", this.selectedRecord);
      console.log("String search =", this.searchNewsValue )
        // this.searchNewsValue = e.target.value;
        this.page = 1
        console.log(this.searchNewsValue)
        let datas = {
          page : this.page,
          record : this.selectedRecord,
          category : this.selectCategory,
          search: this.searchNewsValue
        };
      
      console.log(" Page hiện tại =", this.page);
      this.$store.dispatch("getNews", datas);
    },
    uploadFiles(event) {
      console.log(event);
      const file = event.target.files[0];
      this.url = URL.createObjectURL(file);
      const uRL = "https://petadoption.j.layershift.co.uk/admin/news/avatar/";

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
      this.$store.dispatch("addNews", data);
      this.selectAdd = !this.selectAdd
      this.close = !this.close
        this.form.title = ''
        this.form.avatar = ''
        this.form.content = ''
        this.form.status = ''
        this.form.newsCategoryDTO.newsCategoryId = ''
        this.url = ''
    },
    submitForm(e) {
      this.$refs.submitForm.click();
    },
    getImage(e) {
      this.$refs.getImage.click();
    },
    selectnewsCategory() {
      let datas = {
          page : 1,
          record : this.selectedRecord,
          category : this.selectCategory,
          search: this.searchNewsValue
        };
      // this.selectCategory = e.target.value;
      this.$store.dispatch("getNews", datas);
    },
    selectRecord(e) {
      this.selectedRecord = e.target.value;
      console.log(this.selectedRecord);
      console.log("Page =", this.page);
      let datas = {
          page : 1,
          record : this.selectedRecord,
          category : this.selectCategory,
          search: this.searchNewsValue
        };
      this.$store.dispatch("getNews", datas);
    },
    getCurPage(data) {
      // this.selectedRecord = this.$store.state.record
      // console.log("record =", selectedRecord)
      this.page = data.curPage;
      console.log(" Page hiện tại =", this.page);
      console.log("bản ghi hiện tại = ", this.selectedRecord);
      console.log("String search =", this.searchNewsValue )
      let datas = {
          page : this.page,
          record : this.selectedRecord,
          category : this.selectCategory,
          search: this.searchNewsValue
        };
      this.$store.dispatch("getNews", datas);
    }
  },
  mounted() {
    let data = {
          page : this.page,
          record : this.selectedRecord,
          category : this.selectCategory,
          search: this.searchNewsValue
        };
    this.$store.dispatch("getNews", data);
    this.$store.dispatch("getNewsCate", data);
  },
  components: {
    ListNews,
    PaginateNews
  }
};
</script>

<style scoped>
.box_Option {
  display: flex;
  justify-content: space-around;
}
.transition {
  transition: 1s all ease-in-out;
}
</style>