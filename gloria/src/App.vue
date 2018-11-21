<template>
  <div id="app">
    <Header></Header>
    <Menu></Menu>
      <!-- <a href="#/create">CreateBot</a> -->
      <router-view></router-view>
  </div>
 
</template>

<script>
import Vue from 'vue'
import CreateBot from './components/CreateBot.vue'
import Chat from './components/Chat.vue'
import AccessErr from './components/AccessErr.vue'
import TeamMembers from './components/teamMembers.vue'
import Files from './components/Files.vue'
import VueMaterial from 'vue-material'
import Dashboard from './components/Dashboard.vue'
import Header from './components/Header.vue'
import Menu from './components/Menu.vue'
import Chatbots from './components/Chatbots.vue'
import Agents from './components/LiveAgents.vue'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)


export default {
  name: 'app',
  components: {
    CreateBot,
    Chat,
    AccessErr,
    TeamMembers,
    Files,
    Dashboard,
    Header,
    Menu,
    Chatbots,
    Agents
  

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
form{
  background-color: white;
  width: 50%;
  margin: 0 auto;
}
body{
  background-color: rgb(229,229,229)

}
</style>
