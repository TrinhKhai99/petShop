<template>
  <tr>
    <td>{{ product.productId }}</td>
    <td>
      <router-link :to="{ name: 'product', params: { id:product.productId }}">{{product.name}}</router-link>
    </td>
    <td>{{product.size}}</td>

    <td>{{product.weight}}</td>
    <td>{{product.price}}</td>
    <td>{{ product.userDTO.userName }}</td>
    <td>{{ product.status }}</td>
    <td>
      <img
        class="img_Product"
        v-bind:src="'https://comic.j.layershift.co.uk/pet/image/' + product.image"
        :alt="product.image"
      />
    </td>
    <td>
      <button class="btn btn-sm btn-primary">Sửa</button>
      <button class="btn btn-sm btn-danger" @click="deleteProduct" >Xoá</button>
    </td>
  </tr>
</template>

<script>
export default {
    props: ["product"],
    methods: {
      deleteProduct() {
        this.$store.dispatch("deleteProduct", this.product.productId)
      }
    }
}
</script>

<style>
.img_Product {
  width: 120px;
  height: 100px;
}
</style>