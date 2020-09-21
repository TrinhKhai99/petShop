<template>
  <div>
    <div class="box_Option mb-4">
      <select
        @change="ChangeTabSelect($event)"
        class="form-control form-control-sm"
        style="width: 200px"
      >
        <option value="1">Tìm Theo ID Cuộc Hẹn</option>
        <option value="2">Tìm Theo Yêu Cầu</option>
      </select>
      <form v-if="tabSelected != 2">
        <input
          type="text"
          v-model="searchAppValue"
          v-on:keyup="searchApp"
          class="form-control form-control-sm"
          placeholder="Tìm kiếm Theo ID Cuộc Hẹn"
          style="width: 200px"
        />
      </form>
      <form v-else-if="tabSelected != 1">
        <input
          type="number"
          v-model.number="searchAppByID"
          v-on:keyup="searchAppById"
          class="form-control form-control-sm"
          placeholder="Tìm kiếm Theo ID Yêu Cầu"
          style="width: 200px"
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
          <th>Khách Hàng</th>
          <th>Ngày Hẹn</th>
          <th>Ghi Chú</th>
          <th>Ngày Tạo</th>
          <th>Trạng thái</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody v-if="(appointments.objects).length == 0">
        <tr>
          <td colspan="9"><i style="color:red; font-size: 1.1rem" class="fas fa-exclamation-triangle"></i> Không tìm thấy kết quả</td>
        </tr>
      </tbody>
      <tbody>
        <ListAppoint v-for="(appointment, index) in appointments.objects" :key="index" :appointment="appointment" />
      </tbody>
    </table>
    <Paginate :ob="appointments" @thisPage="getCurPage"/>
  </div>
</template>

<script>
import Paginate from "../Paginate";
import ListAppoint from './ListAppointment.vue'
export default {
    data() {
        return {
            tabSelected: 1,
            searchAppValue: '',
            searchAppByID: '',
            selectRecord: 4,
            page : 1,
            record: 4,
        }
    },
  computed: {
    appointments() {
      return this.$store.state.getAppointment;
    },
    typeClass() {
      return `${this.$store.state.themes}`;
    },
  },
  methods: {
      ChangeTabSelect(e) {
        this.tabSelected = e.target.value;
        console.log(this.tabSelected)
    },
    selectRecords() {
        
    },
    searchApp() {
      let data = {
        page: this.page,
        record: this.record,
        search: this.searchAppValue,
        searchId: this.searchAppByID
      }
    this.$store.dispatch("getAppointment", data);
    },
    searchAppById() {
      let data = {
        search: this.searchAppValue,
        searchId: this.searchAppByID,
        page: this.page,
        record: this.record,
      }
    this.$store.dispatch("getAppointment", data);
    },
     getCurPage(data) {
      this.page = data.curPage;
      let pageRecord = {
        page: this.page,
        record: this.record,
        search: this.searchAppValue,
        searchId: this.searchAppByID
      };
      this.$store.dispatch("getAppointment", pageRecord);
    },
  },
  created() {
    let data = {
      page: this.page,
        record: this.record,
        search: this.searchAppValue,
        searchId: this.searchAppByID
      }
    this.$store.dispatch("getAppointment", data);
  },
  components: {
      ListAppoint,
      Paginate
  }
};
</script>

<style>
.box_Option {
    display: flex;
    justify-content: space-around;
}
</style>