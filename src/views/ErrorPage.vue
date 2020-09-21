<template>
  <div class="errorPage">
    <div>
      <h2>404 Trang không tồn tại</h2>
      <button @click="backToHome" class="btn btn-danger mt-5"><i class="fas fa-undo-alt"></i> Trở về Trang Chủ</button>
      </div>
    <img src="src/assets/uploads/Animal/images (1).jpg" alt="">
    
  </div>
</template>

<script>
export default {
    methods: {
      backToHome() {
        this.$router.push({name: 'Home'})
      }
    }
}
</script>

<style>
.errorPage {
  padding: 100px 380px;
  display: flex;
  justify-content: space-around;
}

</style>