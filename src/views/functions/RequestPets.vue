<template>
  <div>
    <div class="rqPet_Option mb-5">
      <div>
        <router-link
          exact
          active-class="highlight"
          tag="a"
          class="btn_Option"
          :to="{ path: '/admin/requestpets' }"
        >Tất Cả</router-link>
      </div>
      <div>
        <router-link
          exact
          active-class="highlight"
          tag="a"
          class="btn_Option"
          :to="{ name: 'Wait' }"
        >Đang Chờ</router-link>
      </div>
      <div>
        <router-link
          exact
          active-class="highlight"
          tag="a"
          class="btn_Option"
          :to="{ name: 'ContactRq' }"
        >Đang Liên Hệ</router-link>
      </div>
      <div>
        <router-link
          exact
          active-class="highlight"
          tag="a"
          class="btn_Option"
          :to="{ name: 'SuccessRq' }"
        >Thành Công</router-link>
      </div>
      <div>
        <router-link
          exact
          active-class="highlight"
          tag="a"
          class="btn_Option"
          :to="{ name: 'CancelRq' }"
        >Huỷ</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import ListRequestPet from "./ListRequestPet";
export default {
  data() {
    return {
      tabSelected: 1,
      searchRqValue: "",
      searchRqsByID: null,
      selectRecord: "",
      findPetRqStatus: null,
    };
  },

  methods: {
    findStatus(e) {
      this.findPetRqStatus = e.target.value;
      this.$store.dispatch("setRqStatus", this.findPetRqStatus);
    },
    searchRqPet() {
      this.$store.dispatch("getResultRqPets", this.searchRqValue);
    },
    searchRqPetById() {
      this.$store.dispatch("getResultRqPetsById", this.searchRqsByID);
    },
  },
  components: {
    ListRequestPet,
  },
  created() {
    this.$store.dispatch("getRqPet");
  },
  mounted() {
    
  },
};
</script>

<style>
.box_Option {
  display: flex;
  justify-content: space-around;
}
.rqPet_Option {
  width: 50%;
  display: flex;
  justify-content: space-around;
}
.rqPet_Option:hover {
  cursor: pointer;
}
.btn_Option {
  color: #000000;
  font-size: 1rem;
  font-weight: 500;
  border: 2px solid;
  padding: 8px 10px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: none;
}
.btn_Option:hover {
  text-decoration: none;
  color: #ee4d2d;
}
.highlight {
  font-weight: bold;
  border-bottom: 2px solid #ee4d2d;
  color: #ee4d2d;
}
</style>