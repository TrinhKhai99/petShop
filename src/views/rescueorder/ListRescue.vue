<template>
  <tr>
    <td>{{rescue.rescueOrderId}}</td>
    <td>{{rescue.content}}</td>
    <td>{{rescue.region}}</td>
    <td>{{new Date(rescue.dateRescue).toDateString()}}</td>
    <td>{{rescue.employeeDTO.fullName}}</td>
    <td>
      <p v-if="!rescue.petDTOS[0]">
        Thú Nuôi Chưa Được Giải Cứu
        <i style="color:red" class="fas fa-heart-broken"></i>
      </p>
      <p v-else-if="rescue.petDTOS[0]">
        {{rescue.petDTOS[(rescue.petDTOS.length) -1].petName}}
      <span class="badge badge-danger">New</span>
      </p>
    </td>
    <td>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" disabled class="btn btn-sm btn-danger">
          <i class="far fa-edit"></i>
        </button>
        <router-link tag="button" class="btn btn-sm btn-info" :to="{ name: 'DetailRescue', params: { id:rescue.rescueOrderId }}">Chi Tiết</router-link>
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
  props: ["rescue"],
  data() {
    return {
      form: {
        rescueOrderId: this.rescue.rescueOrderId,
      },
    };
  },

  methods: {
    addPet() {
      this.form.rescueOrderId = this.rescue.rescueOrderId;
      // this.form.data.petId = this.$store.state.petRescueId

      this.$store.dispatch("setRescueOrderId", this.form);
    },
  },
};
</script>

<style>
</style>