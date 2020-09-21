<template>
   <div class="box">
     <div class="box_Item">
       <h3 class="mb-4">Cập nhật trạng thái</h3>
        <p v-for="(statistical, index) in statisticals.objects" :key="index">
       <span v-if="statistical.petStatusTypeDTO.petStatusTypeId == 3"><i style="color:red; font-size: 1.2rem" class="fas fa-minus-circle"></i></span>
       <span v-else-if="statistical.petStatusTypeDTO.petStatusTypeId == 1"><i style="color:#7158e2; font-size: 1.2rem" class="fas fa-recycle"></i></span>
       <span v-else-if="statistical.petStatusTypeDTO.petStatusTypeId == 4"><i style="color:#17c0eb; font-size: 1.2rem" class="fas fa-first-aid"></i></span>
       <span v-else-if="statistical.petStatusTypeDTO.petStatusTypeId == 5"><i style="color:#3ae374; font-size: 1.2rem" class="fas fa-home"></i></span>
       <span v-else-if="statistical.petStatusTypeDTO.petStatusTypeId == 6"><i style="color:#3ae374; font-size: 1.2rem" class="fas fa-paw"></i></span>
       <span v-else-if="statistical.petStatusTypeDTO.petStatusTypeId == 2"><i style="color:#2c2c54; font-size: 1.2rem" class="fas fa-dog"></i></span>
       {{statistical.petDTO.petId}} -
       <b><router-link :to="{ name: 'petdetail', params: { id:statistical.petDTO.petId }}">{{statistical.petDTO.petName}}</router-link></b>
       {{statistical.petStatusTypeDTO.name}} -
       ({{new Date(statistical.date).toDateString()}})
     </p>
     </div>
     <div class="box_Item">
       <h3 class="mb-4">Xử Lý</h3>
       <p> Bạn có <b>{{getTotalRq.totalItem}}</b> yêu cầu chưa xử lý</p>
       <p>Bạn có <b>{{appointToday.totalItem}}</b> cuộc hẹn ngày hôm nay</p>
     </div>
     <div class="box_Item"></div>
     
   </div>
</template>
<script>

export default {
  data() {
    return {
      page: 1,
    }
  },
 computed: {
   statisticals() {
     return this.$store.state.statistical;
   },
   getTotalRq() {
      return this.$store.state.totalRqItem;
    },
    appointToday() {
      return this.$store.state.appointToday;
    }
 },
  created() {
    let data = {
      page : this.page
    } 
    this.$store.dispatch("getStatistical", data);
  }
};
</script>

<style>
.box {
  display: flex;
  justify-content: space-around;
}
.box_Item {
  width: 30%;
  padding: 20px 15px;
  background-color: #f7f7f9;
  border-radius: 12px;
}
</style>