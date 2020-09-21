<template>
<div>
    <div class="btn-group dropleft themesAdmin">
  <button type="button" class="btn dropdown-toggle btn_Custom" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   <i class="fas fa-tshirt"></i>
  </button>
  <div class="dropdown-menu ">
    <button class="dropdownItem1" @click="setDark"></button>
    <button class="dropdownItem2" @click="setStriped"></button>
  </div>
</div>

    <!-- <div class="btn-group dropleft themesAdmin">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <i class="fas fa-tshirt"></i>
  </button>
  <div class="dropdown-menu dropdownMenu">
    <button class="dropdownItem1" @click="setDark"></button>
    <button class="dropdownItem2" @click="setStriped"></button>
  </div>
</div> -->
</div>
</template>

<script>
export default {
    data() {
        return {
            color: {
                dark: 'table-dark',
                striped :'table-striped'
            }
        }
    },
    methods: {
        setDark(e) {
            this.$store.dispatch("setDark", this.color.dark)
        },
        setStriped() {
            this.$store.dispatch("setStriped", this.color.striped)
        }
    },
}
</script>

<style scoped>
.themesAdmin {
    position: fixed;
    top: 0;
    right: 0;
    margin: 100px 30px 0 0;
    z-index: 999;
}
.dropdownMenu {
    display: flex;
    justify-content: space-around;
}
.dropdownItem1 {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: #212529;
    border: 1px;
    border-radius: 50%;
}
.dropdownItem2 {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: #f2f2f2;
    border: 1px;
    border-radius: 50%;
}
.btn_Custom {
    background-color: #ffb8b8
}
.btn_Custom i {
    color: #c56cf0;
}
</style>