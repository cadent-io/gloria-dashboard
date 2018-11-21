<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">Chat Bots</span>
      </md-app-toolbar>
      
      <md-app-content>
       <Chatbots></Chatbots>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import Chatbots from '../components/Chatbots.vue'
export default {
  name: 'Dashboard',
  props: {
  },
   components: {
    Chatbots
  }
}

</script>



<style lang="scss" scoped>
  .md-app {
    max-height: 400px;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
  .page-container{
     width: 84%;
    float: right;
  }
  .md-app {
    max-height: 100%; 
    }
  
  
</style>
