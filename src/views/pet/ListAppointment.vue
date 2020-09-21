<template>
  <tr>
    <td>{{ appointment.id }}</td>
    <td><router-link :to="{ name: 'HadingRqPet', params: { id:appointment.requestAdoptionPetDTO.requesrAdoptionPerId }}" >{{appointment.requestAdoptionPetDTO.fullName}}</router-link></td>
    <td>{{ new Date(appointment.appointmentDate).toDateString() }}</td>
    <td>{{ appointment.content }}</td>
    <td>{{getDateCreate }}</td>
    <td>{{ appointment.requestAdoptionPetAppointmentStatusDetailDTOs[0].requestAdoptionPetStatusAppointmentDTO.name }}</td>
    <td>
      <button class="btn btn-sm btn-success mt-2" v-if="isContact ==='Xác Nhận'" >Xác Nhận</button>
        <!-- <router-link :to="{name: 'HadingRqPet', params: { id:rq.requesrAdoptionPerId }}" class="btn btn-sm btn-primary" v-else-if="isContact ==='Xử Lý'" >Xử Lý</router-link> -->
        <router-link :to="{ name: 'HandingAppoint', params: { id:appointment.id }}" class="btn btn-sm btn-primary mt-2" v-else-if="isContact ==='Xử Lý'">Xử Lý</router-link>
        <router-link :to="{ name: 'HandingAppoint', params: { id:appointment.id }}" class="btn btn-sm btn-info mt-2" >Chi Tiết</router-link>
    </td>
  </tr>
</template>

<script>
export default {
    props: ["appointment"],
    methods: {
        
    },
    computed: {
        getDateCreate() {
        let dates = new Date(this.appointment.requestAdoptionPetDTO.createdDate);
        return dates.toDateString();
      },
      isContact() {
        console.log(this.appointment.requestAdoptionPetAppointmentStatusDetailDTOs[0].requestAdoptionPetStatusAppointmentDTO.id)
        if(this.appointment.requestAdoptionPetAppointmentStatusDetailDTOs[0].requestAdoptionPetStatusAppointmentDTO.id === 1) {
          return 'Xác Nhận'
        }
        // else if(this.appointment.requestAdoptionPetAppointmentStatusDetailDTOs[0].requestAdoptionPetStatusAppointmentDTO.id === 2 || this.appointment.requestAdoptionPetAppointmentStatusDetailDTOs[0].requestAdoptionPetStatusAppointmentDTO.id === 3) {
        //   return 'Xử Lý'
        // }
        else return ''
      },
    }
}
</script>

<style>

</style>