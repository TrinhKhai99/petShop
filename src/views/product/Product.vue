<template>
  <div>
    <div class="box_Option">
       <select @change="selectRecord" class="form-control form-control-sm" style="width: 100px">
        <option selected value="4">4</option>
        <option value="8">8</option>
        <option value="12">12</option>
      </select>
    <button
        type="button"
        class="btn btn-primary float-right mb-3"
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@mdo"
        @click="selectAddPro"
        v-if="close"
      >Thêm Sản Phẩm</button>
      <button
        type="button"
        class="btn btn-danger float-right mb-3"
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@mdo"
        v-else-if="!close"
        @click="selectAddPro"
      >Hủy</button>
    </div>
    <transition name="list">
    <div v-show="selectAdd" class="row text-justify">
      <div class="col-md-10 ml-5 mb-5">
        <form>
  <div class="form-row">
    <div class="form-group col-md-5">
                <label for="recipient-name" class="col-form-label">Tên Sản Phẩm:</label>
                <input type="text" v-model="form.name" class="form-control" id="recipient-name" />
    </div>
              
              <div class="form-group col-md-5">
                <label for="message-text" class="col-form-label">Kích thước:</label>
                <input type="text" v-model="form.size" class="form-control" id="recipient-name" />
              </div>
   </div>
  <div class="form-row">
              <div class="form-group col-md-5">
                <label for="recipient-name" class="col-form-label">Cân nặng(kg):</label>
                <input type="text" v-model="form.weight" class="form-control" id="recipient-name" />
              </div>
              <div class="form-group col-md-5">
                <label for="message-text" class="col-form-label">Mô tả:</label>
                <textarea class="form-control" v-model="form.description" id="message-text"></textarea>
              </div>
  </div>
  <div class="form-row">
              <div class="form-group col-md-5">
                <label for="message-text" class="col-form-label">Hình ảnh:</label>
                <input type="file" @change="uploadFiles" ref="getImage" style="display: none" class="form-control" />
                <button v-on:click="getImage" class="btn btn-info ml-5">Nhấp Để Thêm Ảnh</button>
              </div>
              <div id="preview">
                   <img v-if="url" :src="url" />
                </div>
              <div class="form-group col-md-5">
                <label for="message-text" class="col-form-label">Trạng thái:</label>
                <select name v-model="form.status" class="form-control" id>
                  <option value="show">Hiển thị</option>
                  <option value="hide">Ẩn</option>
                </select>
              </div>
  </div>
  <div class="form-row">
               <div class="form-group col-md-5">
                <label for="recipient-name" class="col-form-label">Hãng sản xuất:</label>
                <input type="text" v-model="form.brand" class="form-control" id="recipient-name" />
              </div>

              <div class="form-group col-md-5">
                <label for="recipient-name" class="col-form-label">Giá:</label>
                <input type="number" v-model="form.price" class="form-control" id="recipient-name" />
              </div>
  </div>
  <div class="form-row">
              <div class="form-group col-md-5">
                <label for="recipient-name" class="col-form-label">Shoppe Link:</label>
                <input type="text" v-model="form.shopeeLink" class="form-control" id="recipient-name" />
              </div>
              <div class="form-group col-md-5">
                <label for="message-text" class="col-form-label">Danh mục sản phẩm:</label>
                <select name v-model="form.productCategoryDTO.productCategoryId" class="form-control" id>
                  <option v-for="(productCate, index) in productCates" :key="index" :value="productCate.productCategoryId">{{productCate.name}}</option>
                </select>
              </div>
  </div>
  <button @click="onSubmit" class="btn btn-primary mt-4">Thêm Sản Phẩm</button>
</form>
      </div>
    </div>
    </transition>
      <table class="table table-hover" :class="typeClass">
      <thead>
        <tr>
          <th>ID</th>
          <th>Tên</th>
          <th>Kích thước</th>
          <th>Khối lượng</th>
          <th>Giá</th>
          <th>Người đăng</th>
          <th>Trạng thái</th>
          <th>Ảnh</th>
          <th colspan="2">Tuỳ Chọn</th>
        </tr>
      </thead>
      <tbody>
        <ListProduct v-for="product in products.objects" :key="product.newsId" :product="product" />
      </tbody>
    </table>
    <Paginate :ob="products" @thisPage="getCurPage"/>
  </div>
</template>

<script>
import axios from 'axios'
import Paginate from "../Paginate";
import ListProduct from './ListProduct'
export default {
  data() {
    return {
      url: null,
      selectAdd: false,
      close: true,
      page: 1,
      selectedRecord:4,
      form: {
        name: '',
        size: '',
        weight: '',
        description: '',
        image: '',
        status: '',
        brand: '',
        price: '',
        shopeeLink: '',
        productCategoryDTO: {
          productCategoryId: 1
        }
      }
    }
  },
    computed: {
    products() {
      return this.$store.state.products;
    },
    productCates() {
      return this.$store.state.productCate;
    },
    typeClass() {
      return `${this.$store.state.themes}`
    }
  },
    methods: {
      selectAddPro() {
        this.selectAdd = !this.selectAdd
        this.close = !this.close
      },
      onSubmit() {
        
        let data = JSON.stringify(this.form);
      console.log(data);
      this.$store.dispatch("addProduct", data);
      },
        submitForm(e) {
        this.$refs.submitForm.click();
      },
      uploadFiles(event) {
      console.log(event);
      const file = event.target.files[0];
      this.url = URL.createObjectURL(file);
      const uRL = "https://comic.j.layershift.co.uk/admin/pet/image/";

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
        this.form.image = response.data.file;
        console.log(this.form.image);
      });
    },
    getCurPage(data) {
      // this.selectedRecord = this.$store.state.record
      // console.log("record =", selectedRecord)
      this.page = data.curPage;
      console.log(" Page hiện tại =", this.page);
      let pageRecord = {
        page: this.page,
        record: this.selectedRecord
      };
      this.$store.dispatch("getProducts", pageRecord);
    },
    getImage() {
      this.$refs.getImage.click();
    },
    selectRecord(e) {
      this.selectedRecord = e.target.value;
      let pageRecord = {
        page: this.page,
        record: this.selectedRecord
      };
      this.$store.dispatch("getProducts", pageRecord);
    },
    },
    mounted() {
      let pageRecord = {
        page: this.page,
        record: this.selectedRecord
      };
    this.$store.dispatch("getProducts", pageRecord);
    this.$store.dispatch("getProductCate");
  },
  components: {
      ListProduct,
      Paginate
  }
}
</script>

<style scoped>
.box_Option {
  display: flex;
  justify-content: space-around;
}
</style>