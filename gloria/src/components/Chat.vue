<template>
  <div class="chat">

      <div class="chat-header">
           <h1>GLORIA</h1>
            <span> - New chat started</span>
      </div>
      <div id="webchat" class="webchat-gloria"></div>

  
 
  </div>
</template>

<script>
import { App } from 'botframework-webchat';
export default {
  name: 'Chat',
  props: {
  },
 mounted(){
   window.WebChat.renderWebChat({
        directLine: window.WebChat.createDirectLine({ secret: 'YOUR_BOT_SECRET_FROM_AZURE_PORTAL' })
      }, document.getElementById('webchat'));
 }
  
}

</script>



<style scoped>
.webchat-gloria{
  width: 50%;
  float: right;
}
</style>
