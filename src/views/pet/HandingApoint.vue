<template>
  <div>
    <button class="btn btn-info mb-3 float-right" data-toggle="modal" data-target="#exampleModalCenter3">Thay Đổi Ngày Hẹn</button>
    <div
      class="modal fade"
      id="exampleModalCenter3"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Thay Đổi Ngày Hẹn</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body canlender">
            <DatePicker :mode="form3.mode" v-model="form3.data.appointmentDate"></DatePicker>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="updateAppoint">Xác Nhận</button>
          </div>
        </div>
      </div>
    </div>
    <div class="box_Option">
      <div class="box_">
        <div class="humanRq mb-5">
          <h3 class="text-center">Thông Tin Cuộc Hẹn</h3>
          <p class="mt-4">
            <b>Mã Cuộc Hẹn</b>
            : {{ requests.id }}
          </p>
          <p class="mt-2">
            <b>Ghi Chú</b>
            : {{ requests.content }}
          </p>
          <p class="mt-2">
            <b>Ngày Hẹn</b>
            : {{new Date(requests.appointmentDate).toDateString()}}
          </p>
          <p class="mt-2">
            <b>Ngày tạo</b>
            : {{ new Date(requests.createdDate).toDateString() }}
          </p>
        </div>
        <div class="petRq">
          <h3 class="text-center">Thông Tin Người Gửi</h3>
          <p class="mt-4">
            <b>Tên Người Gửi</b>
            : {{ requests.requestAdoptionPetDTO.fullName }}
          </p>
          <p class="mt-2">
            <b>Số Điện Thoại</b>
            : {{ requests.requestAdoptionPetDTO.phoneNumber }}
          </p>
          <p class="mt-2">
            <b>Địa chỉ</b>
            : {{ requests.requestAdoptionPetDTO.address }}
          </p>
          <p class="mt-2">
            <b>Nội dung</b>
            : {{ requests.requestAdoptionPetDTO.content }}
          </p>
          <p class="mt-2">
            <b>Ngày gửi</b>
            : {{ new Date(requests.requestAdoptionPetDTO.createdDate).toDateString() }}
          </p>
          <p class="mt-2">
            <b>DEBUG</b>
            : {{ new Date(requests.requestAdoptionPetDTO.createdDate).toDateString() }}
          </p>
          
        </div>
      </div>
      <div>
        <div class="stateStatus">
          <h3>Thông Tin Và Trạng Thái</h3>
          <div
            class="mt-4"
            v-for="(i, index) in requests.requestAdoptionPetAppointmentStatusDetailDTOs"
            :key="index"
          >
            <p class="statusName">{{ i.requestAdoptionPetStatusAppointmentDTO.name }}</p>
            <p>
              Người Xử Lý:
              <b>{{ i.userDTO.userName }}</b>
            </p>
            <p>
              Ngày Xử Lý:
              <b>{{new Date(i.createdDate).toDateString() }}</b>
            </p>
            <p>Ghi Chú: {{ i.content }}</p>
          </div>
          <h3 class="mt-4">Cập Nhật Trạng Thái</h3>
          <div
            class="mt-4"
            v-if="(requests.requestAdoptionPetAppointmentStatusDetailDTOs[requests.requestAdoptionPetAppointmentStatusDetailDTOs.length-1].requestAdoptionPetStatusAppointmentDTO.id == 1)"
          ><button
              class="btn btn-sm btn-warning"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >Đang Liên Hệ</button>
            <button
              class="btn btn-sm btn-danger"
              data-toggle="modal"
              data-target="#exampleModalCenter1"
            >Hủy</button>
          </div>
          <div
            class="mt-4"
            v-else-if="(requests.requestAdoptionPetAppointmentStatusDetailDTOs[requests.requestAdoptionPetAppointmentStatusDetailDTOs.length-1].requestAdoptionPetStatusAppointmentDTO.id == 2)"
          >
          <button
              class="btn btn-sm btn-warning"
              data-toggle="modal"
              data-target="#exampleModal"
            >Không Liên Hệ Được</button>
            <button
              class="btn btn-sm btn-success"
              data-toggle="modal"
              data-target="#exampleModalCenter2"
            >Thành Công</button>
            <button
              class="btn btn-sm btn-danger"
              data-toggle="modal"
              data-target="#exampleModalCenter1"
            >Hủy</button>
            
          </div>
          <div
            class="mt-4"
            v-else-if="(requests.requestAdoptionPetAppointmentStatusDetailDTOs[requests.requestAdoptionPetAppointmentStatusDetailDTOs.length-1].requestAdoptionPetStatusAppointmentDTO.id == 3)"
          >
          <button
              class="btn btn-sm btn-warning"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >Đang Liên Hệ</button>
            <button
              class="btn btn-sm btn-danger"
              data-toggle="modal"
              data-target="#exampleModalCenter1"
            >Hủy</button>
            
          </div>
          <div
            class="mt-4"
            v-else-if="(requests.requestAdoptionPetAppointmentStatusDetailDTOs[requests.requestAdoptionPetAppointmentStatusDetailDTOs.length-1].requestAdoptionPetStatusAppointmentDTO.id == 5)"
          >
          
          <h5 class="text-danger">Đã Hủy</h5>
          </div>
          <div
            class="mt-4"
            v-else-if="(requests.requestAdoptionPetAppointmentStatusDetailDTOs[requests.requestAdoptionPetAppointmentStatusDetailDTOs.length-1].requestAdoptionPetStatusAppointmentDTO.id == 4)"
          >
          
          <h5 class="text-success">Giao Dịch Thành Công</h5>
          </div>
          <div
            class="modal fade"
            id="exampleModalCenter2"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">Thành Công</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="form-group">
                    <label for="message-text" class="col-form-label">Ghi Chú</label>
                    <textarea class="form-control" v-model="form4.content"></textarea>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                  <button type="button" class="btn btn-primary" data-dismiss="modal" @click="Appointment(4)">Xác Nhận</button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="exampleModalCenter1"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">Hủy</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="form-group">
                    <label for="message-text" class="col-form-label">Ghi Chú</label>
                    <textarea class="form-control" v-model="form2.content"></textarea>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-dismiss="modal"
                    @click="cancelRq(5)"
                  >Xác Nhận</button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">Đang Liên Hệ</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="form-group">
                    <label for="message-text" class="col-form-label">Ghi Chú</label>
                    <textarea class="form-control" v-model="form1.content"></textarea>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-dismiss="modal"
                    @click="getContact(2)"
                  >Xác Nhận</button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Không Liên Hệ Được</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <textarea v-model="form2.content" type="text" class="form-control"></textarea>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-dismiss="modal"
                    @click="Conf(3)"
                  >Xác Nhận</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Calendar from "v-calendar/lib/components/calendar.umd";
