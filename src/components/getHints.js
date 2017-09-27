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
    } else if (selectedBlock.name === 'HTML') {
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
        name: 'input',
        comment: 'ボタン'
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
    } else if (selectedBlock.type === 'value') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: 'endTag',
        name: '>',
        comment: '閉じる'
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
    } else if (selectedBlock.type === 'newLine') {
      console.log('hi')
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
        name: 'input',
        comment: 'ボタン'
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
    } else if (selectedBlock.name === 'input') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: 'attribute',
        name: 'type',
        comment: '種類を指定'
      })
    } else if (selectedBlock.name === 'type') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: 'value',
        value: 'button',
        comment: 'ボタンを作る'
      })
      hints.push({
        type: 'value',
        value: 'text',
        comment: 'フォーム'
      })
    } else if (selectedBlock.name === 'button') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: 'attribute',
        name: 'onclick',
        comment: 'ボタンが押されたら'
      })
    } else if (selectedBlock.name === 'onclick') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: 'value',
        value: 'https;//www.google.com',
        comment: 'URLを入力'
      })
    } else if (selectedBlock.name === '') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: '',
        name: '',
        comment: ''
      })
    }

    console.log(hints)
    return hints
  } else {
    return []
  }
}
