<template>
  <tr>
    <td>{{ petFoster.petId }}</td>
    <td>{{petFoster.petName}}</td>
    <td>
            <img
              class="img_ListUser"
              v-bind:src="'https://petadoption.j.layershift.co.uk/pet/image/' + petFoster.image"
            />
          </td>
    <td>
      <button @click="selectId(petFoster.petId)" class="btn btn-sm btn-success">Chọn</button>
    </td>
  </tr>
</template>

<script>
export default {
    props: ["petFoster"],
     methods: {
      selectId(id){
       let data = {
          name : this.petFoster.petName,
          id: this.petFoster.petId
        }
          this.$store.dispatch("setPetFosterId", data);
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