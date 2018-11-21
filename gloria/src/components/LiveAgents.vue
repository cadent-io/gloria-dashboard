<template>
 <div class="agents" >
         <h1>Live Agents (5 of 6)</h1>
         <md-field>
      <md-input v-model="search" placeholder="Search"></md-input>
    </md-field>
      <md-button class="md-raised add">ADD Agent</md-button>
      <md-list>
      <md-list-item v-for="agent in agents">
        <md-avatar>
          <img :src="agent.img" alt="People">
        </md-avatar>

        <span class="md-list-item-text">{{agent.name}}</span>
        <span class="md-list-item-text">{{agent.status}}</span>
        <span class="md-list-item-text">{{agent.department}}</span>
        <span class="md-list-item-text">{{agent.from}}</span>
        <span class="md-list-item-text"> <md-button class="edit">edit</md-button> <md-button class="delete">delete</md-button></span>

      
      </md-list-item>
      </md-list>
 </div>
</template>

<script>
export default {
  name: 'Agents',
  props: {
  },
  data:()=>({
     search:null,
     agents:[{
         img:'https://placeimg.com/40/40/people/5',
         name:'Amanda Reyes',
         status:'Active',
         department:'HR',
         from:'Switzerland'
     },
     {
         img:'https://placeimg.com/40/40/people/5',
         name:'Amanda Reyes',
         status:'Active',
         department:'HR',
         from:'Switzerland'
     },
     {
         img:'https://placeimg.com/40/40/people/5',
         name:'Amanda Reyes',
         status:'Active',
         department:'HR',
         from:'Switzerland'
     }
     ]
  })
}

</script>



<style lang="scss" scoped>
  .agents{
      width:75%;
      float: right;
     margin-right:4.5%;
      background-color: white;
      margin-top:10px;
      height: 100vh;
  }
  h1,button{
      display: inline-block;
  }
 
  .add{
      float: right;
      position: absolute;
      top: 98px;
    right: 100px;
    padding: 10px;
    border-radius:5px;
  }
  h1{
      margin-left: 20px;
      float: left;
      margin-right:25px;
  }
  input{
      border:1px solid black !important;
      border-radius: 10px;
      margin-top: -6px;
      padding: 20px !important;
     
  }
  .md-field {
    width: 25%;
    }
     .agents .md-list-item-container {
    border-top: 1px solid black !important;
    padding: 10px !important;
    }
    .edit{
        
    }
</style>
