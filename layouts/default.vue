<template>
  <div>
    <Nuxt />
    <Popup v-show="popupVisible">
			<component :is="popupMode" slot="body"></component>
		</Popup>
  </div>
</template>
<script>
import Popup from '../components/popup'
import Login from '../components/_Popup/login.vue'
import Inscription from '../components/_Popup/inscription.vue'

import { mapGetters } from 'vuex'
export default {
	components: {
		Popup,
		Login,
		Inscription,
	},
	computed: {
		...mapGetters ({
			popupVisible: 'popup/isVisible',
			popupMode: 'popup/getMode'
		})
	}
}
</script>
<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.btn--green {
    padding: 10px 30px;
    border-radius: 5px;
    border: 1px solid white;
	border-radius: 5px;
	text-transform: uppercase;
	cursor: pointer;
	transition: all .2s;
	background-color: rgb(29, 31, 30);
	border: 1px solid rgb(29, 31, 30);
	color:white;
	font-weight: 500;
}
.btn--green:hover {
    color: rgb(0, 0, 0);
    background-color: white;
}
.btn--green--alt {
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
.btn--green--alt:hover {
    border: 1px solid rgb(29, 31, 30);
}
.button--grey {
	display: inline-block;
	border-radius: 4px;
	border: 1px solid #35495e;
	color: #35495e;
	text-decoration: none;
	padding: 10px 30px;
	margin-left: 15px;
}
.button--grey:hover {
	color: #fff;
	background-color: #35495e;
}
.loader {
	border: 3px solid #f3f3f3;
	border-top: 3px solid rgba(85, 230, 193,1.0);
	border-radius: 50%;
	width: 30px;
	height: 30px;
	animation: spin 1s linear infinite;
	margin: 15px auto 0;
}
h1{
color: rgb(18, 28, 48); 
}
@keyframes spin {
	0% { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
}
</style>
