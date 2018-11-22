<template>
  <div class="file-upload">
    <h1 class="title-file">Upload Files</h1>
    <h1 class="title-url">Upload URL</h1>
    <form>
      <fieldset class="files">
        <div class="multiple-upload">
           <div class="example-foorer">
              <div class="btn-group">
                <file-upload class="btn btn-primary dropdown-toggle" :post-action="postAction" :put-action="putAction"
                  :extensions="extensions" :accept="accept" :multiple="multiple" :directory="directory" :size="size || 0"
                  :thread="thread < 1 ? 1 : (thread > 5 ? 5 : thread)" :headers="headers" :data="data" :drop="drop"
                  :drop-directory="dropDirectory" :add-index="addIndex" v-model="files" @input-filter="inputFilter"
                  @input-file="inputFile" ref="upload">
                  <i class="fa fa-plus"></i>
                  Select or Drag your File
                </file-upload>

              </div>
              <button type="button" class="btn btn-success" v-if="!$refs.upload || !$refs.upload.active" @click.prevent="$refs.upload.active = true">
                <i class="fa fa-arrow-up" aria-hidden="true"></i>
                Start Upload
              </button>

            </div>
          <div v-show="$refs.upload && $refs.upload.dropActive" class="drop-active">
            <h3>Drop files to upload</h3>
          </div>
          <div class="upload" v-show="!isOption">
            <div class="table-responsive">
              <table class="table table-hover">
                
                <tbody>
                  <tr v-if="!files.length">
                    <td colspan="7">
                      <div class="text-center p-5">
                        
                      </div>
                    </td>
                  </tr>
                  <tr v-for="(file, index) in files" :key="file.id">
                    <td>{{index}}</td>
                    <td>
                      <img v-if="file.thumb" :src="file.thumb" width="40" height="auto" />
                      <span v-else>No Image</span>
                    </td>
                    <td>
                      <div class="filename">
                        {{file.name}}
                      </div>
                      <div class="progress" v-if="file.active || file.progress !== '0.00'">
                        <div :class="{'progress-bar': true, 'progress-bar-striped': true, 'bg-danger': file.error, 'progress-bar-animated': file.active}"
                          role="progressbar" :style="{width: file.progress + '%'}">{{file.progress}}%</div>
                      </div>
                    </td>
                    <td>{{file.size | formatSize}}</td>
            <td>{{file.speed | formatSize}}</td>
                    <div>
    <div>
      <progress :value="parseInt(file.progress)" max="100">
      </progress>
  </div>
  </div>
                    <td v-if="file.error">{{file.error}}</td>
                    <td v-else-if="file.success">success</td>
                    <td v-else-if="file.active">active</td>
                    <td v-else></td>
                    <td>
                      <div class="btn-group">
                        <a class="dropdown-item" href="#" @click.prevent="$refs.upload.remove(file)">Remove</a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div :class="{'modal-backdrop': true, 'fade': true, show: addData.show}"></div>
          <div :class="{'modal-backdrop': true, 'fade': true, show: editFile.show}"></div>
          <div :class="{modal: true, fade: true, show: editFile.show}" id="modal-edit-file" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">

            </div>
          </div>

        </div>

      </fieldset>

      <fieldset class="urls">
        <md-field>
          <md-input v-model="url" placeholder="Insert URL"></md-input>
        </md-field>
        <md-list>
          <md-list-item v-for="item in urls">{{item}}</md-list-item>

        </md-list>
      </fieldset>
    </form>
    <md-button type="button" class="md-primary add"><router-link to="/dashboard">GO TO DASHBOARD</router-link></md-button>
  </div>
</template>

