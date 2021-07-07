<template>
  <div>
    <b-sidebar id="sidebar-1" no-header visible>
      <div class="px-3 py-2">
       
         <nav class="mb-2">
            <b-nav class="liste_s" vertical>
              <b-nav-item class="txt_s" to="/Users/mesCourses/" >Mes courses </b-nav-item>
              <b-nav-item class="txt_s" to="/Users/profile/">Mon profil</b-nav-item>
            </b-nav>
          </nav>
      </div>
    </b-sidebar>
  </div>
</template>


<style>
.nav-link {
  color: black;
}


#sidebar-1{
      margin-top: 62px;
}

.liste_s {
  font-size: 21px;
}
.txt_s {
      margin-top: 16px;
}
</style>

