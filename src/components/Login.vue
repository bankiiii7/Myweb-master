<template>
  <div class="Login">
    <h1>Login page</h1>
    <div class="container">
      <form>
        <div class="form-group">
          <label for="usr">Email:</label>
          <input type="text" class="form-control" value="bank4k@gmail.com" id="usr" v-model="email">
        </div>
        <div class="form-group">
          <label for="pwd">Password:</label>
          <input type="password" class="form-control" value="Rolacore5r3" id="pwd" v-model="password">
        </div>
        <div class="form-group">
          <button @click="login" type="button" class="btn btn-success">Submit</button>
        </div>
        <div class="form-group">
          <router-link to="register"><button type="button" class="btn btn-info">Register</button></router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import firebase from 'firebase'
export default {
  name: 'Login',
  data: function() {
    return {
      email:'',
      password:''
    }
  },
  methods:{
    login:function () {
      var router = this.$router;
      firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(
        function (user) {
          router.replace('/hello')
        },
        function (err) {
          alert("Error -- "+err.message)
        }
      );
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
