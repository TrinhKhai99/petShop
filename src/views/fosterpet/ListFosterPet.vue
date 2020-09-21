<template>
  <tr>
    <td>{{fosterPet.fosterPetId}}</td>
    <td>{{fosterPet.content}}</td>
    <td>{{new Date(fosterPet.fosterDate).toDateString()}}</td>
    <td>{{fosterPet.employeeDTO.fullName}}</td>
    <td>
      <p v-if="!fosterPet.petDTOS[0]">
        Chưa Có Thú Nuôi Chăm Sóc
        <i style="color:red" class="fas fa-heart-broken"></i>
      </p>
      <p v-else-if="fosterPet.petDTOS[0]">
        {{fosterPet.petDTOS[(fosterPet.petDTOS.length) -1].petName}}
      <span class="badge badge-danger">New</span>
      </p>
    </td>
    <td>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" disabled class="btn btn-sm btn-danger">
          <i class="far fa-edit"></i>
        </button>
        <router-link tag="button" class="btn btn-sm btn-info" :to="{ name: 'DetailFoster', params: { id:fosterPet.fosterPetId }}">Chi Tiết</router-link>
        
        <button
          type="button"
          class="btn btn-sm btn-success"
          data-toggle="modal"
          data-target="#pet"
          @click="addPet"
          data-dismiss="modal"
        >Thêm</button>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["fosterPet"],
  data() {
    return {
      form: {
        fosterPetId: this.fosterPet.fosterPetId,
      },
    };
  },

  methods: {
    addPet() {
      this.form.fosterPetId = this.fosterPet.fosterPetId;
      // this.form.data.petId = this.$store.state.petRescueId
      this.$store.dispatch("setFosterPetId", this.form);
    },
  },
};
</script>

<style>
</style>