<template>
  <div>
    <!-- Header -->
    <Header></Header>

    <div class="section_un">
      <div class="container">
        <div class="row" id="champ_txt">
          <h1 class="tittleone">CONDUISEZ AVEC REBU</h1>
          <p class="txt_title">
            Rejoignez la plateforme bénéficiant du plus grand réseau de
            passagers actifs.
          </p>
        </div>
        <b-button class="btn_start">Commencez</b-button>
      </div>
    </div>
    <section  class="section about bg-gray" id="about">
            <div class="container">
                <div class="row">
                    <div class="col-md-7 col-sm-12 wow fadeInLeft">
                        <div class="content">
                        	<div class="sub-heading">
                        		<h1>Où que vous alliez, votre sécurité est au cœur de nos priorités.</h1>
                        	</div>
                            <p class="txt_contentone">Chaque fonctionnalité de sécurité et chaque clause de notre Charte de la communauté contribuent à créer un environnement sûr pour nos utilisateurs.</p>
                            <p class="txt_contentone">
                               L'application est disponible dans des milliers de villes du monde entier : vous pouvez donc commander une course même lorsque vous êtes loin de chez vous.
                            </p>
                            
                        </div>
                    </div>
                    <div class="col-md-5 col-sm-12 wow fadeInLeft" data-wow-delay="0.3s">
                        <div class="about-slider">
                            <img src="../assets/images/safety.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>

    <div class="section_deux" id="service">
      <div class="container">
        <div class="row">
          <div class="heading">
            <h2 class="title_deux">Le meilleur pour nos clients</h2>
            <p class="txt_title_deux">
              Rejoignez la plateforme bénéficiant du plus grand réseau de passagers actifs.
            </p>
          </div>
          <div class="col-sm-6 col-md-3 wow fadeInLeft">
            <div class="block">
              <b-icon class="icon" icon="shield-check" font-scale="3"></b-icon>
              <h3 class="title_icon_c">Confiance</h3>
              <p>
                Avec l'application rebu, choisissez parmi différents types de courses pour aller où vous voulez dans plus de 10 000 villes
              </p>
            </div>
          </div>
          <div class="col-sm-6 col-md-3 wow fadeInLeft" data-wow-delay="0.3s">
            <div class="block">
              <b-icon class="icon" icon="bricks" font-scale="3"></b-icon>
              <h3 class="title_icon_s">Sécurité</h3>
              <p>
              Vous pouvez compter sur une assistance et une aide en cas d'urgence 24 h/24, 7 j/7.
              </p>
            </div>
          </div>
          <div class="col-sm-6 col-md-3 wow fadeInLeft" data-wow-delay="0.6s">
            <div class="block">
              <b-icon class="icon" icon="award" font-scale="3"></b-icon>
              <h3 class="title_icon_e">Efficacité</h3>
              <p>
                Commandez une course n'importe quel jour de l'année, à n'importe quelle heure.
              </p>
            </div>
          </div>
          <div class="col-sm-6 col-md-3 wow fadeInLeft" data-wow-delay="0.9s">
            <div class="block">
              <b-icon class="icon" icon="bell" font-scale="3"></b-icon>
              <h3 class="title_icon_p">Ponctualité</h3>
              <p>
Notre chauffeur Vtc arrive 15 minutes avant l’heure de votre réservation 
et vous contactera dès son arrivée pour que vous n’ayez pas à l’attendre.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="call-to-action section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 wow text-center">
                        <div class="block">
                            <h2>La durabilité fait partie intégrante du succès de notre entreprise</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="contact" class="section contact">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <div class="block">
                            <div class="heading wow fadeInUp">
                                <h2>Faites nous part de vos remarques !</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et <br> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-6 offset-md-3 wow fadeInUp" data-wow-delay="0.3s">
                    	<div class="form-group">
                    	    <form action="#" method="post" id="contact-form">
                    	        <div class="input-field">
                    	            <input type="text" class="form-control" placeholder="Votre prénom" name="name">
                    	        </div>
                    	        <div class="input-field">
                    	            <input type="email" class="form-control" placeholder="Votre adresse e-mail" name="email">
                    	        </div>
                    	        <div class="input-field">
                    	            <textarea class="form-control" placeholder="Votre message" rows="3" name="message"></textarea>
                    	        </div>
                    	        <button class="btn btn-send" type="submit">envoi</button>
                    	    </form>

                    	    <div id="success">
                    	        <p>Your Message was sent successfully</p>
                    	    </div>
                    	    <div id="error">
                    	        <p>Your Message was not sent successfully</p>
                    	    </div>
                    	</div>
                    </div>
                </div>
            </div>
        </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/header";
import Footer from "../components/footer"
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
.container_header {
  margin: 0px;
}
.section_un {
  background-image: url("../assets/images/wp4073068.jpg");
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  image-rendering: -webkit-optimize-contrast;
}

.tittleone {
  color: #fff;
  font-size: 60px;
  text-transform: uppercase;
  font-weight: bold;
  padding-bottom: 19px;
  margin-top: 30px;
}

.txt_title {
  color: #fff;
  font-size: 20px;
  line-height: 1.3;
}

.btn_start {
  background-color: #1bafb4;
  border-radius: 0px;
  color: #fff;
  font-size: 18px;
  padding: 10px 40px;
  margin-top: 30px;
  margin-left: 510px;
}
.btn_start:hover {
  background-color: #fff;
  color: #555;
  border: 1px solid #fff;
}

#champ_txt {
  margin-top: 154px;
  margin-left: 290px;
}

#section_deux {
  padding: 100px 0;
}

.title_deux {
  color: #3c3c3c;
  padding-bottom: 15px;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 40px;
  line-height: 40px;
  margin-left: 350px;
}

.txt_title_deux {
  font-size: 15px;
  line-height: 24px;
  font-weight: 300;
  margin-left: 294px;
}

.heading{
  padding-bottom: 100px;
  padding-top: 83px;
}

.icon{
    font-size: 60px;
    display: inline-block;
    margin-bottom: 15px;
    color: #1bafb4;
    margin-left: 90px;
}

.title_icon_c{
margin-left: 50px;
}

.title_icon_s{
margin-left: 60px;
}

.title_icon_e{
margin-left: 56px;
}

.title_icon_p{
margin-left: 42px;
}

.txt_contentone{
  font-size: 18px;
}
</style>