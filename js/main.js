let elements = document.getElementsByName('cssProp')
let div = document.getElementById('modify')

function set(){
  for( let index = 0; index < elements.length; index++){
    let cssProp  = elements[index].getAttribute('id')
    let cssValue = elements[index].value
    div.style[ cssProp ] = cssValue
  }
}

document.getElementById('set').addEventListener('click', set)
