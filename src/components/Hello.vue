<template>
  <div class="hello">
    <md-toolbar>
      <md-button class="md-raised md-warn" @click='reload()'>読み込む</md-button>
      <md-button class="md-raised" @click="save()">保存</md-button>
      <md-button class="md-raised" @click="preview('dialog4')">プレビュー</md-button>
      <md-button class="md-raised md-warn">公開</md-button>


    </md-toolbar>
    <div class="blocks"　v-for="blocks in blocksArray">
      <!-- <span　v-if="blocks.indexOf("{type: 'newLine'}") != -1">{{blocks}}</span> -->



      <!-- <md-button class="md-raised md-primary block">p</md-button>
      <md-icon>trending_flat</md-icon>
      <md-button class="md-raised md-primary block">&gt;</md-button>
      <md-icon>trending_flat</md-icon>
      <md-button class="md-raised md-primary block">テキスト</md-button>
      <md-icon>trending_flat</md-icon>
      <md-button class="md-raised md-primary block">&lt;/p&gt;</md-button> -->


      <!-- <md-button class="md-raised md-primary block" v-for="block in blocks" @click='showHitns'>
        <h1 v-if="block.type=='tag'">{{ "<"+block.name }}</h1>
        <h1 v-if="block.type=='text'">{{block.content}}</h1>
      </md-button> -->


      <md-menu md-align-trigger md-offset-y="12" md-direction='bottom right' v-for="block in blocks" @open="selectedBlock = block">
        <md-button class="md-raised md-primary block" v-if="block.type=='tag'" md-menu-trigger>{{ "<"+block.name }}</md-button>
        <md-button class="md-raised md-primary block" v-if="block.type=='text'" md-menu-trigger>{{block.content }}<i class="material-icons editButton" @click='editBlock(block,"text")'>edit</i></md-button>
        <md-button class="md-raised md-primary block" v-if="block.type=='attribute'" md-menu-trigger>{{block.name}}</md-button>
        <md-button class="md-raised md-primary block" v-if="block.type=='value'" md-menu-trigger>{{block.value}}<i class="material-icons editButton" v-if="block.value!='button'" @click='editBlock(block,"value" ,block.value)'>edit</i></md-button>
        <md-button class="md-raised md-primary block" v-if="block.type=='youtubeValue'" md-menu-trigger>{{block.value}}<i class="material-icons editButton" @click='editBlock(block,"youtubeValue" ,block.value)'>edit</i></md-button>
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
              <span v-if="hint.type=='value'">{{hint.value}}</span>
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
        <!-- <div :md-content-html="alert2.contentHtml" style="width:100%;">

        </div> -->
      </md-dialog-alert>
      <!-- <md-dialog md-open-from="#custom" md-close-to="#custom" ref="dialog4" class="previewDialog">
        <md-dialog-title>Lorem ipsum dolor sit amet</md-dialog-title>

        <md-dialog-content >Nemo, nobis necessitatibus ut illo, ducimus ex.</md-dialog-content>

        <md-dialog-actions>
          <md-button class="md-primary" @click="closeDialog('dialog4')">Cancel</md-button>
          <md-button class="md-primary" @click="closeDialog('dialog4')">Ok</md-button>
        </md-dialog-actions>
      </md-dialog> -->

    </div>
    <md-whiteframe md-elevation="9" style="width:100%; height:100px; position:absolute; bottom: 0px;">{{codeString}}</md-whiteframe>

  </div>
  <!-- <div class="home">
    <md-button>アイウエオ</md-button>
  </div> -->
</template>

<script>
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
      codeString: '',
      saveString: ''
    }
  },
  methods: {
    closeDialog: function(ref) {
      this.$refs[ref].close()
    },
    onOpen: function() {
      console.log('Opened')
    },
    onClose: function(type) {
      console.log('Closed', type)
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
      console.log('aiueo', this.saveString)
      var previewArray = getPreview(this.blocks)
      // window.alert(previewArray)
      // console.log(previewArray)
      var codeString = previewArray.join(',').replace(/,/g, ' ')
      this.codeString = codeString
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
      var previewArray = getPreview(this.blocks)
      console.log('this.blocks', this.blocks)
      var codeString1 = previewArray.join(',').replace(/,/g, ' ')
      this.codeString = codeString1.replace(/<br>/g, '\n')
      console.log('codeString1', codeString1)
      console.log(this.codeString)
      // var blocksArray = [
      //   [{ type: 'tag', name: 'p' }, { type: 'endTag', name: '>' }],
      //   [{ type: 'tag', name: 'a' }, { type: 'endTag', name: '>' }]
      // ]
      //
      // blocksArray.push([{ type: 'tag', name: 'center' }])
      console.log(this.blocks)
    },
    editBlock: function(block, type, value) {
      console.log('faefa', block)
      var userText = window.prompt('変更したいテキストを入力してください')
      // var index = block.indexOf("{type:'text',content:")
      // block.splice(index + 1, index + 1, 'afejaofj')
      if (type === 'text') {
        block.content = userText
      } else if (type === 'youtubeValue') {
        block.value = userText
      } else {
        block.value = userText
      }
      var previewArray = getPreview(this.blocks)

      // console.log(previewArray)
      var codeString = previewArray.join(',').replace(/,/g, ' ')
      this.codeString = codeString
    },
    reload: function() {
      console.log(JSON.parse(document.cookie.replace(/saveString=/g, '')))
      var reloadArray = JSON.parse(document.cookie.replace(/saveString=/g, ''))
      for (var i = 0; i < reloadArray.length; i++) {
        console.log(reloadArray[i])
        if (reloadArray[i].type === 'root') {
        } else {
          this.blocks.splice(i, 0, reloadArray[i])
          var previewArray = getPreview(this.blocks)

          var codeString = previewArray.join(',').replace(/,/g, ' ')
          this.codeString = codeString
          this.saveString = JSON.stringify(this.blocks)
        }
      }
    },
    preview: function(ref) {
      console.log('thisblokcsは、', this.blocks)
      var previewArray = getPreview(this.blocks)
      console.log('previewArrayは、', previewArray)
      var previewString = previewArray.join(',').replace(/,/g, ' ')
      this.alert2.contentHtml =
        '<div style="width:75vw; height:65vh;">' + previewString + '</div>'
      console.log('afjioeaufoa', this.contentHtml)
      this.$refs.dialog4[0].open()
    },
    save: function() {
      var date1, date2 // 日付データを格納する変数
      var kigen = 30 // cookieの期限（今回は30日）
      date1 = new Date()
      date1.setTime(date1.getTime() + kigen * 24 * 60 * 60 * 1000)
      date2 = date1.toGMTString()

      console.log('保存するものは', this.saveString)
      document.cookie = 'saveString = ' + this.saveString + ';expires=' + date2
      // document.cookie = 'saveString=; max-age=0'
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
    }
  }
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
</style>
