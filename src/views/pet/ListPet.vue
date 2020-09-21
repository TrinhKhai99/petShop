<template>
  <tr>
    <td>{{ pet.petId }}</td>
    <td>
      <router-link :to="{ name: 'petdetail', params: { id:pet.petId }}">{{pet.petName}}</router-link>
    </td>
    <td>{{pet.weight}}kg</td>
    <td>{{pet.age}} tháng</td>
    <td>{{pet.color}}</td>
    <td>{{ pet.breed}}</td>
    <td>{{pet.gender}}</td>
    <td>{{ getDateCreate }}</td>
    <td>
      <img
          class="img_ListUser"
          v-bind:src="'https://comic.j.layershift.co.uk/pet/image/' + pet.image"
        />
    </td>
    <td v-if="pet.petStatusDTOS[0]">{{pet.petStatusDTOS[0].petStatusTypeDTO.name}}</td>
    <td v-else>Chưa cập nhật</td>
    <td>
      <router-link tag="button" class="btn btn-info" :to="{ name: 'petdetail', params: { id:pet.petId }}">Chi Tiết</router-link>
    </td>
  </tr>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: null
    }
  },
  props: ["pet"],
  components: {},
  computed: {
    statusPet() {
      if(this.pet.status === 'show')
      return 'Hiển thị'
      else
      return 'Ẩn'
    },
    getDateCreate() {
        let dates = new Date(this.pet.createdDate);
        return dates.toDateString();
      },
      getDateModi() {
        let dates = new Date(this.pet.modifiedDate);
        return dates.toDateString();
      }
  },
  methods: {
    // deletPet() {
    // //   let data = JSON.stringify(this.pet.petId);
    // //   console.log(data);
    // //   let config = {
    // //     headers: {
    // //       "Content-Type": "application/json",
    // //     },
    // //     data:  [{"petId": this.pet.petId}]
    // //   };
    // //  axios
    // //     .delete("http://petadoption.j.layershift.co.uk/pet/", config )
    // //     .then(response => {
    // //       console.log(response);
    // //     });
    // this.$store.dispatch("deletePet", this.pet.petId)
    // }
  }
};
</script>

<style scoped>
.img_ListUser {
  width: 50px;
  height: 50px;
  border: 1px;
  border-radius: 50%;
}

td:hover {
  overflow: visible;
}
</style>>