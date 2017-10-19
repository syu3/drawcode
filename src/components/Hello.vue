/* global firebase */
<template>
  <div class="hello">
    <md-toolbar class="md-toolbar">
      <md-button class="md-raised" @click='reload()'>読み込む</md-button>
      <md-button class="md-raised" @click="save()">保存</md-button>
      <md-button class="md-raised" @click="preview('dialog4')">プレビュー</md-button>
      <md-button class="md-raised md-warn" @click="upload()">公開</md-button>




    </md-toolbar>
    <!-- <ul class="share-buttons">
      <li><a href="https://www.facebook.com/sharer/sharer.php?u=&t=" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.URL) + '&t=' + encodeURIComponent(document.URL)); return false;"><img alt="Share on Facebook" src="images/flat_web_icon_set/color/Facebook.png" /></a></li>
      <li><a href="https://twitter.com/intent/tweet?source=&text=:%20" target="_blank" title="Tweet" onclick="window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(document.title) + ':%20'  + encodeURIComponent(document.URL)); return false;"><img alt="Tweet" src="images/flat_web_icon_set/color/Twitter.png" /></a></li>
      <li><a href="mailto:?subject=&body=:%20" target="_blank" title="Send email" onclick="window.open('mailto:?subject=' + encodeURIComponent(document.title) + '&body=' +  encodeURIComponent(document.URL)); return false;"><img alt="Send email" src="images/flat_web_icon_set/color/Email.png" /></a></li>
    </ul> -->

    <div class="blocks"　v-for="blocks in blocksArray">

      <md-menu md-align-trigger md-offset-y="12" md-direction='bottom right' v-for="block in blocks" @open="selectedBlock = block">
        <md-button class="md-raised md-primary block" v-if="block.type=='tag'" md-menu-trigger>{{ "<"+block.name }}</md-button>
        <md-button class="md-raised md-primary block" v-if="block.type=='text'" md-menu-trigger>{{block.content }}<i class="material-icons editButton" @click='editBlock(block,"text")'>edit</i></md-button>
        <md-button class="md-raised md-primary block" v-if="block.type=='attribute'" md-menu-trigger>{{block.name}}</md-button>
        <md-button class="md-raised md-primary block" v-if="block.type=='attributeCSS'" md-menu-trigger>{{"{"+block.name}}</md-button>
        <md-button class="md-raised md-primary block" v-if="block.type=='value'" md-menu-trigger>{{block.value}}<i class="material-icons editButton" v-if="block.value!='button'" @click='editBlock(block,"value" ,block.value)'>edit</i></md-button>
        <md-button class="md-raised md-primary block" v-if="block.type=='youtubeValue'" md-menu-trigger>{{block.value}}<i class="material-icons editButton" @click='editBlock(block,"youtubeValue" ,block.value)'>edit</i></md-button>
        <md-button class="md-raised md-primary block" v-if="block.type=='valueCSS'" md-menu-trigger>{{":"+block.value+"}"}}<i class="material-icons editButton" @click='editBlock(block,"valueCSS" ,block.value)'>edit</i></md-button>
        <md-button class="md-raised md-primary block" v-if="block.type=='endTag'" md-menu-trigger>{{block.name}}</md-button>
        <md-button class="md-raised md-primary block" v-if="block.type=='closeTag'" md-menu-trigger>{{"<" + block.name + '>'}}</md-button>
        <md-button class="md-raised md-primary block" v-if="block.type=='root'" md-menu-trigger >{{block.name}}</md-button>
        <md-button class="md-raised md-primary block" v-if="block.type=='newLine'" md-menu-trigger >↩︎</md-button>


        <br v-if="block.type=='newLine'">

        <!-- <h1 v-if="block.type=='tag'" md-menu-trigger>{{ "<"+block.name }}</h1>
        <h1 v-if="block.type=='text'" md-menu-trigger>{{block.content}}</h1> -->
        <md-menu-content style="width:300px;">
          <div class="hint-container">
            <md-menu-item  v-on:selected="addBlock(hint)" v-for="hint in hints">
              <span v-if="hint.type=='tag'">{{"<"+hint.name}}</span>
              <span v-if="hint.type=='text'">{{hint.content}}</span>
              <span v-if="hint.type=='attribute'">{{hint.name}}</span>
              <span v-if="hint.type=='attributeCSS'">{{hint.name}}</span>
              <span v-if="hint.type=='value'">{{hint.value}}</span>
              <span v-if="hint.type=='valueCSS'">{{hint.value}}</span>
              <span v-if="hint.type=='endTag'">{{hint.name}}</span>
              <span v-if="hint.type=='closeTag'">{{"<" + hint.name + '>'}}</span>
              <span v-if="hint.type=='root'">{{hint.name}}</span>
              <span class="comment">{{hint.comment}}</span>
              <span v-if="hint.type=='newLine'">{{hint.name}}</span>


            </md-menu-item>
          </div>
          <md-button @click="removeBlock(block)" class="md-raised md-primary" v-if="block.type!='root'">
            <span>削除</span>
          </md-button>
          <md-menu-item v-on:selected="newLine()">
            <span>新しく書く</span>
          </md-menu-item>

