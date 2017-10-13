<template>
<div style="height:100%;" v-html="usersiteCode">

<!-- <iframe :srcdoc="usersiteCode" style="height:100vh;"　class="usersiteIframe"></iframe> -->
</div>
</template>

<script>
/* global firebase */
export default {
  name: 'app',
  data: function() {
    return {
      usersiteCode: ''
    }
  },
  methods: {},
  created: function() {
    return firebase
      .database()
      .ref('/users/' + this.$route.params.siteName)
      .once('value')
      .then(snapshot => {
        console.log('eefjaowej', snapshot.val().code)
        this.usersiteCode = snapshot.val().code
      })
  }
}
</script>

<style>
.usersiteIframe{
  height: -webkit-fill-available;
  width:100%;
  height:100vh;
}
</style>

<!-- <template>

</template>
<script>
var countup = function() {
  clearInterval(timer1)
  var path = location.hash.replace(/#\u002fusersite\u002f/g, '')
  var encodePath = encodeURI(path)
  console.log(path)
  console.log(
    'https://drawcode-178921.firebaseio.com/users/' + encodePath + '.json'
  )
  fetch('https://drawcode-178921.firebaseio.com/users/' + encodePath + '.json')
    .then(function(res) {
      return res.text()
    })
    .then(function(text) {
      // JSON.parse(text [, reviver])
      var data = JSON.parse(text)
      console.log(data)
      var iframe = document.createElement('iframe')
      iframe.srcdoc = data['code']
      iframe.className = 'userSiteIframe'
      iframe.style = 'position:relative; width:100%; height:90vh;'
      document.body.appendChild(iframe)
    })
}
var timer1 = setTimeout(countup, 100)
</script> -->
