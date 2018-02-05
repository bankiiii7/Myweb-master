<template>
      <div id="app">
        <topbar></topbar>
        <br><br>
        <router-view/>
      </div>
</template>

<script>
  import Topbar from './components/Topbar'
  export default {
    components: {Topbar},
    name: 'app',
    methods: {},
    component: {
      Topbar
    }
  }
</script>


<style>

  body {
    background: #C9FFBF;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #FFAFBD, #C9FFBF);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #FFAFBD, #C9FFBF);
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
