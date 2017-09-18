<template>
  <div class="hello">
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
        <md-button class="md-raised md-primary block" v-if="block.type=='value'" md-menu-trigger>{{block.name}}<i class="material-icons editButton" @click='editBlock(block,"value")'>edit</i></md-button>
        <md-button class="md-raised md-primary block" v-if="block.type=='endTag'" md-menu-trigger>{{block.name}}</md-button>
        <md-button class="md-raised md-primary block" v-if="block.type=='closeTag'" md-menu-trigger>{{"<" + block.name + '>'}}</md-button>
        <md-button class="md-raised md-primary block" v-if="block.type=='root'" md-menu-trigger >{{block.name}}</md-button>
        <md-button class="md-raised md-primary block" v-if="block.type=='newLine'" md-menu-trigger >↩︎</md-button>


        <br v-if="block.type=='newLine'">

        <!-- <h1 v-if="block.type=='tag'" md-menu-trigger>{{ "<"+block.name }}</h1>
        <h1 v-if="block.type=='text'" md-menu-trigger>{{block.content}}</h1> -->
        <md-menu-content>
          <div class="hint-container">
            <md-menu-item  v-on:selected="addBlock(hint)" v-for="hint in hints">
              <span v-if="hint.type=='tag'">{{"<"+hint.name}}</span>
              <span v-if="hint.type=='text'">{{hint.content}}</span>
              <span v-if="hint.type=='attribute'">{{hint.name}}</span>
              <span v-if="hint.type=='value'">{{hint.name}}</span>
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
    </div>
  </div>
</template>

<script>
import getHints from './getHints'

export default {
  name: 'hello',
  data() {
    return {
      blocks: [
        {
          type: 'root',
          name: 'HTML'
        }
      ],
      selectedBlock: null
    }
  },
  methods: {
    showHitns() {
      this.$refs.menu.open()
    },
    addBlock(block) {
      console.log(this, block)

      var index = this.blocks.indexOf(this.selectedBlock)
      if (index >= 0) {
        this.blocks.splice(index + 1, 0, block)
      }

      // this.blocks.push(block)
    },
    removeBlock(block) {
      console.log(block)

      var index = this.blocks.indexOf(block)
      if (index >= 0) {
        this.blocks.splice(index, 1)
      }
    },
    newLine() {
      var index = this.blocks.indexOf(this.selectedBlock)
      if (index >= 0) {
        this.blocks.splice(index + 1, 0, { type: 'newLine' })
      }

      // var blocksArray = [
      //   [{ type: 'tag', name: 'p' }, { type: 'endTag', name: '>' }],
      //   [{ type: 'tag', name: 'a' }, { type: 'endTag', name: '>' }]
      // ]
      //
      // blocksArray.push([{ type: 'tag', name: 'center' }])
      console.log(this.blocks)
    },
    editBlock(block, type) {
      console.log('faefa', block)
      var userText = window.prompt('変更したいテキストを入力してください')
      // var index = block.indexOf("{type:'text',content:")
      // block.splice(index + 1, index + 1, 'afejaofj')
      if (type === 'text') {
        block.content = userText
      } else {
        block.name = userText
      }
      console.log('ajgoiajgfajoijfaogjaoeijago;ajgeai', userText)
      console.log('fajfioafmjaoifoa;wgmaokgmioegjaowga;', block)
    }
  },
  computed: {
    hints() {
      console.log(this.selectedBlock)
      var hints = getHints(this.selectedBlock)
      return hints
    },
    blocksArray() {
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
</style>
