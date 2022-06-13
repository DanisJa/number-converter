const input = document.getElementById('input')
const fromBase = document.getElementById('from-base')
const toBase = document.getElementById('to-base')
const result = document.getElementById('result')
const convertBtn = document.getElementById('button')

function baseConvert(number, initialBase, changeBase){
     const returnValue = parseInt(number + '', initialBase).toString(changeBase).toUpperCase()
     if(changeBase === 16){
          return (isNaN(`0x${returnValue}`) ? `Number doesn't match number base` : returnValue)
     }else{
          return (isNaN(returnValue) ? `Number doesn't match number base` : returnValue)
     }
}

convertBtn.addEventListener('click', () => {
     if(!(input.value === '')){
          if(fromBase.options[fromBase.selectedIndex].text.includes('decimal') || fromBase.options[fromBase.selectedIndex].text.includes('decimal') || fromBase.options[fromBase.selectedIndex].text.includes('hex') || fromBase.options[fromBase.selectedIndex].text.includes('octal') || fromBase.options[fromBase.selectedIndex].text.includes('binary')){
               result.textContent = baseConvert(input.value, parseInt(fromBase.options[fromBase.selectedIndex].text), parseInt(toBase.value))
          }
          else{
               result.textContent = baseConvert(input.value, parseInt(fromBase.value), parseInt(toBase.value))
          }
     }
     else{
          alert('Please enter a number.')
     }
})
