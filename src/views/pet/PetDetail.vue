<template>
  <div class="detailPet">
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
            <h5 class="modal-title" id="exampleModalLongTitle">Cập Nhật Trạng Thái:</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Nội dung:</label>
              <input type="text" v-model="form1.content" class="form-control" id="recipient-name" />
            </div>

            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Trạng thái:</label>
              <select v-model="form1.petStatusTypeDTO.petStatusTypeId" name class="form-control" id>
                <option
                  v-for="petStatusType in petStatusTypes"
                  :value="petStatusType.petStatusTypeId"
                  :key="petStatusType.petStatusTypeId"
                >{{petStatusType.name}}</option>
              </select>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
            <button
              type="button"
              @click="addPetStatusEntry"
              class="btn btn-primary"
              data-dismiss="modal"
            >Lưu</button>
          </div>
        </div>
      </div>
    </div>
    <!-- <div id="layoutSidenav">
    <button v-on:click="ChangeTabSelect('infoPet')" class="btn btn-info">
        Thông Tin Thú Cưng
    </button>
    <button v-on:click="ChangeTabSelect('updatePet')" class="btn btn-success">
        Cập Nhật Thú Cưng
    </button>
    <div class="mt-4" id="layoutSidenav_content" v-if="tabSelected != 'updatePet'">
      <div class="card card_" style="width: 38rem;">
        <img class="card-img-top img_Avatar" :src="'https://petadoption.j.layershift.co.uk/pet/image/' + pet.image" :alt="pet.petName" />
        <div class="card-body">
          <h5 class="card-title text-center" style="font-size: 2.1rem;">{{pet.petName}}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Cân nặng: {{pet.weight}}kg</li>
          <li class="list-group-item">Tuổi: {{pet.age}} Tháng</li>
          <li class="list-group-item">Địa chỉ: {{ pet.address }}</li>
          <li class="list-group-item">Màu: {{pet.color}}</li>
          <li class="list-group-item">Giống: {{pet.breed}}</li>
          <li class="list-group-item">Giới tính: {{pet.gender}}</li>
          <li class="list-group-item">Trạng thái: {{pet.status}}</li>
          <li class="list-group-item">Ngày tạo: {{pet.createdDate}}</li>
          <li class="list-group-item">Thay đổi gần đây: {{pet.modifiedDate}}</li>
          <li class="list-group-item">Loại Pet: {{pet.petTypeDTO.petTypeName}}</li>
          <li class="list-group-item">Khử trùng: {{pet.petAboutDTO.sterilization}}</li>
          <li class="list-group-item">Tiêm Phòng: {{pet.petAboutDTO.vaccination}}</li>
          <li class="list-group-item">Tiêm dại: {{pet.petAboutDTO.inject_rabies}}</li>
          <li class="list-group-item">Thân thiện với người? : {{pet.petAboutDTO.friendly_people}}</li>
          <li class="list-group-item">Thân thiện với mèo? : {{pet.petAboutDTO.friendly_cat}}</li>
          <li class="list-group-item">Thân thiện với chó? : {{pet.petAboutDTO.friendly_dog}}</li>
          <li class="list-group-item">Đi vệ sinh đúng chỗ? : {{pet.petAboutDTO.toilet_place}}</li>
          <li class="list-group-item">Yêu cầu nhận nuôi: : {{pet.requestAdoptionPetDTOS}}</li>
          <li class="list-group-item">Trạng thái: : {{pet.petEntryStatusDTO.name}}</li>
           <li class="list-group-item">Ngày vào HNP: : {{new Date(pet.entryDate).toDateString()}}</li>
            <li class="list-group-item">Ngày vào HNP: : {{pet.petStatusDTOS[0].petStatusTypeDTO.name}}</li>
        </ul>
      </div>
    </div>
    <form action="" v-else enctype="Multipart / form-data" @submit.prevent="onSubmit">
    <div id="layoutSidenav_content" class="mt-4">
      <div class="card card_" style="width: 38rem;">
       <input type="file" @change="uploadFiles" style="display:none" ref="getImagePet"  class="form-control" />
        <img class="card-img-top img_Avatar" v-if="url"  :src="url" :alt="pet.petName" />
        <img class="card-img-top img_Avatar" v-else-if="!url" :src="'https://petadoption.j.layershift.co.uk/pet/image/' + pet.image" :alt="pet.petName" />
        <div class="card-body text-center">
          <button class="btn btn-secondary" v-on:click="getImagePet">Nhấp Để Thay Đổi Ảnh</button>
        </div>
        <div class="card-body">
          <input type="text"  v-model="form.petName" :placeholder="pet.petName" class="form-control" id="recipient-name" /> 
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            Mô tả:
            <textarea class="form-control" :placeholder="pet.description"  v-model="form.description" id="message-text"></textarea>
          </li>
          <li class="list-group-item">
            Cân nặng:
            <input type="text"  v-model="form.weight" :placeholder="pet.weight" class="form-control" id="recipient-name" />
          </li>
          <li class="list-group-item">
            Tuổi:
            <select name class="form-control" v-model="form.age" id>
              <option value="3">3 tháng</option>
              <option value="5">5 tháng</option>
              <option value="12">12 tháng</option>
              <option value="24">24 tháng</option>
            </select>
          </li>
          
          <li class="list-group-item">
            Địa chỉ:
            <input type="text" class="form-control" :placeholder="pet.address" v-model="form.address" id="message-text" />
          </li>
          <li class="list-group-item">
            Màu:
            <select name v-model="form.color" class="form-control" id>
              <option value="Đen">Đen</option>
              <option value="Trắng">Trắng</option>
              <option value="Vàng">Vàng</option>
              <option value="Mướp">Mướp</option>
              <option value="Xám">Xám</option>
              <option value="Xiêm">Xiêm</option>
              <option value="Đen trắng">Đen trắng</option>
              <option value="Trắng vàng">Trắng vàng</option>
              <option value="Tam thể">Tam thể</option>
              <option value="Nhị thể">Nhị thể</option>
              <option value="Nâu vàng">Nâu vàng</option>
              <option value="Đen vàng<">Đen vàng</option>
            </select>
          </li>
          <li class="list-group-item">
            Giống:
            <input type="text" :placeholder="pet.breed" class="form-control" v-model="form.breed" id="message-text" />
          </li>
          <li class="list-group-item">
            Giới tính:
            <select name class="form-control" v-model="form.gender" id>
              <option value="Đực">Đực</option>
              <option value="Cái">Cái</option>
              <option value="Triệt sản">Triệt sản</option>
              <option value="Chưa rõ">Chưa rõ</option>
            </select>
          </li>
          <li class="list-group-item">
            Trạng thái:
            <select name v-model="form.status" class="form-control" id>
              <option value="show">Hiển thị</option>
              <option value="hide">Ẩn</option>
            </select>
          </li>
          <li class="list-group-item">
            Ngày tạo:
            <p>{{pet.createdDate}}</p>
          </li>
          <li class="list-group-item">
            Loại Thú Nuôi:
            <select type="number" name v-model="form.petTypeDTO.petTypeId" class="form-control" id>
              <option value="1">Chó</option>
              <option value="2">Mèo</option>
              <option value="3">Khác</option>
            </select>
          </li>
          <li class="list-group-item">
            Mã thú nuôi liên quan: <input type="text" class="form-control" v-model="form.petAboutDTO.petId" name="" id="">
          
          </li>
          <li class="list-group-item">
            Khử trùng:
            <select type="number" name v-model="form.petAboutDTO.sterilization" class="form-control" id>
              <option value="Có">Có</option>
              <option value="Không">Không</option>
              <option value="Chưa rõ">Chưa rõ</option>
            </select>
          </li>
          <li class="list-group-item">
            Tiêm Phòng:
            <select name v-model="form.petAboutDTO.inject_rabies" class="form-control" id>
              <option value="Có">Có</option>
              <option value="Không">Không</option>
              <option value="Chưa rõ">Chưa rõ</option>
            </select>
          </li>
          <li class="list-group-item">
            Tiêm dại:
            <select name v-model="form.petAboutDTO.vaccination" class="form-control" id>
              <option value="Có">Có</option>
              <option value="Không">Không</option>
              <option value="Chưa rõ">Chưa rõ</option>
            </select>
          </li>
          <li class="list-group-item">
            Thân thiện với người? :
            <select name v-model="form.petAboutDTO.friendly_people" class="form-control" id>
              <option value="Có">Có</option>
              <option value="Không">Không</option>
              <option value="Chưa rõ">Chưa rõ</option>
            </select>
          </li>
          <li class="list-group-item">
            Thân thiện với mèo? :
            <select name v-model="form.petAboutDTO.friendly_cat" class="form-control" id>
              <option value="Có">Có</option>
              <option value="Không">Không</option>
              <option value="Chưa rõ">Chưa rõ</option>
            </select>
          </li>
          <li class="list-group-item">
            Thân thiện với chó? :
            <select name v-model="form.petAboutDTO.friendly_dog" class="form-control" id>
              <option value="Có">Có</option>
              <option value="Không">Không</option>
              <option value="Chưa rõ">Chưa rõ</option>
            </select>
          </li>
          <li class="list-group-item">
            Đi vệ sinh đúng chỗ? :
            <select name v-model="form.petAboutDTO.toilet_place" class="form-control" id>
              <option value="Có">Có</option>
              <option value="Không">Không</option>
              <option value="Chưa rõ">Chưa rõ</option>
            </select>
          </li>
          <li class="list-group-item">Yêu cầu nhận nuôi: : {{pet.requestAdoptionPetDTOS}}</li>
          <li class="list-group-item">
            <button type="submit" class="btn btn-info float-right">Cập Nhật</button>
          </li>
        </ul>
      </div>
    </div>
    </form>
    </div>-->
    <div class="_BoxDetailPet">
      <div class="_BoxDetailPet_Item">
        <div>
          <input
            type="file"
            @change="uploadFiles"
            style="display:none"
            ref="getImagePet"
            class="form-control"
          />
          <img
            v-if="!url"
            class="float-left mr-3 img_Avatar"
            :src="'https://petadoption.j.layershift.co.uk/pet/image/' + pet.image"
            :alt="pet.petName"
          />
          <img v-else-if="url" class="float-left mr-3 img_Avatar" :src="url" :alt="pet.petName" />
        </div>
        <div>
          <h3>{{pet.petName}}</h3>
          <p>
            Tuổi:
            <b>{{pet.age}} tháng</b>
          </p>
          <p>
            <button class="btn btn-sm btn-secondary" v-on:click="getImagePet">Nhấp Để Thay Đổi Ảnh</button>
          </p>
        </div>
      </div>
      <div class="_BoxDetailPet_Item">
        <p>
          Vị trí/trạng thái:
          <b v-if="pet.petStatusDTOS[0] == undefined">Trống</b>
          <b v-else>{{pet.petStatusDTOS[0].petStatusTypeDTO.name}}</b>
        </p>
        <p>
          Vào Ngày:
          <b>{{new Date(pet.entryDate).toDateString()}}</b>
        </p>
        <p>
          Người chăm sóc:
          <b v-if="pet.fosterPetDTO">{{pet.fosterPetDTO.employeeDTO.fullName}}</b>
          <b v-else>Chưa có</b>
        </p>
      </div>
      <div class="_BoxDetailPet_Item">
        <p>
          Bản ghi được thêm vào:
          <b>{{new Date(pet.createdDate).toDateString()}}</b>
        </p>
        <p>
          Thay đổi gần đây:
          <b>{{new Date(pet.modifiedDate).toDateString()}}</b>
        </p>
      </div>
    </div>
    <div>
      <button
        v-if="tabSelected == 'infoPet'"
        @click.prevent="onSubmit"
        class="btn btn-info float-right"
      >Cập Nhật</button>
      <button
        v-else
        class="btn btn-success float-right"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >Thêm</button>
    </div>

    <div class="mt-5">
      <div class="btn-group" role="group" aria-label="Basic example">
        <button
          type="button "
          :class="{active: tabSelected === 'infoPet' }"
          @click="ChangeTabSelect('infoPet')"
          class="btn btn-info"
        >Thông Tin</button>
        <button
          type="button "
          :class="{active: tabSelected === 'localPet' }"
          @click="ChangeTabSelect('localPet')"
          class-active="active"
          class="btn btn-primary"
        >Vị Trí/ Trạng Thái</button>
      </div>
    </div>

    <div v-if="tabSelected == 'infoPet'" id="accordion">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h5 class="mb-0">
            <button
              class="btn"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <i class="fas fa-caret-right"></i> Chi Tiết
            </button>
          </h5>
        </div>

        <div
          id="collapseOne"
          class="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div class="card-body card-Body">
            <div class="card-body-Item">
              <p>
                Tên:
                <input type="text" class="form-control" v-model="pets.form.petName" />
              </p>
              <p>
                Mô tả:
                <textarea class="form-control" v-model="pets.form.description"></textarea>
              </p>
              <p>
                Cân nặng:
                <input type="number" class="form-control" v-model.number="pets.form.weight" />
              </p>
              <p>
                Tuổi:
                <input
                  type="number"
                  class="form-control"
                  placeholder="Tháng"
                  v-model.number="form.age"
                />
              </p>
            </div>
            <div class="card-body-Item">
              <p>
                Màu:
                <select name v-model="pets.form.color" class="form-control" id>
                  <option value="Đen">Đen</option>
                  <option value="Trắng">Trắng</option>
                  <option value="Vàng">Vàng</option>
                  <option value="Mướp">Mướp</option>
                  <option value="Xám">Xám</option>
                  <option value="Xiêm">Xiêm</option>
                  <option value="Đen trắng">Đen trắng</option>
                  <option value="Trắng vàng">Trắng vàng</option>
                  <option value="Tam thể">Tam thể</option>
                  <option value="Nhị thể">Nhị thể</option>
                  <option value="Nâu vàng">Nâu vàng</option>
                  <option value="Đen vàng<">Đen vàng</option>
                </select>
              </p>
              <p>
                Giống :
                <input type="text" class="form-control" v-model="pets.form.breed" />
              </p>
              <p>
                Giới tính :
                <select name class="form-control" v-model="pets.form.gender" id>
                  <option value="Đực">Đực</option>
                  <option value="Cái">Cái</option>
                  <option value="Triệt sản">Triệt sản</option>
                  <option value="Chưa rõ">Chưa rõ</option>
                </select>
              </p>
              <p>
                Loại Thú Nuôi
                <select
                  type="number"
                  name
                  v-model="pets.form.petTypeDTO.petTypeId"
                  class="form-control"
                  id
                >
                  <option value="1">Chó</option>
                  <option value="2">Mèo</option>
                  <option value="3">Khác</option>
                </select>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingTwo">
          <h5 class="mb-0">
            <button
              class="btn collapsed"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <i class="fas fa-caret-right"></i> Lưu Ý
            </button>
          </h5>
        </div>
        <div
          id="collapseTwo"
          class="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordion"
        >
          <div class="card-body card-Body">
            <div class="card-body-Item">
              <p>
                Triệt sản:
                <select
                  type="number"
                  name
                  v-model="pets.form.petAboutDTO.sterilization"
                  class="form-control"
                  id
                >
                  <option value="có">Có</option>
                  <option value="không">Không</option>
                  <option value="Chưa rõ">Chưa rõ</option>
                </select>
              </p>
              <p>
                Tiêm dại:
                <select
                  name
                  v-model="pets.form.petAboutDTO.vaccination"
                  class="form-control"
                  id
                >
                  <option value="có">Có</option>
                  <option value="không">Không</option>
                  <option value="Chưa rõ">Chưa rõ</option>
                </select>
              </p>
              <p>
                Tiểm phòng:
                <select
                  name
                  v-model="pets.form.petAboutDTO.inject_rabies"
                  class="form-control"
                  id
                >
                  <option value="có">Có</option>
                  <option value="không">Không</option>
                  <option value="Chưa rõ">Chưa rõ</option>
                </select>
              </p>
              <p>
                Thân thiện với người:
                <select
                  name
                  v-model="pets.form.petAboutDTO.friendly_people"
                  class="form-control"
                  id
                >
                  <option value="có">Có</option>
                  <option value="không">Không</option>
                  <option value="Chưa rõ">Chưa rõ</option>
                </select>
              </p>
            </div>
            <div class="card-body-Item">
              <p>
                Thân thiện với mèo:
                <select
                  name
                  v-model="pets.form.petAboutDTO.friendly_cat"
                  class="form-control"
                  id
                >
                  <option value="có">Có</option>
                  <option value="không">Không</option>
                  <option value="Chưa rõ">Chưa rõ</option>
                </select>
              </p>
              <p>
                Thân thiện với chó:
                <select
                  name
                  v-model="pets.form.petAboutDTO.friendly_dog"
                  class="form-control"
                  id
                >
                  <option value="có">Có</option>
                  <option value="không">Không</option>
                  <option value="Chưa rõ">Chưa rõ</option>
                </select>
              </p>
              <p>
                Đi vệ sinh đúng chỗ:
                <select
                  name
                  v-model="pets.form.petAboutDTO.toilet_place"
                  class="form-control"
                  id
                >
                  <option value="có">Có</option>
                  <option value="không">Không</option>
                  <option value="Chưa rõ">Chưa rõ</option>
                </select>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingThree">
          <h5 class="mb-0">
            <button
              class="btn collapsed"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <i class="fas fa-caret-right"></i> Gia Nhập
            </button>
          </h5>
        </div>
        <div
          id="collapseThree"
          class="collapse"
          aria-labelledby="headingThree"
          data-parent="#accordion"
        >
          <div class="card-body">
            <p>
              Tình trạng trước khi tham Gia:
              <select
                name
                v-model="pets.form.petEntryStatusDTO.petEntryStatusId"
                class="form-control"
                id
              >
                <option
                  v-for="petEntryStatus in petEntryStatuss"
                  :key="petEntryStatus.petEntryStatusId"
                  :value="petEntryStatus.petEntryStatusId"
                >{{petEntryStatus.name}}</option>
              </select>
            </p>
            <p>
              Lý do:
              <select
                name
                v-model="pets.form.petEntryTypeDTO.petEntryTypeId"
                class="form-control"
                id
              >
                <option
                  v-for="petEntryType in petEntryTypes"
                  :value="petEntryType.petEntryTypeId"
                  :key="petEntryType.petEntryTypeId"
                >{{petEntryType.name}}</option>
              </select>
            </p>
            <p>Ngày Tham Gia:</p>
            <p>
              <DatePicker :mode="mode" v-model="form.entryDate" />
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <table :class="typeClass" class="table table-bordered table-hover table-Light">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nội Dung</th>

            <th>Ngày cập nhật</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(petStatusEntry, index) in petStatusEntrys" :key="index">
            <td>{{petStatusEntry.petStatusId}}</td>
            <td>{{petStatusEntry.content}}</td>

            <td>{{new Date(petStatusEntry.date).toDateString()}}</td>
            <td>{{petStatusEntry.petStatusTypeDTO.name}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Calendar from "v-calendar/lib/components/calendar.umd";
import Loader from "../Loader";
import DatePicker from "v-calendar/lib/components/date-picker.umd";
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      mode: "single",
      url: null,
      activeBtn: "",
      tabSelected: "infoPet",
      form: {
        petId: this.id,
        petName: null,
        image:
          null,
        description:
          null,
        weight:
        null ,
        age:
         null ,
        color:
        null  ,
        status:
         null ,
        breed:
         null,
        gender:
         null ,
        createdDate:
         null ,
        petTypeDTO: {
          petTypeId:
            null,
        },
        petAboutDTO: {
          petId: this.id,
          sterilization:
           null,
          inject_rabies:
            null,
          vaccination:
            null,
          friendly_people:
            null,
          friendly_cat:
           null,
          friendly_dog:
            null,
          toilet_place:
            null,
        },
        petEntryStatusDTO: {
          petEntryStatusId:
            null,
        },
        petEntryTypeDTO: {
          petEntryTypeId:
            null,
        },
        entryDate:
          null,
      },
      form1: {
        content: "",
        petDTO: {
          petId: this.id,
        },
        petStatusTypeDTO: {
          petStatusTypeId: null,
        },
      },
    };
  },
  computed: {
    typeClass() {
      return `${this.$store.state.themes}`;
    },
    pet() {
      return this.$store.state.pet;
    },
    pets() {
      return {
        form: {
        petId: this.id,
        petName: this.$store.state.pet.petName,
        image:
          this.form.image,
        description:
          this.$store.state.pet.description,
        weight:
        this.$store.state.pet.weight ,
        age:
         this.$store.state.pet.age ,
        color:
        this.$store.state.pet.color  ,
        status:
         this.$store.state.pet.status ,
        breed:
         this.$store.state.pet.breed,
        gender:
         this.$store.state.pet.gender ,
        createdDate:
         this.$store.state.pet.createdDate ,
        petTypeDTO: {
          petTypeId:
            this.$store.state.pet.petTypeDTO.petTypeId,
        },
        petAboutDTO: {
          petId: this.id,
          sterilization:
           this.$store.state.pet.petAboutDTO.sterilization,
          inject_rabies:
            this.$store.state.pet.petAboutDTO.inject_rabies,
          vaccination:
            this.$store.state.pet.petAboutDTO.vaccination,
          friendly_people:
            this.$store.state.pet.petAboutDTO.friendly_people,
          friendly_cat:
           this.$store.state.pet.petAboutDTO.friendly_cat,
          friendly_dog:
            this.$store.state.pet.petAboutDTO.friendly_dog,
          toilet_place:
            this.$store.state.pet.petAboutDTO.toilet_place,
        },
        petEntryStatusDTO: {
          petEntryStatusId:
            this.$store.state.pet.petEntryStatusDTO.petEntryStatusId,
        },
        petEntryTypeDTO: {
          petEntryTypeId:
            this.$store.state.pet.petEntryTypeDTO.petEntryTypeId,
        },
        entryDate:
          this.$store.state.pet.entryDate,
      },
      }
    },
    petEntryTypes() {
      return this.$store.state.petEntryType;
    },
    petEntryStatuss() {
      return this.$store.state.petEntryStatus;
    },
    petStatusEntrys() {
      return this.$store.state.petStatusEntry;
    },
    petStatusTypes() {
      return this.$store.state.petStatusType;
    },
  },
  methods: {
    uploadFiles(event) {
      const uRL = "https://petadoption.j.layershift.co.uk/admin/pet/image/";
      const file = event.target.files[0];
      this.url = URL.createObjectURL(file);
      let data = new FormData();
      data.append("name", "my-picture");
      data.append("file", event.target.files[0]);

      let config = {
        header: {
          "Content-Type": "multipart/form-data",
        },
      };

      axios.post(uRL, data, config).then((response) => {
        this.form.image = response.data.file;
        console.log(this.form.image);
      });
    },
    onSubmit() {
      // this.pets.form.weight = Number(this.form.weight);
      // this.pets.form.age = Number(this.form.age);
      // this.pets.form.petTypeDTO.petTypeId = Number(this.form.petTypeDTO.petTypeId);
      let data = {
        data: JSON.stringify(this.pets.form),
        petId: this.id,
      };
      this.$store.dispatch("updatePet", data);
    },
    getImagePet(e) {
      this.$refs.getImagePet.click();
    },
    ChangeTabSelect(tab) {
      this.tabSelected = tab;
    },
    addPetStatusEntry() {
      let data = {
        pet: JSON.stringify(this.form1),
        id: this.id,
      };
      console.log(data);
      this.$store.dispatch("addPetStatusEntry", data);
    },
  },
  created() {
    this.$store.dispatch("getPet", this.id);
    this.$store.dispatch("getPetEntryStatus");
    this.$store.dispatch("getPetEntryType");
    this.$store.dispatch("getPetStatusEntry", this.id);
    this.$store.dispatch("getPetStatusType");

    // this.form.petName = this.$store.state.pet.petName
    // this.form.image =  this.$store.state.pet.image
    // this.form.description =  this.$store.state.pet.description 
    // this.form.weight =   this.$store.state.pet.weight
    // this.form.age =  this.$store.state.pet.age
    // this.form.status = this.$store.state.pet.status 
    // this.form.color =  this.$store.state.pet.color
    // this.form.breed =  this.$store.state.pet.breed
    // this.form.gender = this.$store.state.pet.gender
    // this.form.createdDate =  this.$store.state.pet.createdDate
    // this.form.petTypeDTO.petTypeId = this.$store.state.pet.petTypeDTO.petTypeId 
    // this.form.petAboutDTO.sterilization =  this.$store.state.pet.petAboutDTO.sterilization 
    // this.form.petAboutDTO.inject_rabies =  this.$store.state.pet.petAboutDTO.inject_rabies 
    // this.form.petAboutDTO.vaccination = this.$store.state.pet.petAboutDTO.vaccination 
    // this.form.petAboutDTO.friendly_people =  this.$store.state.pet.petAboutDTO.friendly_people 
    // this.form.petAboutDTO.friendly_cat =  this.$store.state.pet.petAboutDTO.friendly_cat 
    // this.form.petAboutDTO.friendly_dog =  this.$store.state.pet.petAboutDTO.friendly_dog 
    // this.form.petAboutDTO.toilet_place =  this.$store.state.pet.petAboutDTO.toilet_place 
    // this.form.petEntryStatusDTO.petEntryStatusId =  this.$store.state.pet.petEntryStatusDTO.petEntryStatusId 
    // this.form.petEntryTypeDTO.petEntryTypeId =  this.$store.state.pet.petEntryTypeDTO.petEntryTypeId 
    // this.form.entryDate =  this.$store.state.pet.entryDate
  },
  components: {
    Calendar,
    DatePicker,
    Loader,
  },
};
</script>

<style scoped>
._BoxDetailPet {
  display: flex;
  justify-content: space-around;
}
.detailPet {
  text-align: justify;
}
._BoxDetailPet_Item {
  width: 30%;
}
.card-body-Item {
  width: 50%;
  padding: 20px 15px;
}
.card_ {
  margin: 0 auto;
  padding: 10px 20px !important;
  text-align: justify;
}
.img_Avatar {
  border: 3px solid #f6f6f6;
  border-radius: 50%;
  width: 40%;
  margin: 0 auto;
}
.card-Body {
  display: flex;
  justify-content: space-around;
}
.active {
  background-color: #f7f7f7;
  color: #f7f7f7;
}
</style>>

