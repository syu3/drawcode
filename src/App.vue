<template>
  <div id="app">
    <md-toolbar style="margin-top:0%;">
      <md-button class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title" style="flex:1">DrawCode</h2>
      <!-- <md-button-toggle md-single>
        <md-button>Works</md-button>
        <md-button>With</md-button>
        <md-button>Text</md-button>
        <md-button>Too</md-button>
      </md-button-toggle> -->

    </md-toolbar>


<md-sidenav class="md-left" ref="leftSidenav">
    <md-toolbar class="md-large">
      <div class="md-toolbar-container">
        <h3 class="md-title">メニュー</h3>
      </div>


    </md-toolbar>

    <md-button class="pageButton"  href="#/">ホーム</md-button>
    <md-button class="pageButton" href='#/edit'>コード作成</md-button>
    <md-button class="pageButton" href='#/everyOnecode'>みんなのコード</md-button>
</md-sidenav>




    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return {
      a: 'aieouo'
    }
  },
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle()
    },
    closeDialog: function(ref) {
      console.log(ref)
      this.$refs[ref][0].close()
    },
    openDialog: function(refs) {
      console.log(this)
      console.log(this.$refs)
      this.$refs[refs].open()
      // var refs = 'dialog1'
      // console.log(this)
      // this.$refs['refs'][0].open()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
h2{
  margin: 0;
}
.pageButton{
  display: block;
}

.sideNavCodeButton{
  display: block;
}
/*.md-dialog{
  height: 70%;
  object-fit: contain;
}*/

.md-boards .md-boards-content {
  height: 100vh;
  width: 100vh;
}
/*.tutorialIMG{
  height: 70%;
  object-fit: contain;

}*/
</style>
