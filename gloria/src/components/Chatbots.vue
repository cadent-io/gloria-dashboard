<template>
 <div class="bots" >
     
     <div class="bot"  v-for="bot in chatbots">
         <img :src="bot.img">
         <h1>{{bot.name}}</h1>
         <md-list>
      <md-list-item>
        <span class="md-list-item-text">Unique Users</span>
        <span class="md-list-item-text">{{bot.uniqueUsers}}</span>
      </md-list-item>

      <md-list-item>
        <span class="md-list-item-text">Conversations</span>
        <span class="md-list-item-text">{{bot.conversations}}</span>
      </md-list-item>

      <md-list-item>
         <span class="md-list-item-text">Successful</span>
        <span class="md-list-item-text">{{bot.successful}}</span>
      </md-list-item>

      <md-list-item>
         <span class="md-list-item-text">Time</span>
        <span class="md-list-item-text">{{bot.time}}</span>
      </md-list-item>
       <md-list-item>
         <span class="md-list-item-text">Hand-off</span>
        <span class="md-list-item-text">{{bot.handOff}}</span>
      </md-list-item>
         </md-list>
          <md-button class="md-raised see-more">SEE MORE</md-button>
     </div>
 </div>
</template>

<script>
export default {
  name: 'Chatbots',
  props: {
  },
  data:()=>({
      chatbots:[{
          name:'Service Bot',
          img:'https://1vwqd637eh7q37n2sx1ijnqc-wpengine.netdna-ssl.com/wp-content/themes/so-creative/assets/img/whites-bg-img.png',
          uniqueUsers:100,
          conversations:100,
          successful:300,
          time:'5:20',
          handOff:5

      },
      {
          name:'Service Bot',
          img:'https://1vwqd637eh7q37n2sx1ijnqc-wpengine.netdna-ssl.com/wp-content/themes/so-creative/assets/img/whites-bg-img.png',
          uniqueUsers:100,
          conversations:100,
          successful:300,
          time:'5:20',
          handOff:5

      },
      {
          name:'Service Bot',
          img:'https://1vwqd637eh7q37n2sx1ijnqc-wpengine.netdna-ssl.com/wp-content/themes/so-creative/assets/img/whites-bg-img.png',
          uniqueUsers:100,
          conversations:100,
          successful:300,
          time:'5:20',
          handOff:5

      },
       {
          name:'Service Bot',
          img:'https://1vwqd637eh7q37n2sx1ijnqc-wpengine.netdna-ssl.com/wp-content/themes/so-creative/assets/img/whites-bg-img.png',
          uniqueUsers:100,
          conversations:100,
          successful:300,
          time:'5:20',
          handOff:5

      },
     
      ]
  })
}

</script>



<style lang="scss" scoped>
  
  .bot{
      background-color: rgb(98,191,44);
      width:15%;
      display: inline-block;
      margin-right: 30px;
      border-radius: 10px;
      margin-bottom: 25px;
      color:white;
     
  }
  h1{
      text-align: left;
      padding-left: 15px;
  }
   img{
       width:80px; 
      height: 80px !important;
       margin: 0 auto; 
       margin:20px;
       border-radius: 50%;
      }
  .bot .md-list-item-text {
    flex: initial;
}
.see-more{
    width:80%;
    border-radius: 7px;
    background-color: white;
    margin-bottom: 15px;
}
</style>
