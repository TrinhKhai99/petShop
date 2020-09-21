<template>
  <div id="app">
    <transition name="fade" mode="out-in">
        <router-view ></router-view>
    </transition>
    <NoteList/>
  </div>
</template>

<script>

import NoteList from './components/NoteList'
export default {
  name: 'app',
  data () {
    return {
      copmKey: 0,
    }
  },
  components: {
    NoteList
  }
}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html, body {
    overflow-x: hidden;
    text-align: center;
}
.list-enter,
.list-leave-to {
  opacity: 0;
    transform: translateX(-2em)
}
.modal-backdrop {
    display: none;
}
a:hover {
    text-decoration: none;
}
.btn-Camera {
    font-size: 1.5rem;
    color: #17c0eb;
    cursor: pointer;
}
.img_noCircle {
    width: 500px; 
    height: 200px;
}
#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  max-width: 100%;
  max-height: 500px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease-in-out;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateX(-2em)
}
.fade-enter-active, .fade-leave-active {
    transition: all .3s ease-in-out
}
._padding-about {
    width: 100%;
    max-width: 100%;
    padding: 50px 105px 70px;
    overflow: hidden;
    text-align: justify;
}
.no-gutter > [class*='col-'] {
    padding-right:0;
    padding-left:0;
}
.sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    padding: 0 75px;
  }
  .userView {
      z-index: 10;
  }
#userAvatar {
      border : 1px;
      border-radius: 50%;
}
.nav_Menu {
    height: 105px;
    color: #e8e8e8;
    line-height: 105px;
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0 70px 0;
    background-color: #f6f6f6;
}
.nav_Menu_PC {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-left: 40px;
}
.nav_Menu_PC a {
    text-decoration: none;
    color: black;
    font-size: 1rem;
    font-weight: 600;
}
.nav_Menu_PC a:hover {
    color: #dd4a81;
    text-decoration: none;
}
.nav_bars-btn {
    display:none;
    margin-left: 10px;
    font-size: 20px;
    background-color: #FFFFFF;
    cursor: pointer;
    color: black;
}
.nav_overlay {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: none;
    animation: fadeIn linear 0.3s;
}
.nav_Menu_Moblie {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width:320px;
    max-width: 320px;
    background-color:#ffffff;
    transform: translateX(-100%);
    transition: transform linear 0.3s;
}
.nav_Menu_Moblie a {
    display: block;
    text-align: center;
    height: 50px;
    font-size: 1.1rem;
    font-weight: bold;
    color: #000000
}
.nav_Menu_Moblie a:hover {
    text-decoration: none;
    color: #cd2668;
}
.icon_Close {
    position: absolute;
    color: #666;
    font-size: 1.6rem;
    top: 0;
    right: 20px;
    cursor: pointer;
}
.nav_input:checked ~ .nav_overlay {
    display: block;
}
.nav_input:checked ~ .nav_Menu_Moblie { 
    transform: translateX(0);
    z-index: 4;
}