<!-- v-if="hint.type=='root'" -->

        </md-menu-content>
      </md-menu>




      <md-dialog-alert
        :md-content-html="alert2.contentHtml"
        @open="onOpen"
        @close="onClose"
        ref="dialog4"
        class="previewDialog"
        >


      </md-dialog-alert>

      <md-dialog-alert
        :md-title="uploadFinishAlert.title"
        :md-content="uploadFinishAlert.content+prompt.value"
        :md-ok-text="uploadFinishAlert.ok"
        @open="onOpen"
        @close="onClose"
        ref="uploadFinish"
        >
      </md-dialog-alert>

      <md-dialog-prompt
        :md-title="prompt.title"
        :md-ok-text="prompt.ok"
        :md-cancel-text="prompt.cancel"
        :md-input-placeholder="prompt.placeholder"
        @open="onOpen"
        @close="uploadClose"
        v-model="prompt.value"
        ref="dialog6">
      </md-dialog-prompt>
      <!-- <md-dialog md-open-from="#custom" md-close-to="#custom" ref="dialog4" class="previewDialog">
        <md-dialog-title>Lorem ipsum dolor sit amet</md-dialog-title>

        <md-dialog-content >Nemo, nobis necessitatibus ut illo, ducimus ex.</md-dialog-content>

        <md-dialog-actions>
          <md-button class="md-primary" @click="closeDialog('dialog4')">Cancel</md-button>
          <md-button class="md-primary" @click="closeDialog('dialog4')">Ok</md-button>
        </md-dialog-actions>
      </md-dialog> -->

    </div>
    <iframe width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>
    <md-whiteframe md-elevation="9" style="width:100%; height:100px; position:absolute; bottom: 0px;">{{codeString}}</md-whiteframe>
  </div>
  <!-- <div class="home">
    <md-button>アイウエオ</md-button>
  </div> -->
</template>


<script>
/* global firebase */
import getHints from './getHints'
import getPreview from './getPreview'

