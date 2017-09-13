<template>
  <div id="app">
    <md-toolbar>
      <md-button class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title" style="flex:1">DrawCode</h2>
      <md-button class="md-raised">保存</md-button>
      <md-button class="md-raised">プレビュー</md-button>
      <md-button class="md-raised md-warn">公開</md-button>
    </md-toolbar>

<md-sidenav class="md-left" ref="leftSidenav">
    <md-toolbar class="md-large">
      <div class="md-toolbar-container">
        <h3 class="md-title">Sidenav content</h3>
      </div>
    </md-toolbar>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!</p>
  </md-sidenav>




    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h2{
  margin: 0;
}
</style>
