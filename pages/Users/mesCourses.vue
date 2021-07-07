<template>
<div>
    <Header></Header>
   <Sidebar></Sidebar>
   <div class="section_center">
    Il semble que vous n'avez pas encore effectué de course.
     <div class="col-md-5 col-sm-12 wow fadeInLeft" data-wow-delay="0.3s">
                        <div class="about-slider">
                            <img src="../../assets/images/norun.jpg" alt="">
                        </div>
                    </div>
                    <p class="title_txt">Trouvez une course en quelques minutes </p>
                    <p class="txt">Réservez une course Uber depuis votre navigateur Web, sans aucune application à installer. </p>
                    <button class="btn_course"> Commandez une course </button>
   </div>
    <!-- <Footer></Footer> -->
</div>
</template>

<script>
import Header from "../../components/header"
import Footer from "../../components/footer"
import Sidebar from "../../components/sidebar.vue"
export default {
  components: {
    Header,
    Footer,
    Sidebar
  },
};

</script>
<style scoped>
.section_center{
 margin-top: 107px;
    font-weight: bold;
    font-size: 26px;
    margin-left: auto;
    margin-right: auto;
    width: 14em;
}

img{
      height: 158px;
    margin-top: 49px;
    margin-left: -14px;
}

.title_txt{
  font-size: 21px;
    font-weight: 500;
}

.txt{
  font-weight: 200;
    margin-top: 11px;
}
.btn_course{
  margin-top: 10px;
    width: 86%;
    height: 54px;
    background-color: navy;
    color: white;
}
</style>
