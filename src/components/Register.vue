<template>
  <div class="Login">

    <div class="container">
      <div class="row justify-content-center">
        <form>
          <h1>Register page</h1>
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" class="form-control" id="name" v-model="name">
          </div>
          <div class="form-group">
            <label for="usr">Email:</label>
            <input type="text" class="form-control" id="usr" v-model="email">
          </div>
          <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" id="pwd" v-model="password">
          </div>
          <div class="form-group">
            <div>
              Male: <input type="radio" id="male" value="male" v-model="gender">
            </div>
            Female: <input type="radio" id="female" value="female" v-model="gender">
          </div>
          <div class="form-group">
            <button @click="register" type="button" class="btn btn-success">Submit</button>
          </div>
          <div class="form-group">
            <router-link to="register"><button type="button" class="btn btn-warning">Go Back to Login</button></router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import firebase from 'firebase'
export default {
  name: 'Register',
  data: function() {
    return {
      name:'',
      email:'',
      password:'',
      gender:''
    }
  },
  methods:{
    register:function () {
      var router = this.$router;
      firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(
        function (user) {
          alert("Register done")
          router.replace('/login')
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
