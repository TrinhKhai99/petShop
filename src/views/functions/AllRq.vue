<template>
  <div  >

      <div  class="box_Option mb-4">
      <select @change="findStatus" class="form-control form-control-sm" style="width: 100px">
        <option selected value="" >Tất cả</option>
        <option  value="1">Đang chờ</option>
        <option value="2">Đang Liên Hệ</option>
        <option value="6">Thành Công</option>
        <option value="7">Huỷ</option>
      </select>
      <select @change="ChangeTabSelect($event)" class="form-control form-control-sm" style="width: 150px">
        <option value="1">Tìm Theo SĐT</option>
        <option value="2">Tìm Theo ID</option>
      </select>
      <form v-if="tabSelected != 2">
        <input
          type="text"
          v-model="searchRqValue"
          v-on:keyup="searchRqPet"
          class="form-control form-control-sm"
          placeholder="Tìm kiếm Theo SĐT"
          style="width: 150px"
        />
      </form>
      <form v-else-if="tabSelected != 1">
        <input
          type="number"
          v-model.number="searchRqsByID"
          v-on:keyup="searchRqPetById"
          class="form-control form-control-sm"
          placeholder="Tìm kiếm Theo ID"
          style="width: 150px"
        />
      </form>
      <select @change="selectRecords" v-model="selectRecord" class="form-control form-control-sm" style="width: 100px">
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
      <tbody v-if="(requests.objects).length == 0">
        <tr>
          <td colspan="9"><i style="color:red; font-size: 1.1rem" class="fas fa-exclamation-triangle"></i> Không tìm thấy kết quả</td>
        </tr>
      </tbody>
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
          tabSelectStatus: "all",
            tabSelected: 1,
            searchRqValue: '',
            searchRqsByID: null,
            selectRecord: 4,
            findPetRqStatus: null,
            page: 1,
        }
    },
    computed: {
        requests() {
        return this.$store.state.rqPet;
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
    findStatus (e) {
      this.findPetRqStatus = e.target.value;
      this.$store.dispatch("setRqStatus", this.findPetRqStatus);
    },
    searchRqPet() {
         this.$store.dispatch("getResultRqPets", this.searchRqValue);
    },
    searchRqPetById(){
        this.$store.dispatch("getResultRqPetsById", this.searchRqsByID);
    },
    selectRecords() {
      let datas = {
          page : this.page,
          record : this.selectRecord,
          category : this.selectCategory,
          search: this.searchRqValue,
          status: this.findPetRqStatus
        };
      this.$store.dispatch("getRqPet", datas);
    },
    getCurPage(data) {
      this.page = data.curPage;
      console.log(" Page hiện tại =", this.page);
      let datas = {
          page : this.page,
          record : this.selectRecord,
          category : this.selectCategory,
          search: this.searchRqValue,
          status: this.findPetRqStatus
        };
      this.$store.dispatch("getRqPet", datas);
    },
  },
  components: {
      ListRequestPet,
      Paginate
  },
  mounted() {
    let datas = {
          page : this.page,
          record : this.selectRecord,
          category : this.selectCategory,
          search: this.searchRqValue,
          status: this.findPetRqStatus
        };
      this.$store.dispatch("getRqPet", datas)
      
  }

}
</script>

<style>

</style>