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
        comment: '大きい文字'
      })
      hints.push({
        type: 'tag',
        name: 'h2',
        comment: '２番目に大きい文字'
      })
      hints.push({
        type: 'tag',
        name: 'font',
        comment: '文字の色'
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
      hints.push({
        type: 'closeTag',
        name: '/font',
        comment: 'fontタグを閉じる'
      })
      hints.push({
        type: 'tag',
        name: 'style',
        comment: '背景画像・背景色'
      })
    } else if (selectedBlock.name === 'style') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: 'endTag',
        name: '>',
        comment: '閉じる'
      })
    } else if (selectedBlock.name === 'href') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: 'value',
        value: '画像・URL'
      })
    } else if (selectedBlock.name === 'font') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: 'attribute',
        name: 'color',
        comment: '色を指定'
      })
    } else if (selectedBlock.name === 'color') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: 'value',
        value: '文字の色',
        comment: '英語で入力してください'
      })
    } else if (selectedBlock.type === 'text') {
      console.log('hi')
      hints.push({
        type: 'closeTag',
        name: '/center',
        comment: 'centerタグを閉じる'
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
      hints.push({
        type: 'closeTag',
        name: '/h2',
        comment: 'h2タグを閉じる'
      })
    } else if (selectedBlock.name === 'br') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: 'endTag',
        name: '>',
        comment: '閉じる'
      }) // <style>body{background-color:red;}</style>
    } else if (selectedBlock.name === '>') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: 'closeTag',
        name: '/iframe',
        comment: 'iframeタグを閉じる'
      })
      hints.push({
        type: 'text',
        content: 'テキスト',
        comment: '文字を入力'
      })
      hints.push({
        type: 'attribute',
        name: 'body',
        comment: '背景を指定'
      })
    } else if (selectedBlock.name === 'body') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: 'attributeCSS',
        name: 'background-color',
        comment: '背景色を指定'
      })
      hints.push({
        type: 'attributeCSS',
        name: 'background-image',
        comment: '背景画像を指定'
      })
    } else if (selectedBlock.name === 'background-color') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: 'valueCSS',
        value: '背景色を入力',
        comment: '英語で色を入れる'
      })
    } else if (selectedBlock.name === 'background-image') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: 'valueCSS',
        name: '背景画像を入力',
        comment: '画像のURL'
      })
    } else if (selectedBlock.type === 'valueCSS') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: 'closeTag',
        name: '/style',
        comment: 'styleタグを閉じる'
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
        value: 'https://www.youtube.com/embed/bm8wc7vvJU0',
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
    } else if (selectedBlock.name === 'height') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: 'value',
        value: '〇〇px',
        comment: '縦幅を指定'
      })
    } else if (selectedBlock.type === 'value') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: 'attribute',
        name: 'width',
        comment: '横幅を指定'
      })
      hints.push({
        type: 'attribute',
        name: 'height',
        comment: '縦幅を指定'
      })
      hints.push({
        type: 'endTag',
        name: '>',
        comment: '閉じる'
      })
    } else if (selectedBlock.type === 'youtubeValue') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: 'attribute',
        name: 'width',
        comment: '横幅指定'
      })
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
    } else if (selectedBlock.name === 'h2') {
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
