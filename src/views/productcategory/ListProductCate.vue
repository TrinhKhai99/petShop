<template>
  <tr>
    <td>{{ productCate.productCategoryId }}</td>
    <td>
      <router-link :to="{ name: 'productCate', params: { id:productCate.productCategoryId }}">{{productCate.name}}</router-link>
    </td>
    <td> {{ getDateCreate  }}</td>
    <td> {{ getDateModi }}</td>
    <td> {{ productCate.status }}</td>
    <td>
      <button class="btn btn-sm btn-primary">Sửa</button>
      <button class="btn btn-sm btn-danger" @click="deleteProCate">Xoá</button>
    </td>
  </tr>
</template>

<script>

export default {
    props: ["productCate"],
    methods: {
      deleteProCate() {
        this.$store.dispatch("deleteProCate", this.productCate.productCategoryId)
      }
    },
    computed: {
        getDateCreate() {
        let dates = new Date(this.productCate.createdDate);
        return dates.toDateString();
      },
      getDateModi() {
        let dates = new Date(this.productCate.modifiedDate);
        return dates.toDateString();
      }
    },
    components: {
      
    }
}
</script>

<style>

</style>