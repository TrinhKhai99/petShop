<template>
  <div>
    <div
      class="row adopt no-gutter"
      style="background-image: url('src/assets/uploads/Contact/jumbotron-contact.jpeg')"
    >
      <div class="bg-over"></div>
      <div class="box_Adopt">
        <h2>Trang Chủ</h2>
        <div class="box_Adopt-Item">
          <a href="#">Trang Chủ</a> >
          <span>Liên Hệ</span>
        </div>
      </div>
    </div>
    <div class="row mt-5 contact text-justify">
      <div class="col-md-6">
        <div class="contact_Info">
          <h3>Thông Tin Liên Hệ</h3>
          <p class="mt-3">
            <a href>
              <i class="fas fa-phone icon_Contact"></i> (+84)39 320 1068
            </a>
          </p>
          <p>
            <a href>
              <i class="fas fa-envelope icon_Contact"></i> hanoipetadoption@gmail.com
            </a>
          </p>
          <p>
            <a href>
              <i class="fas fa-map-marker-alt icon_Contact"></i> Ha Noi - Viet Nam
            </a>
          </p>
        </div>
        <div class="contact_Donate mt-4">
          <h3>Tài Khoản Quyên Góp</h3>
          <p>Chi phí sẽ được chia đều cho các bé khác còn nằm viện và gây dựng nhà chung.</p>
          <div class="contact_Box mt-4">
            <div class="contact_DonateItem">
              <h4><i class="fas fa-university icon_Contact"></i> Vietcombank</h4>
              <p>Phạm Thanh Hằng</p>
              <p>0011004054939</p>
              <p>Sở giao dịch Vietcombank</p>
            </div>
            <div class="contact_DonateItem">
              <h4><i class="fas fa-university icon_Contact"></i> BIDV</h4>
              <p>Phạm Thanh Hằng</p>
              <p>12610000951797</p>
              <p>Chi Nhánh Ba Đình</p>
            </div>
            <div class="contact_DonateItem">
              <h4><i class="fas fa-university icon_Contact"></i> Techcombank</h4>
              <p>Phạm Thanh Hằng</p>
              <p>19031456730888</p>
              <p>Chi Nhánh Hà Nội</p>
            </div>
            <div class="contact_DonateItem ">
              <h4><i class="fab fa-paypal icon_Contactt" ></i> Paypal</h4>
              <p>HanoiPetAdoption@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputPassword4">Họ và tên *</label>
              <input type="text" class="form-control" id="inputEmail4" placeholder />
            </div>
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input type="email" class="form-control" id="inputEmail4" placeholder />
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Tiêu đề *</label>
            <input type="text" class="form-control" id="inputAddress" placeholder />
          </div>
          <div class="form-group">
            <label for="inputAddress">Nội dung *</label>
            <textarea name id class="form-control"></textarea>
          </div>
          <button type="submit" class="btn btn-rq btn-primary mt-3">GỬI TIN NHẮN</button>
        </form>
      </div>
    </div>
    <div class="row">
            <div class="col-md-12 option_Donate">
                <h2>CÁC PHƯƠNG THỨC ỦNG HỘ KHÁC</h2>
                <p class="icon_Pet mt-3 mb-4"><i class="fas fa-paw"></i></p>
                <div class="box_icon_Donate mb-3">
                    <span><i class="fas fa-baby"></i></span>
                    <span><i class="fas fa-tshirt"></i></span>
                    <span><i class="fas fa-pizza-slice"></i></span>
                </div>
                <a href="#" class=" donate">LIÊN HỆ HPA</a>
            </div>
        </div>
        <Donors/>
        <Footer/>
        <Ontop/>
  </div>
</template>

<script>
import Donors from '../components/Donors.vue'
import Footer from '../components/FooterHome.vue'
import Ontop from '../components/Ontop.vue'
export default {
    components: {
        Donors,
        Footer,
        Ontop
    }
};
</script>

<style scoped>
.contact {
  padding: 0 115px;
}
.icon_Contact {
  color: #d61c62;
  font-size: 1.2rem;
  margin-right: 10px;
}
.icon_Contactt {
    color: #d61c62;
  font-size: 1.2rem;
  margin-right: 0;
}
.contact_Info a:hover {
  text-decoration: none;
  color: #d81c6b;
}
.btn-rq {
  font-weight: bold;
  border: 1px;
  border-radius: 20px;
  padding: 8px 20px;
}
.btn-rq:hover {
  background-color: #ffcc00;
}
.contact_Box {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.contact_DonateItem {
    width: 50%;
    font-size: 1rem;
    font-weight: 400;
    color: #6f6f6f;
}
</style>