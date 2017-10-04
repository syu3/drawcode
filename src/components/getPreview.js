export default function getPreview(blocks) {
  var previewArray = []
  console.log(blocks.length)
  for (var i = 0; i < blocks.length; i++) {
    if (blocks[i].type === 'tag') {
      previewArray.push('<' + blocks[i].name)
    }
    if (blocks[i].type === 'text') {
      previewArray.push(blocks[i].content)
    }
    if (blocks[i].type === 'attribute') {
      previewArray.push(blocks[i].name)
    }
    if (blocks[i].type === 'value') {
      previewArray.push("='" + blocks[i].value + "'")
    }
    if (blocks[i].type === 'endTag') {
      previewArray.push(blocks[i].name)
    }
    if (blocks[i].type === 'closeTag') {
      previewArray.push('<' + blocks[i].name + '>')
    }
    if (blocks[i].type === 'root') {
    }
    if (blocks[i].type === 'newLine') {
      previewArray.push('<br>')
    }
    if (blocks[i].value === 'youtubeValue') {
      // url = blocks[i].value
      // id = url.split('watch?v=')[1]
      // src = 'https://www.youtube.com/embed/' + id
      // $('iframe').attr('src', src)
      // var url = blocks[i].value.replace('https://www.youtube.com/watch?v=', '')
      // alert(url)
      // /* IFrame Player APIのコードを非同期にロード */
      // var tag = document.createElement('script')
      // tag.src = '//www.youtube.com/iframe_api'
      // var firstScriptTag = document.getElementsByTagName('script')[0]
      // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
      // /* APIコードがダウンロードされた後で、ifraemとYouTubeプレーヤー要素を生成 */
      // var player
      // var countup = function() {
      //   window.alert(url)
      //   onYouTubeIframeAPIReady(url)
      // }
      // setTimeout(countup, 1000)
    }
  }
  var previewString = previewArray.join(' ')
  return previewString
}

// function onYouTubeIframeAPIReady(url) {
//   var numnum = 0
//   numnum++
//   console.log(numnum)
//
//   // var url1 = url.indexOf("");
//   if (url != null) {
//     var url1 = url.slice(-11)
//     console.log(url1)
//     player = new YT.Player('player' /* 動画プレーヤーを埋め込む要素ID */, {
//       width: '640' /* 動画プレーヤーの幅 */,
//       height: '390' /* 動画プレーヤーの高さ */,
//       videoId: url1 /* YouTube動画ID */,
//       events: {
//         /* イベント */
//         onReady: onPlayerReady /* プレーヤの準備完了時 */
//       }
//     })
//   } else {
//   }
// }
