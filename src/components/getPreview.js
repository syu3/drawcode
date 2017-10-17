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
    if (blocks[i].type === 'attributeCSS') {
      previewArray.push('{' + blocks[i].name)
    }
    if (blocks[i].type === 'value') {
      if (isNaN(blocks[i].value) === false) {
        previewArray.push("='" + blocks[i].value + "px'")
      } else {
        previewArray.push("='" + blocks[i].value + "'")
      }
    }
    if (blocks[i].type === 'valueCSS') {
      previewArray.push(':' + blocks[i].value + '}')
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
    if (blocks[i].type === 'youtubeValue') {
      previewArray.push("='" + blocks[i].value + "'")
    }
    if (blocks[i].type === 'br') {
      previewArray.push('\n')
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
