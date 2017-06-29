class TicTacToe {
  init() {
    let tg
    let disArr = []
    const cells = document.querySelectorAll('.sec-c__item')
    const cellsArr = [ ...cells ]

    if (this.randomDice() === 1) {
      tg = false
    } else {
      tg = true
    }

    cellsArr.forEach(cell => {
      cell.addEventListener('click', (e) => {
        let canClick = this.disableCell(cell.id, disArr)
        if (canClick) {
          this.toggle(cell, tg = !tg)
          disArr.push(cell.id)
        }
      })
    })
  }

  insert_x(cell) {
    let divX = document.createElement('DIV')
    divX.className = 'sec-c__item--x'
    cell.appendChild(divX)
  }

  insert_o(cell) {
    let divO = document.createElement('DIV')
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

  disableCell(currentCell, disArr) {
    let res = false
    if (!disArr.length) return true

    disArr.forEach(dis => {
      if (dis === currentCell) {
        res = false
      } else {
        res = true
      }
    })

    return res
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