.content-Carousel {
    width: 30%;
    height: 40%;
    position: absolute;
    top: 30%;
    left: 10%;
    z-index: 999;
    animation: fadeOut 2s forwards;
    opacity: 0;
}
.content-Carousel h4 {
    font-size: 1.5rem;
    font-weight: bold;
}
.about_Img {
    margin-left: 30px;
    width: 300px;
    max-width: 300px;
    margin-top: -55px;
    overflow: hidden;
}
.btn_about {
    display: inline-block;
    padding: 0;
    width: 200px;
    height: 45px;
    font-size: 1.3rem;
    border: 1px;
    border-radius: 20px;
    font-weight: bold;
    text-align: center;
    line-height: 45px;
    background-color:#018ae0;
    color: #FFFFFF;
}
.btn_about:hover {
    background-color:#d21b60;
    text-decoration: none;
    color: #FFFFFF;
}
.service {
    padding: 10px 40px 40px;
}
.box-Flex {
    display: flex;
    justify-content: space-between;
}
.mother-Box {
    position: relative;
    text-align: center;
    width: 31%;
    height: 430px;
}
._padding-Service {
    padding: 0 100px 30px;
    
}
.bg-Service {
    background-color:#ffcc00;
    width: 100%;
    height: 80%;
    position: absolute;
    bottom: 0;
    border: 1px;
    border-radius: 25px;
    left: 0;
    z-index: 1;
}
.bg__Sevice {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 2;
}
.bg__Sevice img {
    z-index: 2;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 15%;
}
.box-Service {
    z-index: 3;
    position: absolute;
    top: 0;
    left: 4%;
    width: 92%;
    height: 80%;
    padding: 15px 10px 30px;
    background-color: #f6f6f6;
    border: 1px;
    border-radius: 25px;
}
.box-Service img {
    border: 10px solid white;
    border-radius: 50%;
}
.btn_MoreService {
    display: inline-block;
    padding: 0;
    width: 70%;
    height: 10%;
    padding: 5px 0 0 0;
    font-size: 1.3rem;
    border: 1px;
    border-radius: 20px;
    font-weight: bold;
    text-align: center;
    background-color:#d21b60;
    color: #FFFFFF;
    position: absolute;
    bottom: 5%;
    left: 15%;
    z-index: 3;
}
.btn_MoreService:hover {
    background-color:#018ae0;
    text-decoration: none;
    color: #FFFFFF;
}
@keyframes fadeOut {
    form {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}
.img_Carousel {
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 3;
    position: absolute;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    z-index: 2;
}
.carousel_MoreBtn {
    display: inline-block;
    padding: 0;
    width: 200px;
    height: 45px;
    font-size: 1.3rem;
    border: 1px;
    border-radius: 20px;
    font-weight: bold;
    text-align: center;
    line-height: 45px;
    background-color:#d21b60;
    color: #FFFFFF;
}
.carousel_MoreBtn:hover {
    background-color:#018ae0;
    text-decoration: none;
    color: #FFFFFF;
}
.carousel-Service .btn_MoreService {
    width: 50%;
    height: 10%;
    position: absolute;
    bottom: 5%;
    left: 25%;
    padding: 5px 0 0 0;
    font-size: 1.3rem;
}
.carousel-Service .box-Service h3 {
    font-size: 1.4rem;
}
.carousel-Service .box-Service p { 
    font-size: 1.2rem;
}
.carousel-Service {
    display: none;
}
.pet {
    width: 100%;
    background-color:#f8f8f9;
    text-align: center;
    padding: 40px 100px;
    position: relative;
}
.icon_Pet {
    font-size: 1.5rem;
    color: #7dc2ed;
    transform: skewY(-5deg);
}
.box_Pet {
    width: 100%;
    padding: 45px 30px;
    background-color: #FFFFFF;
    box-shadow: 0 -3px 7px -5px #333,  3px 0 5px -5px #333,-3px 0 5px -5px #333;
    border: 1px;
    border-radius: 5px;
}
.hr {
    width: 30%;
    border: 1px solid #cecece;
    color: #cecece;
}
.name_Pet {
    margin-top: 20px;
    font-size: 1.7rem;
    font-weight: bold;
}
.box_Pet_Item {
    padding: 5px 20px;
    width: 25%;
    text-align: left;
}
.box_Pet_Item_Mb {
    width: 100%;
    padding: 3px 7px;
    text-align: left;
}
.img_Pet {
    width: 100%;
    height: 215px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    transition: all ease-in-out;
    background-color: rgba(0, 0, 0, 0.4);
}
.img_Pet:hover {
    transform: scale(1.05);

}
.moblie_Pet {
    display: none;
}
.video_Pet {
    padding: 50px 100px;
    width: 100%;
    text-align: center;
    background-color:#f6f6f6;
}
.video_BoxPet {
    display: flex;
    justify-content: space-around;
}
.video_PetItem {
    padding: 10px 20px;
    text-align: justify;
}
.aDefault {
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
}
.aDefault:hover {
    text-decoration: none;
    
 }
.img_videoPet {
    width: 232px;
    height: 232px;
    background-position: center;
    background-repeat: none;
    background-size: cover;
}
.more_Video {
    display: inline-block;
    padding: 7px 25px;
    font-size: 1.3rem;
    border: 1px;
    border-radius: 20px;
    font-weight: bold;
    text-align: center;
    background-color:#d21b60;
    color: #FFFFFF;
}
.more_Video:hover {
    background-color:#018ae0;
    text-decoration: none;
    color: #FFFFFF;
}

.rescue {
    position: relative;
    height: 298px;
    padding: 40px 100px !important;
    text-align: center;

    /* Set a specific height */
    min-height: 298px; 

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.rescue_Item {
    z-index: 2;
}
.rescue_Item span i {
    text-align: center;
    color: #d61c62;
    background-color: #FFFFFF;
    display: inline-block;
    width: 100px;
    height: 100px;
    line-height: 100px;
    font-size: 3.2rem;
    border: 1px;
    border-radius: 50%;
}
.rescue_Item span i:hover {
    transition: all .5s ease;
    transform: scale(1.2);
}
.rescue_Item p {
    font-size: 2em;
    font-weight: bold;
    color: #FFFFFF;
    margin: 30px 0 20px;
}
.rescue_Item h3 {
    color: #FFFFFF;
}
.news {
    width: 100%;
    text-align:center;
    padding: 50px 115px;
}

.box_News {
    width: 100%;
    
}

.box_NewsItem {
    padding: 5px 5px 0 5px;
    width: 31%;
    margin-right: 30px;
    height: 517px;
    text-align: justify;
    background-color: #f4f4f4;
}


.content_News {
    padding: 15px;
}
.content_News h3 {
    font-size: 1.5rem;
    margin: 40px 0 10px;
}
.content_News p {
    color: #8c8c8c;
}
.ready_Donate {
    position: relative;
    text-align: center;
    height: 149px;
    /* Set a specific height */
    min-height: 149px;
  
    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.content_Donate {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    z-index: 2;
}
.ready_Donate h2 {
    color: #FFFFFF;
    line-height: 149px;
    z-index: 2;
}
.donate {
    display: inline-block;
    padding: 0;
    width: 223px;
    height: 45px;
    line-height: 45px;
    margin-top: 50px;
    font-size: 1.3rem;
    border: 1px;
    border-radius: 20px;
    font-weight: bold;
    text-align: center;
    background-color:#018ae0;
    color: #FFFFFF;
    z-index: 3;
}
.donate:hover {
    background-color:#ffcc00;
    text-decoration: none;
    color: #FFFFFF;
}
.bg-over {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
}
.contact-Logo {
    text-align: center;
    padding: 50px 0;
}
.contact-Content {
    padding: 50px;
}
.contact-Icon {
    margin-top: 20px;
}
.contact-Icon a { 
    margin-right: 20px;
    font-size: 1.3rem;
}
.contact-Icon a:hover{
    color: #d61c62;
   
}
.contact-Icon a i:hover {
    transform: scale(1.4);
    transition: all .3s ease;
}
.contact-Content p a:hover {
    text-decoration: none;
    color: #d61c62;
}
.contact-Content p a i {
    margin-right: 10px;
    color: #786f6f;
}
#myBtn {
    display: none; /* Hidden by default */
    position: fixed; /* Fixed/sticky position */
    bottom: 40px; /* Place the button at the bottom of the page */
    right: 30px; /* Place the button 30px from the right */
    z-index: 99; /* Make sure it does not overlap */
    border: none; /* Remove borders */
    outline: none; /* Remove outline */
    background-color: #ffcc00; /* Set a background color */
    color: white; /* Text color */
    cursor: pointer; /* Add a mouse pointer on hover */
    width: 50px;
    height: 50px;
    border-radius: 50%; /* Rounded corners */
    font-size: 1.8rem; /* Increase font size */
  }
  
#myBtn:hover {
    background-color: #018ae0; /* Add a dark-grey background on hover */
    transform: scale(1.3);
}
 /* end Index */
 /* start adopt */
.adopt {
    margin-top: 100px;
    height: 213px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    text-align: center;
}
.adopt h2 { 
    color: #FFFFFF;
    font-size: 2.3rem;
}
.box_Adopt {
    position: absolute;
    top: 30%;
    left: 10%;
    z-index: 3;
}
.box_Adopt-Item {
    padding: 8px 12px;
    background-color: #d61c62;
    border: 1px;
    border-radius: 5px;
}
.box_Adopt-Item a {
    color: #FFFFFF;
}
.box_Adopt-Item a:hover {
    text-decoration: none;
}
.box_Adopt-Item span {
    color: #cebfc5;
}
.process-Adopt-Content {
    text-align: justify;
    padding: 50px 20px 40px 100px !important;
    color: #7f7f7f;
    font-weight: 600;
}
.process-Adopt-Content h2 {
    color: #000000;
}
.process-Adopt-Content ul {
    list-style-type: none;
}
.condition-Adopt {
    padding: 50px 100px 40px 20px !important;
    font-weight: 600;
    text-align: justify;
}
.box_condition-Adopt {
    padding: 20px;
    background-color: #f6f6f6;
    border: 1px;
    border-radius: 10px;
    color: #707070;
}
.box_condition-Adopt h3 {
    color: #000000;
}
.box_condition-Adopt span i {
    color: #018ae0;
    margin-right: 5px;
}
.all_Adopt {
    position: relative;
    height: 192px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.bg-over-Adopt {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1;
}
.all_Adopt_Content {
    padding: 60px 0 0 75px !important;
    text-align: justify;
    z-index: 2;
    color: #FFFFFF
}
.all_Adopt_Btn {
    padding: 80px 0 0 0;
    z-index: 2;
}
.btn_All_Adopt  {
    color: #FFFFFF;
    font-size: 1.3rem;
    font-weight: bold;
    text-align: center;
    border: 1px;
    border-radius: 30px;
    display: block;
    width: 204px;
    height: 44px;
    line-height:44px;
    background-color: #d61c62;
}
.btn_All_Adopt:hover {
    color: #FFFFFF;
    text-decoration: none;
    background-color:#018ae0;
}
.search_Pet {
    text-align: center;
    padding: 40px 0 20px 0;
}
.btnGr_Search {
    text-align: center;
}
.btnGr_Search button {
    display: inline-block;
    font-size: 1.7rem;
    padding: 5px 25px;
    border: 1px;
    border-radius: 25px;
    color: #FFFFFF;
    background-color: #ffcc00;
    margin-right: 20px;
    font-weight: bold;
    cursor: pointer;
}
.result_Search {
    padding: 20px 100px 20px 100px !important;
}
.result_Search div {
    margin-top: 20px;
}
.result_Search div span {
    font-size: 1.2rem;
}
.btn_SearchPet {
    position: relative;
}
.btn_SearchPet button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    padding: 5px 20px;
    background-color: #d61c62;
    color: #FFFFFF;
    border: 1px;
    border-radius: 25px;
    font-size: 1.3rem;
    font-weight: bold;
    cursor: pointer;
}
.result_PetItem {
    padding: 5px 15px;
}
.box_result_PetItem {
    width: 100%;
    height: 415px;
    background-color: #f6f6f6;
    text-align: justify;
}
.content_ProfPet {
    padding: 0 0 0 10px;
}
.img_ResultPet {
    width: 100%;
    height: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.more_Adopt {
    margin-top: 20px;
    text-align: center;
    height: 268px;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 40px;
}
.content_MoreAdopt {
    z-index: 2;
}
.content_MoreAdopt h2 {
    font-size: 1.8rem;
    color: #FFFFFF;
}
.btn_MoreAdopt {
    text-align: center;
    z-index: 2;
    position: relative;
}
.btn_MoreAdopt a {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
 /* end adopt */
 /* start volunteers */
 .wantDonate {
     padding: 40px 100px !important; 
     text-align: justify;
 }
 .wantDonate p {
     color: #6f6f6f;
 }
 .donors_PC {
     width: 100%;
     text-align:center;
     padding: 40px !important;
     background-color: #f6f6f6;
 }
 .donors_MB {
    width: 100%;
    text-align:center;
    padding: 30px 0 !important;
    background-color: #f6f6f6;
    display: none;
}
 .boxDonors {
    width: 100%;
    padding: 45px 30px;
    border: 1px;
    border-radius: 5px;
 }
 .boxDonors_MB {
    width: 100%;
    padding: 30px 10px;
    border: 1px;
    border-radius: 5px;
 }
 .box_Donors {
     margin-right: 20px;
    width: 262px;
    height: 363px;
    background-color: #DDDDDD;
    padding: 0;
    border-radius:10px;
}
 .img_Donors {
     width: 100%;
     height: 60%;
    overflow: hidden;
    transition: all ease-in-out;
    position: relative;
    border-radius: 15px;
 }
  .img_Donors img {
      width: 100%;
  }
 .option_Donate {
     text-align: center;
     padding: 40px 0;
 }
 .box_icon_Donate {
     display: flex;
     justify-content: space-around;
 }
 .box_icon_Donate span i {
    border: 2px solid #d61c62;
    color: #d61c62;
    display: inline-block;
    font-size: 50px;
    border-radius: 50%;
    width: 110px;
    height: 110px;
    line-height: 110px;
    transition: all 0.3s ease;
}
.box_icon_Donate span i:hover {
    transform: rotate(20deg);
}
 /* end volunteers */
 /* Responsive */
@media (max-width: 1150px) {
    .nav_bars-btn {
        display: block;
        position: fixed;
        top: 2%;
        z-index: 999;
        right: 0;
        width: 43px;
        height: 30px;
    }
    .nav_bars-btn i { 
        color: #000000
    }
    .nav_Menu {
        height: 50px;
    }
    .nav_Menu_PC {
        display: none;
        
    }
    #nav_logo{
        position:absolute;
        top: 0;
        left: 3%;
        width: 165px;
        max-width: 165px;
        height: 49px;
        max-height: 49px;
    }
    .sticky {
        padding: 0;
    }
    .pc_Service {
        display: block;
    }
    
}
@media only screen and (max-width: 768px) {
    ._padding {
        padding: 0 30px;
    }
    #nav_logo{
        position:absolute;
        top: 0;
        left: 3%;
        width: 165px;
        max-width: 165px;
        height: 49px;
        max-height: 49px;
    }
    ._padding-about {
        padding: 20px;
    }
    ._padding-Service {
        padding: 0 30px;
        
    }
    .btn_MoreService {
        font-size: 1rem;
        height: 10%;
    }
    .pet {
        padding: 10px
    }
    
    .all_Adopt_Content {
        padding: 10px 20px 0 20px !important;
        text-align: center;
        z-index: 2;
        color: #FFFFFF
    }
    .all_Adopt_Btn {
        padding: 10px 0 0 0 !important;
        z-index: 2;
        position: absolute;
        bottom: 10%;
        left: 30%;
    }
    .btn_All_Adopt  {
        color: #FFFFFF;
        font-size: 1.3rem;
        font-weight: bold;
        text-align: center;
        border: 1px;
        border-radius: 30px;
        display: block;
        width: 204px;
        height: 44px;
        line-height:44px;
        background-color: #d61c62;
    }
    .btn_All_Adopt:hover {
        color: #FFFFFF;
        text-decoration: none;
        background-color:#018ae0;
    }
}

@media only screen and (max-width: 640px) {
    ._padding {
        padding: 0;
    }
    #nav_logo{
        position:absolute;
        top: 0;
        left: 3%;
        width: 165px;
        max-width: 165px;
        height: 49px;
        max-height: 49px;
    }
    .content-Carousel { 
        position: absolute;
        top: 0;
        left: 0;
        width: 70%;
        text-align: center;
        padding: 20px 0 0 0;
        font-size: 10px;
    }
    .content-Carousel h4 {
        font-size: 1rem;
        font-weight: bold;
        margin-top: 40px;
    }
    .content-Carousel p {
        font-size: 0.8rem;
    }
    .carousel_MoreBtn {
        display: inline-block;
        padding: 0;
        width: 100px;
        height: 25px;
        font-size: 0.7rem;
        border: 1px;
        border-radius: 20px;
        font-weight: bold;
        text-align: center;
        line-height: 25px;
        background-color:#d21b60;
        color: #FFFFFF;
    }
    .about_Img {
        width: 155px;
        max-width: 155px;
        margin-top: 0;
    }
    .btn_MoreService {
        font-size: 0.6rem;
        height: 7%;
    }
    ._padding-Service {
        padding: 0 1px;
        
    }
    .pet {
        padding: 5px 20px;
    }
    .box-Service h3 {
        font-size: 0.8rem;
    }
    .box-Service p {
        font-size: 0.7rem;    
    }
    .box-Flex {
        display: none;
    }
    .carousel-Service {
        display: block;
        padding: 20px 0 30px 0;
    }
    .pet h2 {
        margin-top: 40px;
        font-size: 1.6rem;
    }
    .moblie_Pet {
        display: block;
    }
    
    .rescue {
        height: 430px;
        padding: 40px 0 0 0 !important;
        text-align: justify;
    
        /* Set a specific height */
        min-height: 430px; 
    
        /* Create the parallax scrolling effect */
        background-attachment: scroll;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .rescue_Item {
        display: flex;
        justify-content: space-around;
        width: 60% !important; 
    }
    .rescue_Item span i {
        text-align: center;
        color: #d61c62;
        background-color: #FFFFFF;
        display: inline-block;
        width: 50px;
        height: 50px;
        line-height: 50px;
        font-size: 1.6rem;
        border: 1px;
        border-radius: 50%;
    }
    .rescue_Item p {
        font-size: 1.5em;
        font-weight: bold;
        color: #FFFFFF;
        margin: 0;
    }
    .rescue_Item h3 {
        color: #FFFFFF;
        font-size: 1.5rem;
    }
    
    .content_Donate {
        text-align: center;
        padding: 0 20px 0 0 !important;
    }
    .ready_Donate h2 {
        font-size: 1.4rem;
        color: #FFFFFF;
        z-index: 2;
    }
    
    .donate {
        display: inline-block;
        padding: 0;
        width: 168px;
        height: 49px;
        line-height: 49px;
        font-size: 1.1rem;
        border: 1px;
        border-radius: 20px;
        font-weight: bold;
        text-align: center;
        background-color:#018ae0;
        color: #FFFFFF;
        z-index: 3;
    }
    .process-Adopt-Content {
        padding: 30px 20px 0 15px !important;
    }
    .all_Adopt_Content {
        padding: 10px 20px 0 20px !important;
        text-align: center;
        z-index: 2;
        color: #FFFFFF
    }
    .all_Adopt_Btn {
        padding: 10px 0 0 0 !important;
        z-index: 2;
        position: absolute;
        bottom: 10%;
        left: 30%;
    }
    .btn_All_Adopt  {
        color: #FFFFFF;
        font-size: 1.3rem;
        font-weight: bold;
        text-align: center;
        border: 1px;
        border-radius: 30px;
        display: block;
        width: 204px;
        height: 44px;
        line-height:44px;
        background-color: #d61c62;
    }
    .btn_All_Adopt:hover {
        color: #FFFFFF;
        text-decoration: none;
        background-color:#018ae0;
    }
    .btnGr_Search button {
        display: inline-block;
        font-size: 1.1rem;
        padding: 5px 12px;
        border: 1px;
        border-radius: 25px;
        color: #FFFFFF;
        background-color: #ffcc00;
        margin-right: 20px;
        font-weight: bold;
        cursor: pointer;
    }
    .result_Search {
        padding: 20px 0 !important;
    }
    .btn_SearchPet button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: inline-block;
        padding: 5px 12px;
        background-color: #d61c62;
        color: #FFFFFF;
        border: 1px;
        border-radius: 25px;
        font-size: 1.1rem;
        font-weight: bold;
        cursor: pointer;
    }
    .content_MoreAdopt h2 {
        font-size: 1.6rem;
        color: #FFFFFF;
    }
    .btn_All_Adopt {
        font-size: 1.2rem;
        
    }
    .img_volunteers {
        display: none;
    }
    .wantDonate {
        padding: 30px 20px !important;
    }
    .video_Pet {
        padding: 10px 0;
    }
    .news {
         padding: 10px 0;
    }
}
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1 ;
    }
}
</style>
