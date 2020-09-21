<template>
  <tr >
    <td>{{newsCate.newsCategoryId}}</td>
    <td v-if="tabSelected !='update'"><input v-model="form.name" :placeholder="newsCate.name" type="text" class="form-control form-control-sm"></td>
    <td v-else-if="tabSelected !='close'">{{newsCate.name}}</td> 
    <td  v-if="tabSelected !='close'">
      <button class="btn btn-sm btn-warning" @click="changeTab('close')">Sửa</button>
    </td>
    <td v-else-if="tabSelected !='update'">
      <button class="btn btn-sm btn-warning" @click="updateNewsCate('update')">Xác Nhận</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["newsCate",],
  data() {
    return {
       tabSelected: "update",
      form: {
        newsCategoryId: this.newsCate.newsCategoryId,
        name: null,
      },
    };
  },
  computed: {},
  methods: {
      changeTab(tab) {
          this.tabSelected = tab
      },
    submitForm(e) {
        console.log("Danh Mục Trước khi gửi request Sửa Là: ",this.form.newsCategoryId)
      this.$refs.submitForm.click();
    },
    getNewsCateDetail() {
      
    },
    updateNewsCate(tab) {
     this.tabSelected = tab
    let data = JSON.stringify(this.form)
    this.$store.dispatch("updateNewsCate", data);
    },
  },
};
</script>

<style>
</style>