<template>
      <md-app-drawer md-permanent="full">
       

        <md-list>
          <md-list-item>
            <md-icon></md-icon>
            <span class="md-list-item-text"><router-link to="/dashboard">Dasboard</router-link></span>
          </md-list-item>

          <md-list-item>
            <md-icon></md-icon>
            <span class="md-list-item-text"><router-link to="/agents">Live Agents</router-link></span>
          </md-list-item>

          <md-list-item>
            <md-icon></md-icon>
            <span class="md-list-item-text"><router-link to="/files">Knowledge</router-link></span>
          </md-list-item>

          <md-list-item>
            <md-icon></md-icon>
            <span class="md-list-item-text"><router-link to="/chat">Live Chat</router-link></span>
          </md-list-item>
            <md-list-item>
            <md-icon></md-icon>
            <span class="md-list-item-text">Microsoft Teams</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>
</template>

<script>
export default {
  name: 'Menu',
  props: {
  },
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
  .md-permanent-full{
    background-color: white !important;
    color:rgb(158,158,158);
    height: 100vh;
    position: absolute;
    top: 80px;
  }
  .md-drawer.md-permanent-full {
    z-index: 3;
    position: absolute;
    width:16%;
}
  
</style>
