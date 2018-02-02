<template>
  <div class="Home">
    <!--<h2>-->
      <!--Account: {{email}}-->
    <!--</h2>-->
    <!--<button @click="logout" type="button" class="btn btn-danger">Logout</button>-->
    <h1 class="animated zoomIn">Say Hi :)</h1>

    <hr>
    <ul is="transition-group">
      <li v-for="question in questions" track-by="time" class="question" :key="question['.key']">
        <span class="animated bounceIn">[{{question.question}} x {{question.account}}]</span>
      </li>
    </ul>
    <hr>
    <br>
    <br>

    <label><textarea v-model="question"></textarea></label>
    <br>
    <button @click="addQuestion" type="button" class="btn btn-success">Chat!</button>



  </div>
</template>

<script>
  import {namesRef} from "../firebase";
  import firebase from "firebase"

  export default {
    name: 'Home',
    data: function () {
      return {
        question: '',
        email: '',
        user: {}
      }
    },
    created() {
      var vm = this;
      firebase.auth().onAuthStateChanged(function (user) {
        vm.email = user.email
      })
    },
    methods: {
      addQuestion: function () {
        var now = new Date();
        namesRef.push({
          question: this.question, account: this.email, time: now.getFullYear() +
          now.getMonth() + now.getDate() + now.getTime()
        });
        namesRef.on('value', function (snapData) {
          console.log(snapData.val().data());
        })
      },
      logout: function () {
        var router = this.$router;
        firebase.auth().signOut().then(() => {
          router.replace('login')
        })
      }
    },
    firebase: {
      questions: namesRef
    },
    computed: {
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
