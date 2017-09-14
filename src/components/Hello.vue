<template>
  <div class="hello">
    <div class="blocks">
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
        <md-button class="md-raised md-primary block" v-if="block.type=='text'" md-menu-trigger>{{block.content }}</md-button>
        <md-button class="md-raised md-primary block" v-if="block.type=='attribute'" md-menu-trigger>{{block.name}}</md-button>
        <md-button class="md-raised md-primary block" v-if="block.type=='value'" md-menu-trigger>{{block.name}}</md-button>
        <md-button class="md-raised md-primary block" v-if="block.type=='endTag'" md-menu-trigger>{{block.name}}</md-button>
        <md-button class="md-raised md-primary block" v-if="block.type=='closeTag'" md-menu-trigger>{{"<" + block.name + '>'}}</md-button>
        <md-button class="md-raised md-primary block" v-if="block.type=='HTML'" md-menu-trigger>{{'adae'}}</md-button>

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
              <span class="comment">{{hint.comment}}</span>

            </md-menu-item>
          </div>
          <md-button @click="removeBlock(block)" class="md-raised md-primary">
            <span>削除</span>
          </md-button>
          <md-menu-item v-on:selected="newLine()">
            <span>新しく書く</span>
          </md-menu-item>

<!-- v-if="hint.type=='HTML'" -->

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
          type: 'tag',
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
    newLine() {}
  },
  computed: {
    hints() {
      console.log(this.selectedBlock)
      var hints = getHints(this.selectedBlock)
      return hints
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
.hint-container::-webkit-scrollbar{width:10px;}/*バーの太さ*/
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

</style>
