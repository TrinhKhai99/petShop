<template>
  <div>
    <paginate
      :page-count="Number(ob.totalPage)"
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
    <!-- <paginate 
    :page-count="Number(pets.totalPage)"
    :page-range="3"
    :click-handler="clickCallback"
    :prev-text="'Trước'"
    :next-text="'Tiếp'"
    :margin-pages="3"
    :next-class="'success'"
    :container-class="'pagination'"
    :page-class="'danger'">
    </paginate>-->
  </div>
</template>

<script>
export default {
  props: ["ob"],
  methods: {
    clickCallback(pageNum) {
      console.log(pageNum);
      console.log(this.ob.totalPage);
      let data = {
        curPage: pageNum,
      };
      this.$emit("thisPage", data);
    },
  },
};
</script>

<style  scoped>
</style>