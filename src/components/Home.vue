<template>
  <div class="home" style="width:100%;height:93.3vh">
    <div class="inner">
      <p class="mainP">誰でも簡単、<span class="text-fix">無料でつくる</span><br>あなただけのホームページ</p>
      <p class="subP">&nbsp;&nbsp;こだわりのデザイン、選りすぐりの機能、すべてが自分仕様。<br><br><br>&nbsp;&nbsp;世界でひとつだけの本格ホームページを作成しましょう。</p>
      <center><md-button href="#/edit" class="md-raised md-primary" style="width:150px;">今すぐ始める</md-button></center>
    </div>

  </div>

</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  background-image: url("homeBack4.jpg");
  /*width: 100%;*/
  /* 画像を常に天地左右の中央に配置 */
  background-position: center center;

  /* 画像をタイル状に繰り返し表示しない */
  background-repeat: no-repeat;

  /* コンテンツの高さが画像の高さより大きい時、動かないように固定 */
  background-attachment: fixed;

  /* 表示するコンテナの大きさに基づいて、背景画像を調整 */
  background-size: cover;

  /* 背景画像が読み込まれる前に表示される背景のカラー */
  background-color: #464646;
}
.mainP{
  font-size: 3.645vmax;
  line-height: 100%;
  text-align: center;
  color: black;
}
.subP{
  font-size: 1.198vmax;
  line-height: 100%;
  text-align: center;
    color: black;
}
.inner{
  width: 100%;
  min-width: 750px;
  transition: opacity .3s linear;
  position: absolute;
  left: 0;
  right: 0;
  top: 22.5%;
}
</style>
