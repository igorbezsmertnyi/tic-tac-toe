const slctX = document.getElementById('selectX')
const slctO = document.getElementById('selectO')
const winModal = document.getElementById('winModal')
const winContent = document.getElementById('winContent')

class TicTacToeAnim {
  constructor() {
    this.insertX
    this.insertO
  }

  insertX(cell) {
    let divX = document.createElement('FIGURE')
    divX.className = 'sec-c__item--x'
    cell.appendChild(divX)
  }

  insertO(cell) {
    let divO = document.createElement('FIGURE')
    divO.className = 'sec-c__item--o'
    cell.appendChild(divO)
  }

  xoToggle() {
    slctX.classList.toggle('header__move-container--x--active')
    slctO.classList.toggle('header__move-container--o--active')
  }

  xActive() {
    slctX.classList.add('header__move-container--x--active')
    slctO.classList.remove('header__move-container--o--active')
  }

  oActive() {
    slctO.classList.add('header__move-container--o--active')
    slctX.classList.remove('header__move-container--x--active')
  }

  winX() {
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

  winO() {
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
}

export default TicTacToeAnim
