<template>
<div>
    <Header></Header>
   <Sidebar></Sidebar>
<div class="section_center">  
   <h1>Alain Bouquety</h1>
        <form @submit.prevent="signup">
              <b-row class="my-4">
    <b-col sm="2">
      <label for="input-small">Nom </label>
    </b-col>
    <b-col sm="4">
      <b-form-input id="input-large" size="lg" placeholder="Bouquety"></b-form-input>
    </b-col>
  </b-row>
      <b-row class="my-4">
    <b-col sm="2">
      <label for="input-small">Prénom </label>
    </b-col>
    <b-col sm="4">
      <b-form-input id="input-large" size="lg" placeholder="Alain"></b-form-input>
    </b-col>
  </b-row>
     
                <b-row class="my-4">
    <b-col sm="2">
      <label for="input-small">Lieu </label>
    </b-col>
    <b-col sm="4">
      <b-form-input id="input-large" size="lg" placeholder="France"></b-form-input>
    </b-col>
  </b-row>
      
                <b-row class="my-4">
    <b-col sm="2">
      <label for="input-small">E-mail </label>
    </b-col>
    <b-col sm="4">
      <b-form-input id="input-large" size="lg" placeholder="abouquety1@gmail.com"></b-form-input>
    </b-col>
  </b-row>
                <b-row class="my-4">
    <b-col sm="2">
      <label for="input-small">Téléphone </label>
    </b-col>
    <b-col sm="4">
      <b-form-input id="input-large" size="lg" placeholder="06-65-00-23-25"></b-form-input>
    </b-col>
  </b-row>
            
            
           <div class="loader" v-if="authStatus === 'loading'"></div>

            <div class="btn--group" v-else>
                <button type="submit" class="btn--greend">Déconnexion</button>
                <button type="submit" class="btn--greend--alt">Modification</button>
            </div>
        </form>
        <div class="errors--list" v-if="errors && errors.length > 0">
            <div v-for="error of errors" :key="error">{{error}}</div>
        </div> 
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

<style>
.section_center{
 margin-top: 107px;
    font-weight: bold;
    font-size: 26px;
    margin-left: auto;
    margin-right: auto;
    width: 36em;
}
label {
      margin-top: 11px;

}
.btn--greend{
  padding: 10px 30px;
    border-radius: 5px;
    border: 1px solid white;
    border-radius: 5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all .2s;
    background-color: rgb(29, 31, 30);
    border: 1px solid rgb(29, 31, 30);
    color: white;
    font-weight: 500;
    
}
.btn--greend:hover {
    color: rgb(0, 0, 0);
    background-color: white;
}
.btn--greend--alt {
    padding: 10px 30px;
    border-radius: 5px;
    border: 1px solid rgb(29, 31, 30);
	border-radius: 5px;
	text-transform: uppercase;
	cursor: pointer;
	transition: all .2s;
	background-color: white;
	color:rgb(0, 0, 0);
	border: 1px solid white;
	font-weight: 500;
}
.btn--greend--alt:hover {
    border: 1px solid rgb(29, 31, 30);
}
 .btn--group button {
        width: 50%;
    height: 60px;
        margin: 5px 0;
        outline: none;
    }
</style>