<template>
  <div class="HelloWorld">
    <h2>Account: {{email}}</h2>

    <button @click="logout" type="button" class="btn btn-danger">Logout</button>

    <hr>

   <h1>Say Hi :)</h1>
    <textarea v-model="question"></textarea><br>
    <button @click="addQuestion" type="button" class="btn btn-success">Add</button>

    <hr>
    <ul is="transition-group">
      <li v-for="question in reverseItems" track-by="time" class="question" :key="question['.key']">
        <span>[{{question.question}} x {{question.account}}]</span>
      </li>
    </ul>
    <hr>

  </div>
</template>

<script>
  import {namesRef} from "../firebase";
  import firebase from "firebase"
  export default {
  name: 'HelloWorld',
  data: function() {
    return {
      question:'',
      email:'',
      user:{}
    }
  },
  created() {
    var vm = this
    firebase.auth().onAuthStateChanged(function(user) {
      vm.email = user.email
    })
  },
  methods:{
    addQuestion:function() {
      var now = new Date();
      namesRef.push({question:this.question,account:this.email,time:now.getFullYear()+
        now.getMonth()+now.getDate()+now.getTime()})
    },
    logout:function () {
      var router = this.$router
      firebase.auth().signOut().then(() => {
        router.replace('login')
      })
    }
  },
  firebase: {
    questions:namesRef
  },
   computed:{
    reverseItems: function () {
      return this.questions.slice().reverse();
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
