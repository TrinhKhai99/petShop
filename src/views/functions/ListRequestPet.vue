<template>
  <tr>
    <td>{{ rq.requesrAdoptionPerId }}</td>
    <td>
      {{rq.fullName}}
    </td>
    <td><router-link class="aDefault" :to="{ name: 'petdetail', params: { id:rq.petDTO.petId }}">{{rq.petDTO.petName}}</router-link></td>
    <td>{{rq.content}}</td>
    <td>{{rq.address}}</td>
    <td>{{ rq.phoneNumber}}</td>
    <td>{{ getDateCreate }}</td>
    <td>{{rq.requestAdoptionPetStatusDetailDTOS[0].requestAdoptionPetStatusDTO.name}}</td>
    <td>
        <button class="btn btn-sm btn-success mt-2" @click="handing" v-if="isContact ==='Xác Nhận'" >Xác Nhận</button>
        <!-- <router-link :to="{name: 'HadingRqPet', params: { id:rq.requesrAdoptionPerId }}" class="btn btn-sm btn-primary" v-else-if="isContact ==='Xử Lý'" >Xử Lý</router-link> -->
        <router-link :to="{ name: 'HadingRqPet', params: { id:rq.requesrAdoptionPerId }}" class="btn btn-sm btn-primary mt-2" v-else-if="isContact ==='Xử Lý'">Xử Lý</router-link>
        <router-link :to="{ name: 'HadingRqPet', params: { id:rq.requesrAdoptionPerId }}" class="btn btn-sm btn-info mt-2" v-else-if="isContact !='Xử Lý'" >Chi Tiết</router-link>
      
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
      isContact() {
        console.log(this.rq.requestAdoptionPetStatusDetailDTOS[0].requestAdoptionPetStatusDTO.id)
        if(this.rq.requestAdoptionPetStatusDetailDTOS[0].requestAdoptionPetStatusDTO.id === 1) {
          return 'Xác Nhận'
        }
        else if(this.rq.requestAdoptionPetStatusDetailDTOS[0].requestAdoptionPetStatusDTO.id === 2 || this.rq.requestAdoptionPetStatusDetailDTOS[0].requestAdoptionPetStatusDTO.id === 3) {
          return 'Xử Lý'
        }
        else return ''
      }
    },
    methods: {
        handing() {
        let data = JSON.stringify(this.form)
    console.log(data)
      this.$store.dispatch("handingWait", data);
      this.$router.push('/admin/requestpets/contacting')
    },
    }
}
</script>

<style>

</style>