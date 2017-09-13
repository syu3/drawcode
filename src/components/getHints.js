export default function getHints (selectedBlock) {
  var hints = []
  if (selectedBlock != null) {
    if (selectedBlock.name === 'p') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: 'text',
        content: 'テキスト'
      })
    } else if (selectedBlock.name === 'a') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: 'attribute',
        name: 'href'
      })
    } else if (selectedBlock.name === 'HTML') {
      console.log('html')
      // 「テキスト」を表示
      hints.push({
        type: 'tag',
        name: 'a'
      })
      hints.push({
        type: 'tag',
        name: 'p'
      })
      hints.push({
        type: 'tag',
        name: 'img'
      })
      hints.push({
        type: 'tag',
        name: 'button'
      })
      hints.push({
        type: 'tag',
        name: 'hr'
      })
      hints.push({
        type: 'tag',
        name: 'h1'
      })
    } else if (selectedBlock.name === 'href') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: 'value',
        name: 'テキスト'
      })
    } else if (
      selectedBlock.name === 'テキスト' ||
      selectedBlock.content === 'テキスト'
    ) {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: 'endTag',
        name: '>'
      })
      hints.push({
        type: 'tag',
        name: 'br'
      })
      hints.push({
        type: 'closeTag',
        name: '/p'
      })
    } else if (selectedBlock.name === '') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: '',
        name: ''
      })
    } else if (selectedBlock.name === '') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: '',
        name: ''
      })
    } else if (selectedBlock.name === '') {
      console.log('hi')
      // 「テキスト」を表示
      hints.push({
        type: '',
        name: ''
      })
    }

    console.log(hints)
    return hints
  } else {
    return []
  }
}
