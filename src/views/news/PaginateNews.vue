<template>
    <paginate
      :page-count="Number(news.totalPage)"
      :click-handler="clickCallback"
      :prev-text="'Trước'"
      :next-text="'Tiếp'"
      :container-class="'pagination'"
      :page-class="'page-item'"
      :page-link-class="'page-link'"
      :prev-class="'page-item'"
      :next-class="'page-item'"
      :prev-link-class="'page-link'"
      :next-link-class="'page-link'"
      :active-class="'active'"
    ></paginate>
</template>

<script>

export default {
    props: ["news"],
    methods: {
    clickCallback (pageNum) {
     console.log(pageNum);
     console.log(this.news.totalPage)
     let data = {
       curPage: pageNum
     }
     this.$emit('thisPage', data);
    }
  }
}
</script>

<style>
</style>