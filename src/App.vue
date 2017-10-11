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
    <md-button class="pageButton" href='#/everyonecode'>みんなのコード</md-button>
</md-sidenav>




    <router-view></router-view>

  </div>
</template>

<script>
// /* global firebase */

// var countup = function() {
//   console.log('countup')
//   var userSiteIframe = document.querySelector('.userSiteIframe')
//   if (userSiteIframe != null) {
//     document.body.removeChild(userSiteIframe)
//   }
//   clearInterval(timer1)
//
//   var path = location.hash.replace(/#\u002f/g, '')
//   console.log(path)
//   console.log(typeof path)
//   if (path === 'edit') {
//     window.alert('editですよ')
//   } else if (path === '') {
//     window.alert('editですよ')
//   } else if (path === 'everyonecode') {
//     window.alert('editですよ')
//   } else if (path === 'usersite') {
//     window.alert('editですよ')
//   } else {
//     var encodePath = encodeURI(path)
//     console.log(
//       'https://drawcode-178921.firebaseio.com/users/' + encodePath + '.json'
//     )
//     fetch(
//       'https://drawcode-178921.firebaseio.com/users/' + encodePath + '.json'
//     )
//       .then(function(res) {
//         return res.text()
//       })
//       .then(function(text) {
//         // JSON.parse(text [, reviver])
//         var data = JSON.parse(text)
//         console.log(data)
//         var iframe = document.createElement('iframe')
//         iframe.srcdoc = data['code']
//         iframe.className = 'userSiteIframe'
//         iframe.style = 'position:relative; width:100%; height:100vh;'
//         document.body.appendChild(iframe)
//       })
//   }
// }
// var timer1 = setTimeout(countup, 100)
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

</style>