export default {
  name: 'hello',
  data: function() {
    return {
      blocks: [
        {
          type: 'root',
          name: 'HTML'
        }
      ],
      selectedBlock: null,
      alert2: {
        contentHtml: 'aefaew'
      },

      uploadFinishAlert: {
        title: 'サイトを公開しました',
        content: 'あなたのサイトのURLは、 https://drawcode.net/#/usersite/',
        ok: '閉じる'
      },
      saveString: '',
      prompt: {
        title: 'ニックネームをいれてください',
        ok: '公開する',
        cancel: 'やめる',
        id: 'name',
        name: 'name',
        placeholder: '例）',
        value: ''
      }
    }
  },
  methods: {
    cancel: function() {
      window.alert('キャンセル')
    },

    onOpen: function() {
      console.log('Opened')
    },
    onClose: function(type) {
      console.log('Closed', type)
      // this.prompt.value = ''
    },
    closeDialog: function(ref) {
      this.$refs[ref][0].close()
    },
    openDialog: function(refs) {
      console.log(this.$refs[refs])
      this.$refs[refs][0].open()
    },
    uploadClose: function(type) {
      console.log('typeは', type)
      if (type !== 'cancel') {
        console.log(this.prompt.value)
        var database = firebase.database()
        console.log(database)
        console.log('3')
        database.ref('users/' + this.prompt.value).set({
          code: this.codeString
        })
        this.$refs.uploadFinish[0].open()
      }
    },
    showHitns: function() {
      this.$refs.menu.open()
    },
    addBlock: function(block) {
      console.log(this, block)
      console.log(JSON.stringify(this.blocks))
      // console.log(block)
      var index = this.blocks.indexOf(this.selectedBlock)
      if (index >= 0) {
        this.blocks.splice(index + 1, 0, block)
      }
      this.saveString = JSON.stringify(this.blocks)
      console.log(this.saveString)
      var date1, date2 // 日付データを格納する変数
      var kigen = 30 // cookieの期限（今回は30日）
      date1 = new Date()
      date1.setTime(date1.getTime() + kigen * 24 * 60 * 60 * 1000)
      date2 = date1.toGMTString()

      console.log('保存するものは', this.saveString)
      document.cookie = 'saveString = ' + this.saveString + ';expires=' + date2
      // this.blocks.push(block)
    },
    removeBlock: function(block) {
      console.log(block)

      var index = this.blocks.indexOf(block)
      if (index >= 0) {
        this.blocks.splice(index, 1)
      }
    },
    newLine: function() {
      console.log('アイウエオ', this.blocks)
      var index = this.blocks.indexOf(this.selectedBlock)
      if (index >= 0) {
        this.blocks.splice(index + 1, 0, { type: 'newLine' })
      }
    },
    editBlock: function(block, type, value) {
      console.log('faefa', block)
      var userText = window.prompt('変更したいテキストを入力してください')
      // var index = block.indexOf("{type:'text',content:")
      // block.splice(index + 1, index + 1, 'afejaofj')
      if (type === 'text') {
        block.content = userText
      } else if (type === 'youtubeValue') {
        var url = userText
        var id = url.split('watch?v=')[1].slice(0, 11)
        window.alert(id)

        var src = 'https://www.youtube.com/embed/' + id
        // var youtubeIframe = document.createElement('iframe')
        // youtubeIframe.src = src
        // document.body.appendChild(youtubeIframe)
        block.value = src
      } else if (type === 'valueCSS') {
        block.value = userText
      } else {
        if (isNaN(userText) === false) {
          block.value = userText + 'px'
        } else {
          block.value = userText
        }
      }
      // var previewString = getPreview(this.blocks)

      // console.log(previewArray)
      // var codeString = previewArray.join(',').replace(/,/g, ' ')
      // this.codeString = previewString
    },
    reload: function() {
      console.log('document.cookie', document.cookie)
      // var cookies = document.cookie.split('; ')
      // cookies.shift()
      // console.log('aeiceafwo', cookies)
      // console.log('JSON結果は、', JSON.parse(cookies.replace(/saveString=/g, '')))
      var reloadArray = JSON.parse(document.cookie.replace(/saveString=/g, ''))
      // var reloadArray = JSON.parse(cookies[0].replace(/saveString=/g, ''))
      console.log('JSON結果は、', reloadArray)
      console.log(toString.call(reloadArray))
      for (var i = 0; i < reloadArray.length; i++) {
        // console.log(reloadArray[i])
        if (reloadArray[i].type === 'root') {
        } else {
          this.blocks.splice(i, 0, reloadArray[i])

          this.saveString = JSON.stringify(this.blocks)
        }
      }
    },
    preview: function(ref) {
      console.log('thisblokcsは、', this.blocks)

      this.alert2.contentHtml =
        '<div style="width:75vw; height:65vh;">' + this.codeString + '</div>'
      console.log('afjioeaufoa', this.contentHtml)
      this.$refs.dialog4[0].open()
    },
    save: function() {
      this.saveString = JSON.stringify(this.blocks)
      console.log(this.saveString)
      var date1, date2 // 日付データを格納する変数
      var kigen = 30 // cookieの期限（今回は30日）
      date1 = new Date()
      date1.setTime(date1.getTime() + kigen * 24 * 60 * 60 * 1000)
      date2 = date1.toGMTString()

      console.log('保存するものは', this.saveString)
      document.cookie = 'saveString = ' + this.saveString + ';expires=' + date2
      // document.cookie = 'saveString=; max-age=0'
    },
    upload: function() {
      this.$refs.dialog6[0].open()
      // var userId = window.prompt(
      //   'あなたの、名前と生年月日とサイト名をいれてください\n例）名前が「山田太郎」生年月日が「10月08日」サイト名が「自己紹介サイト」の場合→山田太郎1008自己紹介サイト'
      // )

      // console.log('1')
      // var uploadString = this.codeString
      // console.log('2')
      // // Get a reference to the database service
      // var database = firebase.database()
      // console.log(database)
      // console.log('3')
      // database.ref('users/' + userId).set({
      //   code: uploadString
      // })
      // console.log('6')
    }
  },
  computed: {
    hints: function() {
      console.log(this.selectedBlock)
      var hints = getHints(this.selectedBlock)
      return hints
    },
    blocksArray: function() {
      const blocksArray = [[]]
      let index = 0
      for (let block of this.blocks) {
        blocksArray[index].push(block)
        if (block.type === 'newLine') {
          index++
          blocksArray[index] = []
        }
      }
      return blocksArray
    },
    codeString: function() {
      console.log('はいはいはいはいはい', this.blocks)
      var preview = getPreview(this.blocks)
      return preview
    }
  },
  created: function() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.block{
  text-transform: inherit;
}

.hint-container{
  display: flex;
  flex-direction: column;
  max-height: 200px;
  overflow-y:scroll;

}
.hint-container::-webkit-scrollbar{width:5px;}/*バーの太さ*/
.hint-container::-webkit-scrollbar-track{background:#dddddd;}/*バーの背景色*/
.hint-container::-webkit-scrollbar-thumb{background:#2cc2e4;}/*バーの色*/
.hint{
  display: block;
}

.deleteButton{
  display: flex;
  flex-direction: column;
}

.comment{
  right: 0px;
}

.editButton{
  position: relative;
  right: 0px;
  top: 5px;
  left: 10px;
  width: 20px;
}

.previewDialog>div{
  width: 100%;
}

.md-toolbar{
  margin-top: -64px;
  margin-right: 10px;
  width: 425px;
  margin-left: auto;
}
</style>
