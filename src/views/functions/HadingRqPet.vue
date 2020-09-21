<template>
  <div class="box_Option">
    <div class="box_">
      <div class="humanRq mb-5">
        <h3 class="text-center">Thông Tin Người Gửi</h3>
        <p class="mt-4">
          <b>Tên Người Gửi</b>
          : {{ requests.fullName }}
        </p>
        <p class="mt-2">
          <b>Số Điện Thoại</b>
          : {{ requests.phoneNumber }}
        </p>
        <p class="mt-2">
          <b>Địa chỉ</b>
          : {{ requests.address }}
        </p>
        <p class="mt-2">
          <b>Nội dung</b>
          : {{ requests.content }}
        </p>
        <p class="mt-2">
          <b>Ngày gửi</b>
          : {{ getDateCreate }}
        </p>
      </div>
      <div class="petRq">
        <h3 class="text-center">Thông Tin Thú Cưng</h3>
        <p class="mt-4">
          <b>Mã thú cưng</b>
          : {{ requests.petDTO.petId }}
        </p>
        <p class="mt-2">
          <b>Tên Thú Cưng</b>
          : {{ requests.petDTO.petName }}
        </p>
        <p class="mt-2">
          <b>Tuổi</b>
          : {{ requests.petDTO.age }}
        </p>
        <p class="mt-2">
          <b>Giống</b>
          : {{ requests.petDTO.breed }}
        </p>
        <p class="mt-2">
          <b>Màu</b>
          : {{ requests.petDTO.color }}
        </p>
        <p class="mt-2">
          <b>Giới tính</b>
          : {{ requests.petDTO.gender }}
        </p>
      </div>
    </div>
    <div>
      <div class="stateStatus">
        <h3>Thông Tin Và Trạng Thái</h3>
        <div
          class="mt-4"
          v-for="(i, index) in requests.requestAdoptionPetStatusDetailDTOS"
          :key="index"
        >
          <p class="statusName">{{ i.requestAdoptionPetStatusDTO.name }}</p>
          <p>
            Người Xử Lý:
            <b>{{ i.userDTO.userName }}</b>
          </p>
          <p>
            Ngày Xử Lý:
            <b>{{ new Date(i.createdDate).toDateString() }}</b>
          </p>
          <p>Ghi Chú: {{ i.content }}</p>
        </div>
        <h3 class="mt-4">Cập Nhật Trạng Thái</h3>
        <div
          class="mt-4"
          v-if="(requests.requestAdoptionPetStatusDetailDTOS[requests.requestAdoptionPetStatusDetailDTOS.length-1].requestAdoptionPetStatusDTO.id == 2)"
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
          >Cuộc Hẹn</button>
        </div>
        <div
          class="mt-4"
          v-else-if="(requests.requestAdoptionPetStatusDetailDTOS[requests.requestAdoptionPetStatusDetailDTOS.length-1].requestAdoptionPetStatusDTO.id == 3)"
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
          v-else-if="(requests.requestAdoptionPetStatusDetailDTOS[requests.requestAdoptionPetStatusDetailDTOS.length-1].requestAdoptionPetStatusDTO.id == 5)"
        >
          <h5>Đang Giao Dịch</h5>
        </div>
        <div
          class="mt-4"
          v-else-if="(requests.requestAdoptionPetStatusDetailDTOS[requests.requestAdoptionPetStatusDetailDTOS.length-1].requestAdoptionPetStatusDTO.id == 7)"
        >
          <h5>Đã Hủy</h5>
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
                <h5 class="modal-title" id="exampleModalLongTitle">Cuộc Hẹn</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="form-group">
                  <label for="message-text" class="col-form-label">Ghi Chú</label>
                  <textarea
                    class="form-control"
                    v-model="form3.data.requestAdoptionPetDTO.requestAdoptionPetAppointmentDTOS[0].content"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="message-text" class="col-form-label">Ngày Hẹn</label>
                  <DatePicker
                    :mode="form3.mode"
                    v-model="form3.data.requestAdoptionPetDTO.requestAdoptionPetAppointmentDTOS[0].appointmentDate"
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-dismiss="modal"
                  @click="Appointment(5)"
                >Xác Nhận</button>
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
                  @click="cancelRq(7)"
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
                <h5 class="modal-title" id="exampleModalLabel">Lý do</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <textarea v-model="form.content" type="text" class="form-control"></textarea>
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
</template>

<script>
import Calendar from "v-calendar/lib/components/calendar.umd";
import DatePicker from "v-calendar/lib/components/date-picker.umd";
export default {
  data() {
    return {
      form3: {
        mode: "single",
        data: {
          requestAdoptionPetStatusDTO: {
            id: 5,
          },
          requestAdoptionPetDTO: {
            requesrAdoptionPerId: this.id,
            requestAdoptionPetAppointmentDTOS: [
              {
                content: "",
                requestAdoptionPetDTO: {
                  requesrAdoptionPerId: this.id,
                },
                appointmentDate: null,
              },
            ],
            conent: "",
          },
        },
      },
      form: {
        content: "",
        requestAdoptionPetDTO: {
          requesrAdoptionPerId: null,
        },
        requestAdoptionPetStatusDTO: {
          id: 3,
        },
      },
      form1: {
        content: "",
        requestAdoptionPetDTO: {
          requesrAdoptionPerId: null,
        },
        requestAdoptionPetStatusDTO: {
          id: 2,
        },
      },
      form2: {
        content: "",
        requestAdoptionPetDTO: {
          requesrAdoptionPerId: null,
        },
        requestAdoptionPetStatusDTO: {
          id: 7,
        },
      },
    };
  },
  props: ["id"],
  computed: {
    requests() {
      return this.$store.state.rqStatePet;
    },
    typeClass() {
      return `${this.$store.state.themes}`;
    },
    getDateCreate() {
      let dates = new Date(this.$store.state.rqStatePet.createdDate);
      return dates.toDateString();
    },
  },
  methods: {
    Conf(e) {
      this.form.requestAdoptionPetStatusDTO = { id: e };
      this.form.requestAdoptionPetDTO.requesrAdoptionPerId = this.id;
      console.log(this.form);
      this.$store.dispatch("conf", this.form);
    },
    getContact(e) {
      this.form1.requestAdoptionPetStatusDTO = { id: e };
      this.form1.requestAdoptionPetDTO.requesrAdoptionPerId = this.id;
      console.log(this.form1);
      this.$store.dispatch("updateRqContact", this.form1);
    },
    cancelRq(e) {
      this.form2.requestAdoptionPetStatusDTO = { id: e };
      this.form2.requestAdoptionPetDTO.requesrAdoptionPerId = this.id;
      console.log(this.form2);
      this.$store.dispatch("cancelRq", this.form2);
    },
    Appointment(e) {
      this.form3.data.requestAdoptionPetStatusDTO = { id: e };
      console.log(this.form3);
      this.$store.dispatch("Appointment", this.form3.data);
    },
  },
  created() {
    this.$store.dispatch("requesrAdoptionPerId", this.id);
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
</style>