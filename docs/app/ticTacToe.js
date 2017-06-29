class TicTacToe {
  init() {
    let tg
    let clickedCellsArr = []
    const cells = document.querySelectorAll('.sec-c__item')
    const cellsArr = [ ...cells ]

    if (this.randomDice() === 1) {
      tg = false
    } else {
      tg = true
    }

    cellsArr.forEach(cell => {
      cell.addEventListener('click', (e) => {
        if (e.target.childElementCount < 1 && e.target.classList[0] === 'sec-c__item') {
          this.toggle(cell, tg = !tg)
          clickedCellsArr.push(cell.id)
          console.log(clickedCellsArr);
        }
      })
    })
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

  toggle(cell, tg) {
    if (tg && typeof tg !== undefined) {
      this.insert_x(cell)
    } else {
      this.insert_o(cell)
    }
  }

  counter() {

  }

  randomDice() {
    return Math.round(Math.random())
  }

  randomize() {
    let r = Math.floor(Math.random() * (4 - 1)) + 1;
    console.log(r);
  }
}

export default TicTacToe
