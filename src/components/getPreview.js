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
      previewArray.push(blocks[i].value)
    }
    if (blocks[i].type === 'endTag') {
      previewArray.push(blocks[i].name)
    }
    if (blocks[i].type === 'closeTag') {
      previewArray.push('<' + blocks[i].name + '>')
    }
    if (blocks[i].type === 'root') {
    }
  }
  return previewArray
}
