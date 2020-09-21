<template>
  <div>
    <div class="box_Option">
      <button
        type="button"
        class="btn btn-primary float-right mb-3"
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@mdo"
      >Thêm Danh Mục Tin Tức</button>
    </div>
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
            <h5 class="modal-title" id="exampleModalLabel">Thêm Danh Mục</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="onSubmit" enctype="Multipart / form-data">
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">Tên:</label>
                <input
                  type="text"
                  required
                  v-model="form.name"
                  class="form-control"
                  id="recipient-name"
                />
              </div>
              <input type="submit" style="display:none" ref="submitForm" />
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
    <table :class="typeClass" class="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Tên Danh Mục</th>
          <th colspan="2">Tuỳ Chọn</th>
        </tr>
      </thead>
      <tbody>
        <ListNewsCate v-for="(newsCate, index) in newsCates" :key="index" :newsCate="newsCate" :newsCategoryId="newsCate.newsCategoryId" />
      </tbody>
    </table>
  </div>
</template>

<script>
import ListNewsCate from "./ListNewsCate";
export default {
  data() {
    return {
      form: {
        name: null,
      },
    };
  },
  computed: {
     newsCates() {
       return this.$store.state.newsCate;
    },
    typeClass() {
      return `${this.$store.state.themes}`;
    },
  },
  methods: {
    submitForm(e) {
      this.$refs.submitForm.click();
    },
    onSubmit() {
      let data = JSON.stringify(this.form);
      this.$store.dispatch("addNewsCate", data);
    },
  },
  components: {
    ListNewsCate,
  },
  mounted() {
    this.$store.dispatch("getNewsCate");
  },
};
</script>

<style>
.box_Option {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>