<template>
  <b-navbar toggleable="sm" type="dark" variant="dark" fixed="top">
    <b-navbar-brand>RebuVTC</b-navbar-brand>
    <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">ACCUEIL</b-nav-item>
        <b-nav-item href="#about">À PROPOS</b-nav-item>
        <b-nav-item href="#service">SERVICES</b-nav-item>
        <b-nav-item @click="show">CONNEXION</b-nav-item>
    </b-navbar-nav>

  </b-navbar>
</template>
<script>
import { mapActions } from 'vuex'

export default {
   methods: {
        ...mapActions({
            show: 'popup/show'
        })
    }
}
</script>

<style>


 .navbar.navbar-dark.bg-dark{
    background-color: none!important;
    padding: 10px 50px;
     overflow: hidden;
 }
</style>