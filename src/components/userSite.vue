<template>
<div class="">
<iframe :srcdoc="usersiteCode" class="usersiteIframe"></iframe>
<p>{{usersiteCode}}</p>
</div>
</template>

<script>
/* global firebase */
export default {
  name: 'app',
  data: function() {
    return {
      usersiteCode: '<p>テキスト</p>'
    }
  },
  methods: {},
  created: function() {
    var usersiteCode = this.usersiteCode
    // var userId = firebase.auth().currentUser.uid
    return firebase
      .database()
      .ref('/users/' + this.$route.params.siteName)
      .once('value')
      .then(function(snapshot) {
        console.log(snapshot.val().code)
        console.log(usersiteCode)
        usersiteCode = snapshot.val().code
        console.log('aeiuo', usersiteCode)
      })
  }
}
</script>

<style>
.usersiteIframe{
  position: relative;
  width:100%;
  height:90vh;
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
