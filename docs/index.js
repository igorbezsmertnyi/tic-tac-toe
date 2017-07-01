import TicTacToe from './app/ticTacToe'
import './app/equals'

let t = new TicTacToe()

document.addEventListener('DOMContentLoaded', () => {
  const cells = document.querySelectorAll('.sec-c__item')
  const cellsArr = [ ...cells ]

  t.chooseVariant()

  cellsArr.forEach((cell, i) => {
    cell.addEventListener('click', (e) => {
      if (e.target.childElementCount < 1 && e.target.classList[0] === 'sec-c__item') {
        t.toggle(cell, i)
      }
    })
  })
})
