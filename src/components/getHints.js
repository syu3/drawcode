export default function getHints(selectedBlock) {
  var hints = []
  if (selectedBlock != null) {
    if (selectedBlock.name === 'p') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: 'endTag',
        name: '>',
        comment: '閉じる'
      })
    } else if (selectedBlock.name === 'a') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: 'attribute',
        name: 'href',
        comment: 'URLを入力'
      })
    } else if (
      selectedBlock.name === 'HTML' ||
      selectedBlock.type === 'newLine'
    ) {
      console.log('html')
      // 「テキスト」を表示
      hints.push({
        type: 'tag',
        name: 'a',
        comment: 'リンク'
      })
      hints.push({
        type: 'tag',
        name: 'p',
        comment: '文字'
      })
      hints.push({
        type: 'tag',
        name: 'img',
        comment: '画像'
      })
      hints.push({
        type: 'tag',
        name: 'iframe',
        comment: 'youtubeを表示'
      })
      hints.push({
        type: 'tag',
        name: 'hr',
        comment: '線'
      })
      hints.push({
        type: 'tag',
        name: 'h1',
        comment: '題名'
      })
      hints.push({
        type: 'tag',
        name: 'center',
        comment: '画面の中央に表示'
      })
      hints.push({
        type: 'closeTag',
        name: '/center',
        comment: 'centerタグを閉じる'
      })
    } else if (selectedBlock.name === 'href') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: 'value',
        value: '画像'
      })
    } else if (selectedBlock.type === 'text') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: 'endTag',
        name: '>',
        comment: '閉じる'
      })
      hints.push({
        type: 'tag',
        name: 'br',
        comment: '文字を改行'
      })
      hints.push({
        type: 'closeTag',
        name: '/p',
        comment: 'pタグを閉じる'
      })
      hints.push({
        type: 'closeTag',
        name: '/a',
        comment: 'aタグを閉じる'
      })
      hints.push({
        type: 'closeTag',
        name: '/h1',
        comment: 'h1タグを閉じる'
      })
    } else if (selectedBlock.name === 'br') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: 'endTag',
        name: '>',
        comment: '閉じる'
      })
    } else if (selectedBlock.name === '>') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: 'text',
        content: 'テキスト',
        comment: '文字を入力'
      })
    } else if (selectedBlock.name === 'img') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: 'attribute',
        name: 'src',
        comment: '画像を指定'
      })
    } else if (selectedBlock.name === 'src') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: 'value',
        value: '画像',
        comment: '画像の名前'
      })
      hints.push({
        type: 'youtubeValue',
        value: '動画のURL',
        comment: '動画のURL'
      })
    } else if (selectedBlock.name === 'hr') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: 'attribute',
        name: 'width',
        comment: '横幅を指定'
      })
    } else if (selectedBlock.name === 'width') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: 'value',
        value: '〇〇px',
        comment: '横幅を指定'
      })
    } else if (
      selectedBlock.type === 'value' &&
      selectedBlock.type === 'youtubeValue'
    ) {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: 'endTag',
        name: '>',
        comment: '閉じる'
      })
    } else if (selectedBlock.name === 'center') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: 'endTag',
        name: '>',
        comment: '閉じる'
      })
    } else if (selectedBlock.name === 'h1') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: 'endTag',
        name: '>',
        comment: '閉じる'
      })
    } else if (selectedBlock.name === 'iframe') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: 'attribute',
        name: 'src',
        comment: '動画を指定する'
      })
    }

    console.log(hints)
    return hints
  } else {
    return []
  }
}
