<template>
  <div class="header">
    <div class="logo"></div>
    <img src="../assets/gloria-logo.png" class="logo">
    <h1 class="botName">Service {{this.name}}</h1>
     <md-field>
      <md-input v-model="search" placeholder="Search"></md-input>
    </md-field>
    <div class="user">
        <md-badge :md-content="this.notification">
        <md-button class="md-icon-button">
         <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlApw1AAAAUVBMVEX///91dXW6urp4eHjs7OyBgYGRkZF7e3uhoaGPj4/w8PB+fn75+fmrq6vW1tbPz8+JiYnFxcWYmJiysrLMzMzm5ua4uLja2trg4ODGxsafn5/7NZmsAAADK0lEQVR4nO2diZaiMBBFLdkUoVFUdOb/P3Sa7rZdCBCklnDm3S94l5CkAiGsVgAAAAAAAADAS7yuE6KkXsfWSd4i3tAvmwUqnDJ6IDtZ55nKml5YWyeaxuk1P1FlnWkKcdYVyHLrVBPYdPN/9mTrVP7ErvxEy2mCTg9eWj+u3QK1dS5vErdAYp3Lm8gtEFnn8sadn8g6lzcQsAYCtsSHPoHDApYFl+O+L37L/nixTjhE3Aym/3FoQm2HS08F0aUOsRmq1Dd+S/phnfeF63ZK/C+Fq3XmB3LnAmaMTTDrg4NjAelDdrBO/kXu3Xe71AE0QrV7Pz/RzrwzN3Pit9iuM4u3eu8zm8Iufz558HSRmnWE3KNw8GFrZMCV/7M8MjHgy29jUEyqfcZI9XvyX878Bg9Oj7z5iY66+T+48xOpzsn5rPrBzU6zI7N24BuKz357Hp/PRa26zt+s/8dQewnFPILeURpLBUagGzojEUsJ6markb+Sy6/zMpmxhuui0ASiDaDRBCJz2B3x2ewsm59I+slvKS0gXJUWAlXcMztZAcFJ7IbsZCZ+BxGVogI9mwg4Ed2QcJXPTyT54kBoIfCM5LKA4VHoOJJFtUIXEO0EuUZ+ya1pCrNAi9xM0LuHgJc/YgLsj+PcyJVDKoOQ5DAkvBa4kYoJiK4m7+zFBFSmAcmJQHwx8I3ckqBnPyg3cvtLdfIL7q2DAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEPBHZdtri9BBAWr5hQwU84sYqOYXMFDOz26gnp/ZwCA/q4FJfkYDo/xsBmb5mQwM87MYmOZnMDDOP9vAPP9MgwDyzzIIIv8cA+vkNyBgDQSsgYA1/68AAAAAMJWRD0bD/5HIyDfH4f/KZeSzdbnPzbkYOcBH9vAdDkZOQQv/r2TF4EmSmeEp2b4M3kPh30GrVTwwkEah/n7jiYEDTBrrbF4UvcdhbhfQA1rivv+RLeIGajk7DZKzdS5/YsddtF3M9W8pmpexKGoWcv//EpcPM1pWLury/1BUZZpEUZKW1dKuPgAAAAAAAGAx/AOtPjsSi8qCwwAAAABJRU5ErkJggg==">
        </md-button>
      </md-badge>
  <md-avatar>
      <img :src="this.user.img" alt="Avatar">
    </md-avatar>
    <span>{{this.user.name}}</span>
    
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
  },
  data:()=>({
      search:null,
      name:'Bot',
      user:{
          name:'Dan Modoranu',
          img:'https://vuematerial.io/assets/examples/avatar.png'
      },
      notification:2,
  })
}

</script>



<style lang="scss" scoped>
 .header{
     width:100%;
     background-color: rgb(44,128,217);
     height: 80px;
     padding: 15px;
 }
 .md-field{
     color:white !important;
     width:50%;
     background-color: rgba(86,153,224,.6) !important;
     margin:0 auto;
     text-align: left;
     padding: 10px;
     border-radius: 8px;
 }
 .md-field::placeholder{
    color:white !important;
 }
 .logo{
    position:absolute;
    left: 0;
    top: 0px;
 }
 .botName{
     color:white;
     position: absolute;
     padding-left: 110px;
    
 }
 .user{
    position: absolute;
    right: 80px;
    top:20px;
 }
 .user span{
     color:white;
     padding-left: 15px;
 }
 .md-badge-content {
   top:-10px;
   margin-right: 25px;
}

</style>
