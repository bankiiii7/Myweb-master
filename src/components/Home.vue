<template>
  <div class="Home">
    <h1 class="animated zoomIn">Say Hi :) </h1>
    <hr>
    <table border="0" width="40%" align="center">
      <tr>
        <th></th>
        <th></th>
      </tr>
      <tr v-for="question in questions">
        <template v-if="question.account === email">
          <td></td>
          <td align="right">
            <span class="btn btn-primary btn-lg">
              {{question.question}}
            </span></td>
        </template>
        <template v-else>
          <td align="left">
          {{(question.account).split("@")[0]}}<br>
            <span class="btn btn-outline-primary btn-lg">
              {{question.question}}
            </span>
          </td>
          <td></td>
        </template>
      </tr>
    </table>
    <hr>
    <br>
    <br>
    <label><textarea v-model="question" id="chatTextArea"></textarea></label>
    <br>
    <button @click="addQuestion" type="button" class="btn btn-success">Chat!</button>
  </div>
</template>

<script>
  import {questionsRef} from "../firebase";
  import firebase from "firebase"
  import moment from "moment"

  export default {
    name: 'Home',
    data: function () {
      return {
        question: '',
        email: '',
        user: {},
        msg: 'Message'
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
        questionsRef.push({
          question: this.question, account: this.email, realTime:moment().toISOString(),timeForSort:now.getFullYear() +
          now.getMonth() + now.getDate() + now.getTime()
        });
        document.getElementById("chatTextArea").value = "Fik"
      },
      logout: function () {
        var router = this.$router;
        firebase.auth().signOut().then(() => {
          router.replace('login')
        })
      }
    },
    firebase: {
      questions: questionsRef.orderByChild("timeForSort").limitToLast(10)
    },
    computed: {
      reverseItems: function () {
        return this.questions.slice().reverse();
      },
      checkLongMessage:function (msg) {
        if(msg.length > 15) {

        }
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
