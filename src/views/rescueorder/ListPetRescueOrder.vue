<template>
  <tr>
    <td>{{ petRescueOrder.petId }}</td>
    <td>{{petRescueOrder.petName}}</td>
    <td>
            <img
              class="img_ListUser"
              v-bind:src="'https://comic.j.layershift.co.uk/pet/image/' + petRescueOrder.image"
            />
          </td>
    <td>
      <button @click="selectId(petRescueOrder.petId)" class="btn btn-sm btn-success">Chọn</button>
    </td>
  </tr>
</template>

<script>
export default {
    props: ["petRescueOrder"],
     methods: {
      selectId(id){
       let data = {
          name : this.petRescueOrder.petName,
          id: this.petRescueOrder.petId
        }
          this.$store.dispatch("setPetRescueOderId", data);
      }
  }
}
</script>

<style>
.img_ListUser {
  width: 50px;
  height: 50px;
  border: 1px;
  border-radius: 50%;
}
</style>