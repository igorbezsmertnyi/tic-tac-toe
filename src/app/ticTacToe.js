import containComb from './containCombination'

const combinationArr = [
  [ 0, 1, 2 ],
  [ 3, 4, 5 ],
  [ 6, 7, 8 ],
  [ 0, 3, 6 ],
  [ 1, 4, 7 ],
  [ 2, 5, 8 ],
  [ 0, 4, 8 ],
  [ 2, 4, 6 ]
]

const slctX = document.getElementById('selectX')
const slctO = document.getElementById('selectO')
const winModal = document.getElementById('winModal')
const winContent = document.getElementById('winContent')
const cells = document.querySelectorAll('.sec-c__item')
const cellsArr = [ ...cells ]
let clickedCellsArr = []
let counterX = []
let counterO = []
let currentMove
let counter = 0

class TicTacToe {
  constructor(toggle, chooseVariant) {
    this.toggle
    this.chooseVariant
  }

  insert_x(cell) {
    let divX = document.createElement('FIGURE')
    divX.className = 'sec-c__item--x'
    cell.appendChild(divX)
  }

  insert_o(cell) {
    let divO = document.createElement('FIGURE')
    divO.className = 'sec-c__item--o'
    cell.appendChild(divO)
  }

  toggle(cell, i) {
    currentMove = !currentMove

    if (currentMove && typeof currentMove !== undefined) {
      this.insert_x(cell)
      counterX.push(i)
      slctX.classList.toggle('header__move-container--x--active')
      slctO.classList.toggle('header__move-container--o--active')
    } else {
      this.insert_o(cell)
      counterO.push(i)
      slctX.classList.toggle('header__move-container--x--active')
      slctO.classList.toggle('header__move-container--o--active')
    }

    clickedCellsArr.push(i)
    this.checkComb()
  }

  chooseVariant() {
    if (this.randomDice() === 1) {
      currentMove = false
      slctX.classList.add('header__move-container--x--active')
      slctO.classList.remove('header__move-container--o--active')
    } else {
      currentMove = true
      slctO.classList.add('header__move-container--o--active')
      slctX.classList.remove('header__move-container--x--active')
    }

    slctX.addEventListener('click', () => {
      if (!clickedCellsArr.length) {
        currentMove = false
        slctO.classList.remove('header__move-container--o--active')
        slctX.classList.add('header__move-container--x--active')
      }
    }, false)

    slctO.addEventListener('click', () => {
      if (!clickedCellsArr.length) {
        currentMove = true
        slctO.classList.add('header__move-container--o--active')
        slctX.classList.remove('header__move-container--x--active')
      }
    }, false)
  }

  wonX() {
    winModal.classList.add('win-modal--active')
    winContent.classList.add('win-modal__content--x')
    setTimeout(() => {
      winModal.classList.add('win-modal--disactive')
    }, 1400)
    setTimeout(() => {
      winModal.classList.remove('win-modal--active')
      winContent.classList.remove('win-modal__content--x')
      winModal.classList.remove('win-modal--disactive')
    }, 1600)
  }

  wonO() {
    winModal.classList.add('win-modal--active')
    winContent.classList.add('win-modal__content--o')
    setTimeout(() => {
      winModal.classList.add('win-modal--disactive')
    }, 1400)
    setTimeout(() => {
      winModal.classList.remove('win-modal--active')
      winContent.classList.remove('win-modal__content--o')
      winModal.classList.remove('win-modal--disactive')
    }, 1600)
  }

  draw() {
    winModal.classList.add('win-modal--active')
    winContent.classList.add('win-modal__content--draw')
    setTimeout(() => {
      winModal.classList.add('win-modal--disactive')
    }, 1400)
    setTimeout(() => {
      winModal.classList.remove('win-modal--active')
      winContent.classList.remove('win-modal__content--draw')
      winModal.classList.remove('win-modal--disactive')
    }, 1600)
  }

  checkComb() {
    for(let i = 0; i < combinationArr.length; i++) {
      if (counterX.length > 2 || counterO.length > 2) {
        let sortInputX = counterX.sort((a, b) => {return a - b})
        let sortInputO = counterO.sort((a, b) => {return a - b})
        let contX = containComb(sortInputX, combinationArr[i])
        let contO = containComb(sortInputO, combinationArr[i])

        if (contX) {
          this.wonX()
          this.reset()
          return
        }
        else if (contO) {
          this.wonO()
          this.reset()
          return
        }
        else if (clickedCellsArr.length === 9) {
          this.draw()
          this.reset()
          return
        }
      }
    }
  }

  reset() {
    setTimeout(() => {
      cellsArr.forEach(cell => {
        clickedCellsArr = []
        counterX = []
        counterO = []
        this.chooseVariant()
        let child = cell.children[0]
        if (child) cell.removeChild(child)
      })
    }, 1600)
  }

  get getCombintio() {
    return combinationArr
  }

  randomDice() {
    return Math.round(Math.random())
  }

  randomize() {
    let r = Math.floor(Math.random() * (4 - 1)) + 1;
  }
}

export default TicTacToe
