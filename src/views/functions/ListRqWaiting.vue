<template>
  <tr>
    <td>{{ rq.requesrAdoptionPerId }}</td>
    <td>{{rq.fullName}}</td>
    <td>
      <router-link
        class="aDefault"
        :to="{ name: 'petdetail', params: { id:rq.petDTO.petId }}"
      >{{rq.petDTO.petName}}</router-link>
    </td>
    <td>{{rq.content}}</td>
    <td>{{rq.address}}</td>
    <td>{{ rq.phoneNumber}}</td>
    <td>{{ getDateCreate }}</td>
    <td>{{rq.requestAdoptionPetStatusDetailDTOS[0].requestAdoptionPetStatusDTO.name}}</td>
    <td>
      <button class="btn btn-sm btn-success" @click="handing">Xác Nhận</button>
      <button class="btn btn-sm btn-danger">Xoá</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["rq"],
  data() {
    return {
      form: {
        requestAdoptionPetStatusDTO: {
          id: 2,
        },
        requestAdoptionPetDTO: {
          requesrAdoptionPerId: this.rq.requesrAdoptionPerId,
        },
      },
    };
  },
  computed: {
    getDateCreate() {
      let dates = new Date(this.rq.createdDate);
      return dates.toDateString();
    },
  },
  methods: {
    handing() {
        let data = JSON.stringify(this.form)
    console.log(data)
      this.$store.dispatch("handingWait", data);
      this.$router.push('/admin/requestpets/contacting')
    },
  },
};
</script>

<style>
</style>