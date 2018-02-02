<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <b-navbar toggleable="md" type="dark">

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand><img src="../assets/vuefire.png" height="20" width="15"/>VueFire!</b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">

              <b-navbar-nav>
                <b-nav-item>
                  <router-link to="home">Home</router-link>
                  <router-link to="about">About</router-link>
                </b-nav-item>
              </b-navbar-nav>

              <!--right side-->
              <b-navbar-nav class="ml-auto">
              <div v-if="currentUserEmail.length !== 0" class="form-inline">
                  <b-nav-item>Account: {{currentUserEmail}}</b-nav-item>
                  <b-nav-item-dropdown left>
                    <b-dropdown-item @click="logout">
                      logout
                    </b-dropdown-item>
                  </b-nav-item-dropdown>
              </div>
              </b-navbar-nav>


            </b-collapse>
          </b-navbar>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import firebase from "firebase"
  import Button from "bootstrap-vue/es/components/button/button";
  import DropdownItem from "bootstrap-vue/src/components/dropdown/dropdown-item";
  import Img from "bootstrap-vue/es/components/image/img";

  export default {
    components: {
      Img,
      DropdownItem,
      Button
    },
    created() {
      var vm = this;
      firebase.auth().onAuthStateChanged(function (user) {
        vm.currentUserEmail = user.email
      })

      console.log(this.currentUserEmail.length)
    },
    name: "topbar",
    data: function () {
      return {
        currentUserEmail: ''
      }
    },
    methods: {
      logout: function () {
        alert("logout")
        var router = this.$router;
        var vm = this;
        firebase.auth().signOut().then(() => {
          Object.assign(this.$data,this.$options.data.call(this))
          router.push('login')
        })
      }
    },
    computed: {

    }
  }
</script>

<style scoped>
  .navbar {
    padding: 15px 0 15px 0;
    border-bottom: 2px solid rgba(0, 0, 0, 0.6);
  }

  .navbar-item a {
    color: black;
  }

  .navbar-brand {
    color: black;
  }

  .b-navbar-nav {
    color: black;
  }

  .navbar-dark .navbar-toggler,
  .navbar-dark .navbar-toggler:hover,
  .navbar-dark .navbar-toggler:focus,
  .navbar-dark .navbar-toggler:active {
    border: 0;
    cursor: pointer;
    padding: 0;
  }

  .navbar-dark .navbar-toggler:focus {
    outline: 0 dotted;
    outline: 0 auto -webkit-focus-ring-color;
  }

  .link {
    color: black;
  }
</style>
