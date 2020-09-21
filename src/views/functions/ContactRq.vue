<template>
  <div  >
      
      <div  class="box_Option mb-4">
        <select class="form-control form-control-sm" style="width: 150px">
        <option value="5">Đang Liên Hệ</option>
        <option value="3">Chưa Liên Hệ Được</option>
      </select>
      <select @change="ChangeTabSelect($event)" class="form-control form-control-sm" style="width: 150px">
        <option value="1">Tìm Theo SĐT</option>
        <option value="2">Tìm Theo ID</option>
      </select>
      <form v-if="tabSelected != 2">
        <input
          type="text"
          v-model="searchRqValue"
          v-on:keyup.enter="searchRqPet"
          class="form-control form-control-sm"
          placeholder="Tìm kiếm Theo SĐT"
          style="width: 150px"
        />
      </form>
      <form v-else-if="tabSelected != 1">
        <input
          type="number"
          v-model.number="searchRqsByID"
          v-on:keyup.enter="searchRqPetById"
          class="form-control form-control-sm"
          placeholder="Tìm kiếm Theo ID"
          style="width: 150px"
        />
      </form>
      <select @change="selectRecord" class="form-control form-control-sm" style="width: 100px">
        <option selected value="4">4</option>
        <option value="8">8</option>
        <option value="12">12</option>
      </select>
      
    </div>
      <table :class="typeClass" class="table table-bordered table-hover table-Light">
      <thead>
        <tr>
          <th>ID</th>
          <th>Người gửi</th>
          <th>Tên Pet</th>
          <th>Tin nhắn</th>
          <th>Địa Chỉ</th>
          <th>Số điện thoại</th>
          <th>Thời gian gửi</th>
          <th>Trạng thái</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        <ListRequestPet v-for="(rq, index) in requests.objects" :key="index" :rq="rq" />
      </tbody>
    </table>
    <Paginate :ob="requests" @thisPage="getCurPage" />
    </div>
</template>

<script>
import Paginate from "../Paginate";
import ListRequestPet from './ListRequestPet'
export default {
    data() {
        return {
          tabSelectStatus: "contacting",
            tabSelected: 1,
            searchRqValue: '',
            searchRqsByID: null,
            selectRecord: '',
            findPetRqStatus: 2,
        }
    },
    computed: {
        requests() {
        return this.$store.state.rqPetStatus_Contact;
        },
        typeClass() {
        return `${this.$store.state.themes}`
        }
  },
  methods: {
    changeTabStatus(tab) {
      this.tabSelectStatus = tab
    },
      ChangeTabSelect(e) {
        this.tabSelected = e.target.value;
        console.log(this.tabSelected)
    },
    searchRqPet() {
         this.$store.dispatch("getResultRqPets", this.searchRqValue);
    },
    searchRqPetById(){
        this.$store.dispatch("getResultRqPetsById", this.searchRqsByID);
    }
  },
  components: {
      ListRequestPet,
      Paginate
  },
  mounted() {
      this.$store.dispatch("setRqStatus_Contact", this.findPetRqStatus);
  }

}
</script>

<style>

</style>