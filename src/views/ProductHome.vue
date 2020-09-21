<template>
  <div>
    <div
      class="row adopt no-gutter"
      style="background-image: url('src/assets/uploads/Products/jumbotron-shop.jpg')"
    >
      <div class="bg-over"></div>
      <div class="box_Adopt">
        <h2>Sản Phẩm</h2>
        <div class="box_Adopt-Item">
          <a href="#">Trang Chủ</a> >
          <span>Sản Phẩm</span>
        </div>
      </div>
    </div>
    <div class="row mt-5 no-gutter option">
      <div class="col-md-12 product_Option">
        
        <button class="inbox"><a href="https://www.facebook.com/messages/t/hanoipetadoption" style="color:#FFF">INBOX MUA HÀNG</a></button>
        <button class="shoppe"><a style="color:#FFF" href="https://shopee.vn/hanoipetadoption">MUA TRÊN SHOPPE</a></button>
      </div>
    </div>
    <div  class="row mt-5 mb-5 no-gutter products">
      <div v-for="(product, index) in products.objects" :key="index" class=" product_Box">
        <div class="product_Img">
          <img v-bind:src="'https://comic.j.layershift.co.uk/pet/image/' + product.image" :alt="product.image" />
        </div>
        <div class="product_Content">
          <div class="mt-3 mb-5 product_Title" >{{product.name}}</div>
          <hr class="hr" />
          <div class="product_Price">10,000 VND</div>
          <div>{{ (product.description).slice(0, 99) }}</div>
        </div>
      </div>
      
    </div>
    <div class="Pagi mb-4"><Paginate :ob="products" @thisPage="getCurPage"/></div>
    
    <div
      class="row no-gutter ready_Donate"
      style="background-image: url('src/assets/uploads/Mix/ready-to-support.jpg')"
    >
      <div class="bg-over"></div>
      <div class="content_Donate">
        <h2>Bạn Đã Sẵn Sàng Giúp Đỡ?</h2>
        <a href="#" class="donate">Ủng Hộ Ngay</a>
      </div>
    </div>
    <FooterHome/>
    
  </div>
</template>

<script>
import FooterHome from '../components/FooterHome.vue'
import Paginate from "./Paginate";

export default {
  data() {
    return {
        selectedRecord: 4,
        page: 1,
      }
  },
    components: {
        FooterHome,
        Paginate
    },
    computed: {
      products() {
        return this.$store.state.products_Home;
    },
    },
    methods: {
     getCurPage(data) {
      this.page = data.curPage;
      console.log(" Page hiện tại =", this.page);
      let pageRecord = {
        page: this.page,
        record: this.selectedRecord
      };
      this.$store.dispatch("getProductsHome", pageRecord);
    },
    },
    created() {
      let pageRecord = {
        page: this.page,
        record: this.selectedRecord
      };
      this.$store.dispatch("getProductsHome", pageRecord)
    }
};
</script>

<style scopred>
.product_Option {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.product_Option button {
  display: inline-block;
  padding: 10px 20px;
  color: white;
  border: 1px;
  border-radius: 20px;
  font-weight: bold;
}
.product_Option .inbox {
  background-color: #d61c62;
}
.product_Option .inbox:hover {
  background-color: #018ae0;
}
.product_Option .shoppe {
  background-color: #018ae0;
}
.product_Option .shoppe:hover {
  background-color: #ffcc00;
}
.products {
  padding: 10px 70px;
  display: flex;
  justify-content: space-around;
}
.product_Box {
    width:255px;
  min-height: 476px;
  padding: 15px;
  background-color: #f6f6f6;
}
.product_Img {
  width: 100%;
  height: 215px;
  overflow: hidden;
}
.product_Img img {
  width: 100%;
  height: 100%;

}
.product_Img img:hover {
  transform: scale(1.2);
  transition: 0.3s all ease-in-out;
}
.product_Content {
    padding: 0 15px 0 0;
}
.product_Title {
    font-size: 1.3rem;
}
.product_Price {
    color: #da4e1b;
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 15px;
}
.Pagi {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>