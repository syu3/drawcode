/* global firebase */
<template>
  <div class="everyOneCodeEdit" >
    <!-- <p>{{userSiteArray}}</p> -->

    <!-- <span > -->
    <!-- <span style="position:absolute; top:110%;">

    </span> -->
      <md-card style="width:330px; display:inline-block;" v-for="item in userNameArray">
        <md-card-media-cover md-solid>
          <md-card-media md-ratio="3:3">
            <iframe @srcdoc="" class="userSiteImage" style="width:100%; height:100%;"></iframe>
              <!-- <div v-html='userSiteArray'>
            </div> -->
          </md-card-media>

          <md-card-area>
            <md-card-header>
              <span class="md-title">{{item}}</span>
            </md-card-header>

            <md-card-actions>
              <md-button @click='tap(item)'>開く</md-button>
            </md-card-actions>
          </md-card-area>
        </md-card-media-cover>
      </md-card>

    <!-- </span> -->
  </div>
</template>
<script>
/* global firebase */
export default {
  name: 'hello',
  data: function() {
    return {
      userSiteArray: [],
      userNameArray: []
    }
  },
  methods: {
    tap: function(tapSite) {
      console.log('tapは', tapSite)
      window.location.href = '#/everyOneCode/' + tapSite
    }
  },
  created: function() {
    return firebase.database().ref('/users').once('value').then(snapshot => {
      // this.usersiteCode = snapshot.val().code
      console.log('取得したコードは', snapshot.val())
      var aa = snapshot.val()
      console.log(aa)
      for (var i in aa) {
        //   console.log(i, ' : ', aa[i])
        // var userSiteBox = document.createElement('div')
        // userSiteBox.style = 'background-color:yellow'
        // userSiteBox.style = 'width:100px; height:100px;'
        // // userSiteBox.style = ''
        // // userSiteBox.textContent = aa[i]
        // document.body.appendChild(userSiteBox)
        this.userNameArray.push(i)
        console.log('aは', this.userNameArray)

        this.userSiteArray = aa
        console.log(this.userSiteArray)
        // var countup = function() {
        //   console.log('fawef', document.querySelector('.userSiteImage'))
        //   var userCode = document.querySelector('.userSiteImage')
        //   userCode.srcdoc = aa
        // }
        // setTimeout(countup, 5000)
      }
      // for (var i = 0; i < snapshot.val().length; i++) {
      //   console.log(snapshot.val()[i])
      // }
    })
    // console.log()
  }
}
</script>
<style scoped>
  h1{
    position: relative;
    margin-top:20%;
  }

  .card-example {
  .md-subhead {
    .md-icon {
      $size: 16px;

      width: $size;
      min-width: $size;
      height: $size;
      min-height: $size;
      font-size: $size;
      line-height: $size;
    }

    span {
      vertical-align: middle;
    }
  }

  .card-reservation {
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .md-icon {
      margin: 8px;
      color: rgba(#000, .54) !important;
    }

    .md-button {
      border-radius: 2px !important;
    }
  }
}
</style>
