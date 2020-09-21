<template>
  <div>
    <button
        type="button"
        class="btn btn-primary float-right mb-3"
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@mdo"
      >Thêm Danh Mục Sản Phẩm</button>
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
            <h5 class="modal-title" id="exampleModalLabel">Thêm Danh Mục Sản Phẩm</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="onSubmit" enctype="Multipart / form-data">
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">Tên danh mục:</label>
                <input type="text" v-model="form.name" class="form-control" id="recipient-name" />
              </div>
              
              <div class="form-group">
                <label for="message-text" class="col-form-label">Trạng thái:</label>
                <select name v-model="form.status" class="form-control" id>
                  <option value="show">Hiển thị</option>
                  <option value="hide">Ẩn</option>
                </select>
              </div>

              <!-- <div class="form-group">
                <label for="message-text" class="col-form-label">Sản phẩm liên quan:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.productDTOS.productCategoryId"
                  id="message-text"
                />
              </div> -->

              <input type="submit"  ref="submitForm" style="display:none"/>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
            <button
              type="submit"
              class="btn btn-primary"
              v-on:click="submitForm"
              data-dismiss="modal"
            >Thêm</button>
          </div>
        </div>
      </div>
    </div>
      <table :class="typeClass" class="table table-hover ">
      <thead>
        <tr>
          <th>ID</th>
          <th>Tên</th>
          <th>Ngày tạo</th>
          <th>Ngày thay đổi</th>
          <th>Trạng thái</th>
          <th >Tuỳ Chọn</th>
        </tr>
      </thead>
      <tbody>
        <ListProductCate v-for="productCate in productCates" :key="productCate.productCategoryId" :productCate="productCate" />
      </tbody>
      <Paginate :ob="productCates" @thisPage="getCurPage"/>
    </table>
  </div>
</template>

<script>
import ListProductCate from './ListProductCate'
import Paginate  from "../Paginate.vue";
export default {
  data() {
    return {
      page: 1,
        form: {
          name: '',
          status: '',
          // createdDate: '',
          // modifiedDate: '',
          // productDTOS: {
          //   productCategoryId: 1
          // }
      }
    }
  },
    computed: {
    productCates() {
      return this.$store.state.productCate;
    },
    typeClass() {
      return `${this.$store.state.themes}`
    }
  },
  methods: {
    onSubmit() {
      let data = JSON.stringify(this.form);
      console.log(data);
      this.$store.dispatch("addProductCate", data);
    },
    submitForm(e) {
      this.$refs.submitForm.click();
    },
    getCurPage(data) {
      this.page = data.curPage;
      let datas = {
          page : this.page,
          // record : this.selectedRecord,
          // category : this.selectCategory,
          // search: this.searchNewsValue
        };
      this.$store.dispatch("getProductCate", datas);
    }
  },
    mounted() {
      let datas = {
          page : this.page,
          // record : this.selectedRecord,
          // category : this.selectCategory,
          // search: this.searchNewsValue
        };
    this.$store.dispatch("getProductCate", datas);
  },
  components: {
    ListProductCate,
    Paginate
  }
}
</script>

<style>

</style>