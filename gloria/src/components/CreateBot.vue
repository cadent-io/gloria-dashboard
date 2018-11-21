<template>
  <div class="create-bot">
    <h1 v-if="this.step === 0" >Configure Q&A chatbot</h1>
    <form novalidate class="md-layout" v-if="this.step === 0">
      <fieldset  class="configure-qa">
        <md-field :class="getValidationClass('botName')">
          <img src="./../assets/create-bot-avatar.png" @click="$refs.file.click()" />
          <md-input name="avatar" type="file" refs="file"  v-model="form.avatar" :disabled="sending" />
          <!-- <label for="bot-name" class="bot-name">Name your bot</label> -->
          <md-input name="bot-name" placeholder="Name your bot" id="bot-name" autocomplete="given-name" v-model="form.botName" :disabled="sending" />
          <span class="md-error" v-if="!$v.form.botName.required">Bot name is required</span>
          <span class="md-error" v-else-if="!$v.form.botName.minlength">Invalid Bot name</span>
        </md-field>

        <md-field :class="getValidationClass('tags')">
          <!-- <label for="tags">Tags</label> -->
          <md-chips v-model="form.tags" md-placeholder="Add Tags"></md-chips>
          <span class="md-error" v-if="!$v.form.tags.required">Tags are required</span>
          <span class="md-error" v-else-if="!$v.form.tags.minlength">Min minLength is 3 </span>
        </md-field>


        <md-field :class="getValidationClass('language')">
          <!-- <label for="language">Language</label> -->
          <md-select placeholder="Language" name="language" id="language" v-model="form.language" md-dense :disabled="sending">
            <md-option></md-option>
            <md-option value="english">English</md-option>
            <md-option value="French">French</md-option>
          </md-select>
          <span class="md-error">The Langugae is required</span>
        </md-field>

        <md-field :class="getValidationClass('endpoint')">
          <img src="./../assets/create-bot-endpoint.png" />
          <!-- <label for="endpoint">Endpoint URL</label> -->
          <md-input type="text" placeholder="Endpoint URL" name="endpoint" id="endpoint" autocomplete="endpoint" v-model="form.endpoint" :disabled="sending" />
          <span class="md-error" v-if="!$v.form.endpoint.required">The Endpoint is required</span>
          <span class="md-error" v-else-if="!$v.form.endpoint">Invalid Endpoint</span>
        </md-field>
        <md-field :class="getValidationClass('microsoft')">
          <img src="./../assets/create-bot-msteams.png" />
          <!-- <label for="microsoft">Microsoft Teams URL</label> -->
          <md-input type="text" placeholder="Microsoft Teams URL" name="microsoft" id="microsoft" autocomplete="microsoft" v-model="form.microsoft"
            :disabled="sending" />
          <span class="md-error" v-if="!$v.form.microsoft.required">The Microsoft Teams URL is required</span>
          <span class="md-error" v-else-if="!$v.form.microsoft">Invalid Microsoft Teams URL</span>
        </md-field>
        <label>Access point</label>
        <img src="./../assets/create-bot-skype.png" v-on:click="form.accessPoint='skype'" />
        <img src="./../assets/create-bot-teams.png" v-on:click="form.accessPoint='teams'" />
        <img src="./../assets/create-bot-other.png" v-on:click="form.accessPoint='other'"/>
        <img src="./../assets/create-bot-windows.png" v-on:click="form.accessPoint='windows'"/>


        <md-card-actions>
          <md-button type="button" @click.prevent="validateConfiguration" class="md-primary" :disabled="sending">Save</md-button>
        </md-card-actions>
      </fieldset>
      <md-progress-bar md-mode="indeterminate" v-if="sending" />
      <md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was saved with success!</md-snackbar>
    </form>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'

  export default {
    name: 'CreateBot',
    mixins: [validationMixin],
    data: () => ({
      step:0,
      form: {
        avatar:null,
        botName: null,
        language: null,
        microsoft: null,
        endpoint: null,
        tags: [
        'Orange',
        'Apple',
        'Pineapple'
      ],
      accessPoint:''
      },
       formConfiguration:{
        search:''
      },
      userSaved: false,
      sending: false,
      lastUser: null
      
    }),
    validations: {
      form: {
        botName: {
          required,
          minLength: minLength(3)
        },
        tags: {
          required,
          minLength: minLength(3)
        },
        microsoft: {
          required,
          maxLength: maxLength(5)
        },
        language: {
          required
        },
        endpoint: {
          required,
        }
      }
    },
    methods: {
      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]
        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      nextToteamMemebers(event){
        this.step=1;
      },
      clearForm () {
        // this.$v.$reset()
        // this.form.firstName = null
        // this.form.tags = null
        // this.form.microsoft = null
        // this.form.language = null
        // this.form.endpoint = null
        // this.form.accessPoint = null
      },
      saveConfiguration () {
        this.sending = true
        console.log(this.form);
        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          this.lastUser = `${this.form.firstName} ${this.form.lastName}`
          this.userSaved = true
          this.sending = false
          this.clearForm()
        }, 1500)
      },
      validateConfiguration () {
        this.$v.$touch()
        //when its need it add validation to !
        if (this.$v.$invalid) {
          this.saveConfiguration();
           this.nextToteamMemebers();
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
  .body,form{
    background-color: rgb(229,229,229);
  }
  fieldset{
    background-color:white;
    margin:0 auto;
    width:75%; 
    border:none;
  }
  input{
    border:1px solid rgba(216, 213, 213, 0.8) !important;
    border-radius: 5px !important;
    padding:25px !important;
    width:100%;
    margin:15px;
    text-align: left;
  }
  label{
   padding:20px;
   display:block;
   text-align: left;
   font-weight: bold;
  }
  .md-chips.md-field,.md-menu.md-select {
    border:1px solid rgba(216, 213, 213, 0.8) !important;
    border-radius: 5px !important;
    width:100%;
    margin:15px;
    text-align: center;
    padding: 10px;
}
.md-menu-content-container .md-scrollbar .md-theme-default{
  background-color:red;
}
button{
  box-shadow: 2px 5px 4px 4px rgba(215,215,215,.5);
  margin: 0 auto !important;
}
img{
  cursor:pointer
}


</style>