import DatePicker from "v-calendar/lib/components/date-picker.umd";
export default {
  data() {
    return {
      form4: {
        content: "",
        requestAdoptionPetStatusAppointmentDTO: {
          id: 4,
        },
        requestAdoptionPetAppointmentDTO: {
          id: null,
        },
      },
      form3: {
        mode: "single",
        data: {  
            id: null,
          appointmentDate: null,
        },
      },
      form: {
        content: "",
        requestAdoptionPetStatusAppointmentDTO: {
          requesrAdoptionPerId: 5,
        },
        requestAdoptionPetAppointmentDTO: {
          id: null,
        },
      },
      form1: {
        content: "",
        requestAdoptionPetStatusAppointmentDTO: {
          id: 2,
        },
        requestAdoptionPetAppointmentDTO: {
          id: null,
        },
      },
      form2: {
        conent: "",
        requestAdoptionPetStatusAppointmentDTO: {
          id: 3,
        },
        requestAdoptionPetAppointmentDTO: {
          id: null,
        },
      },
    };
  },
  props: ["id"],
  computed: {
    requests() {
      return this.$store.state.appointmentDetail;
    },
    typeClass() {
      return `${this.$store.state.themes}`;
    },
    // getDateCreate() {
    //   let dates = new Date(this.$store.state.rqStatePet.createdDate);
    //   return dates.toDateString();
    // },
  },
  methods: {
    Conf(e) {
      this.form2.requestAdoptionPetStatusAppointmentDTO = { id: e };
      this.form2.requestAdoptionPetAppointmentDTO.id = this.id;
      console.log(this.form2);
      this.$store.dispatch("confAppoint", this.form2);
    },
    getContact(e) {
      this.form1.requestAdoptionPetStatusAppointmentDTO = { id: e };
      this.form1.requestAdoptionPetAppointmentDTO.id = this.id;
      console.log(this.form1);
      this.$store.dispatch("updateRqAppointContact", this.form1);
    },
    cancelRq(e) {
      this.form.requestAdoptionPetStatusAppointmentDTO = { id: e };
      this.form.requestAdoptionPetAppointmentDTO.id = this.id;
      console.log(this.form2);
      this.$store.dispatch("cancelAppoint", this.form);
    },
    Appointment(e) {
      
      this.form4.requestAdoptionPetStatusAppointmentDTO = { id: e };
      this.form4.requestAdoptionPetAppointmentDTO.id = this.id;
      console.log(this.form4);
      this.$store.dispatch("successAppointment", this.form4);
    },
    updateAppoint() {
      this.form3.data.id = this.id;
      this.$store.dispatch("updateAppoint", this.form3.data);
    }
  },
  created() {
    this.$store.dispatch("requesrAppointPerId", this.id);
  },
  components: {
    Calendar,
    DatePicker,
  },
};
</script>

<style>
.box_Option {
  width: 100%;
  text-transform: capitalize;
  text-align: justify;
  font-size: 1rem;
  font-weight: 400;
  background-color: #f7f7f9;
}
.box_ {
  width: 60%;
}
.humanRq {
  width: 60%;
  padding: 20px 15px;
  border: 1px;
  border-radius: 11px;
}
.stateStatus {
  width: 100%;
  padding: 20px 15px;
  min-height: 700px;
  border-left: 10px solid #ffffff;
}
.petRq {
  width: 70%;
  padding: 20px 15px;
  border: 1px;
  border-radius: 11px;
}
.statusName {
  font-size: 1.2rem;
  font-weight: bold;
  color: #7158e2;
}
.canlender {
  width: 100% !important;
  text-align: center !important;
}
</style>