<script>
import Cropper from 'cropperjs'
import ImageCompressor from '@xkeshi/image-compressor'
import FileUpload from 'vue-upload-component'
export default {
    name:'Files',
  components: {
    FileUpload,
  },
  data() {
    return {
      files: [],
       amount: 25,
      buffer: 40,
      accept: 'image/png,image/gif,image/jpeg,image/webp',
      extensions: 'gif,jpg,jpeg,png,webp',
        url:null,
            urls:[
                'hgdshfgdshgfds',
                'hgdshfgdshgfds',
                'hgdshfgdshgfds'

            ],
      // extensions: ['gif', 'jpg', 'jpeg','png', 'webp'],
      // extensions: /\.(gif|jpe?g|png|webp)$/i,
      minSize: 1024,
      size: 1024 * 1024 * 10,
      multiple: true,
      directory: false,
      drop: true,
      dropDirectory: true,
      addIndex: false,
      thread: 3,
      name: 'file',
      postAction: '/upload/post',
      putAction: '/upload/put',
      headers: {
        'X-Csrf-Token': 'xxxx',
      },
      data: {
        '_csrf_token': 'xxxxxx',
      },
      autoCompress: 1024 * 1024,
      uploadAuto: false,
      isOption: false,
      addData: {
        show: false,
        name: '',
        type: '',
        content: '',
      },
      editFile: {
        show: false,
        name: '',
      }
    }
  },
  watch: {
    // 'editFile.show'(newValue, oldValue) {
    // 
    //   if (!newValue && oldValue) {
    //     this.$refs.upload.update(this.editFile.id, { error: this.editFile.error || '' })
    //   }
    //   if (newValue) {
    //     this.$nextTick(function () {
    //       if (!this.$refs.editImage) {
    //         return
    //       }
    //       let cropper = new Cropper(this.$refs.editImage, {
    //         autoCrop: false,
    //       })
    //       this.editFile = {
    //         ...this.editFile,
    //         cropper
    //       }
    //     })
    //   }
    // },
    'addData.show'(show) {
      if (show) {
        this.addData.name = ''
        this.addData.type = ''
        this.addData.content = ''
      }
    },
  },
  methods: {
    inputFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        // Before adding a file
        // 
        // Filter system files or hide files
        // 
        if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
          return prevent()
        }
        // Filter php html js file
        // 
        if (/\.(php5?|html?|jsx?)$/i.test(newFile.name)) {
          return prevent()
        }
        // Automatic compression
        // 
        if (newFile.file && newFile.type.substr(0, 6) === 'image/' && this.autoCompress > 0 && this.autoCompress < newFile.size) {
          newFile.error = 'compressing'
          const imageCompressor = new ImageCompressor(null, {
            convertSize: Infinity,
            maxWidth: 512,
            maxHeight: 512,
          })
          imageCompressor.compress(newFile.file)
            .then((file) => {
              this.$refs.upload.update(newFile, { error: '', file, size: file.size, type: file.type })
            })
            .catch((err) => {
              this.$refs.upload.update(newFile, { error: err.message || 'compress' })
            })
        }
      }
      if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
        // Create a blob field
        // 
        newFile.blob = ''
        let URL = window.URL || window.webkitURL
        if (URL && URL.createObjectURL) {
          newFile.blob = URL.createObjectURL(newFile.file)
        }
        // Thumbnails
        // 缩略图
        newFile.thumb = ''
        if (newFile.blob && newFile.type.substr(0, 6) === 'image/') {
          newFile.thumb = newFile.blob
        }
      }
    },
    // add, update, remove File Event
    inputFile(newFile, oldFile) {
      if (newFile && oldFile) {
        // update
        if (newFile.active && !oldFile.active) {
          // beforeSend
          // min size
          if (newFile.size >= 0 && this.minSize > 0 && newFile.size < this.minSize) {
            this.$refs.upload.update(newFile, { error: 'size' })
          }
        }
        if (newFile.progress !== oldFile.progress) {
          // progress
        }
        if (newFile.error && !oldFile.error) {
          // error
        }
        if (newFile.success && !oldFile.success) {
          // success
        }
      }
      if (!newFile && oldFile) {
        // remove
        if (oldFile.success && oldFile.response.id) {
          // $.ajax({
          //   type: 'DELETE',
          //   url: '/upload/delete?id=' + oldFile.response.id,
          // })
        }
      }
      // Automatically activate upload
      if (Boolean(newFile) !== Boolean(oldFile) || oldFile.error !== newFile.error) {
        if (this.uploadAuto && !this.$refs.upload.active) {
          this.$refs.upload.active = true
        }
      }
    },
    alert(message) {
      alert(message)
    },
    onEditFileShow(file) {
      this.editFile = { ...file, show: true }
      this.$refs.upload.update(file, { error: 'edit' })
    },
    onEditorFile() {
      if (!this.$refs.upload.features.html5) {
        this.alert('Your browser does not support')
        this.editFile.show = false
        return
      }
      let data = {
        name: this.editFile.name,
      }
      if (this.editFile.cropper) {
        let binStr = atob(this.editFile.cropper.getCroppedCanvas().toDataURL(this.editFile.type).split(',')[1])
        let arr = new Uint8Array(binStr.length)
        for (let i = 0; i < binStr.length; i++) {
          arr[i] = binStr.charCodeAt(i)
        }
        data.file = new File([arr], data.name, { type: this.editFile.type })
        data.size = data.file.size
      }
      this.$refs.upload.update(this.editFile.id, data)
      this.editFile.error = ''
      this.editFile.show = false
    },
    // add folader
    onAddFolader() {
      if (!this.$refs.upload.features.directory) {
        this.alert('Your browser does not support')
        return
      }
      let input = this.$refs.upload.$el.querySelector('input')
      input.directory = true
      input.webkitdirectory = true
      this.directory = true
      input.onclick = null
      input.click()
      input.onclick = (e) => {
        this.directory = false
        input.directory = false
        input.webkitdirectory = false
      }
    },
    onAddData() {
      this.addData.show = false
      if (!this.$refs.upload.features.html5) {
        this.alert('Your browser does not support')
        return
      }
      let file = new window.File([this.addData.content], this.addData.name, {
        type: this.addData.type,
      })
      this.$refs.upload.add(file)
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

    .body,
    form {
        background-color: rgb(229, 229, 229);
        margin: inherit;
        width: 100%;
        padding-left: 170px;
        padding-right: 170px;
    }
    .files{
        float: left;
       
    }
    .urls{
        float: right;
        
    }
    .title-file{
        float:left;
        width: 49%;
        text-align: left;
        padding-left: 170px;
    }
     .title-url{
        float:right;
        width: 49%;
        text-align: right;
        padding-right: 170px;
        
    }
    fieldset {
        background-color: white;
     
        width: 49%;
        border: none;
        height: 75vh;
    }

    
   .add {
        background-color: rgb(43, 128, 217);
        color: white;
        border-radius: 5px;
        width: 10%;
        height: 52px;
        margin-left: 0px;
        margin-top: 15px !important;
    }
    .md-file {
    border: 1px dotted blue;
    height: 150px;
    background-color: rgb(232,232,232)
}
.urls .md-field{
    border: 1px solid blue;
    text-align: center;
    padding: 10px;
}
.file-upload{
    width: 80%;
    float: right;
}
.example-foorer{
  border: 1px dotted blue;
    padding: 50px;
}

</style>