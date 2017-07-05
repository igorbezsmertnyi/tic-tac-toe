import containComb from './containCombination'
import returnComb from './returnCombination'
import TicTacToeAnim from './TicTacToeAnimation'

const a = new TicTacToeAnim()

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
const cells = document.querySelectorAll('.sec-c__item')
const cellsArr = [ ...cells ]
let cc = []                                                         //clicked cells
let uc = [0, 1, 2, 3, 4, 5, 6, 7, 8]                                //no clicked cells
let counterX = []                                                   //clicked cells for X
let counterO = []                                                   //clicked cells for O
let cM                                                              //currenr user move
let counter = 0
let oneUser = true
let userIs
let compIndex
let win = false

class TicTacToe {
  constructor(toggle, chooseVariant) {
    this.toggle
    this.chooseVariant
    this.selectMode
  }

  toggle(cell, i) {
    cM = !cM

    if (!oneUser) {
      if (cM && typeof cM !== undefined) {
        counterX.push(i)

        a.insertX(cell)
        a.xoToggle()
      } else {
        counterO.push(i)

        a.insertO(cell)
        a.xoToggle()
      }
    } else {
      if(userIs === 'x') {
        if (cM && typeof cM !== undefined) {
          counterX.push(i)

          a.insertX(cell)
          a.xoToggle()

          setTimeout(() => {
            this.computer()
          }, 200)
        }
      } else {
        if (!cM && typeof cM !== undefined) {
          counterO.push(i)

          a.insertO(cell)
          a.xoToggle()

          setTimeout(() => {
            this.computer()
          }, 200)
        }
      }
    }

    cc.push(i)
    this.removeIndex(i)
    this.checkComb()
  }

  chooseVariant() {
    if (this.randomDice() === 1 && !cc.length) {
      cM = false
      if (oneUser) { userIs = 'x' }

      a.xActive()
    } else {
      cM = true
      if (oneUser) { userIs = 'o' }

      a.oActive()
    }

    slctX.addEventListener('click', () => {
      if (!cc.length) {
        cM = false
        if (oneUser) userIs = 'x'

        a.xActive()
      }
    }, false)

    slctO.addEventListener('click', () => {
      if (!cc.length) {
        cM = true
        if (oneUser) userIs = 'o'

        a.oActive()
      }
    }, false)
  }

  selectMode(mode) {
    switch (Number(mode)) {
      case 1:
        oneUser = true
        break
      case 2:
        oneUser = false
        break
      case 3:
        this.reset()
        break
    }

    this.reset()
  }

  checkComb() {
    let contX
    let contO

    combinationArr.forEach(comb => {
      contX = containComb(counterX, comb)
      contO = containComb(counterO, comb)

      if (counterX.length > 2 || counterO.length > 2) {
        if (contX) {
          win = true
          a.winX()
          this.reset()
          return
        }

        else if (contO) {
          win = true
          a.winO()
          this.reset()
          return
        }

        else if (!contX && !contO && cc.length > 8) {
          win = true
          a.draw()
          this.reset()
          return
        }

        else if (cc.length === 9) {
          win = true
          a.draw()
          this.reset()
          return
        }
      }
    })
  }

  computer() {
    if (cc.length <= 9 && !win) {
      const index = this.randomize()
      this.removeIndex(index)

      if (userIs === 'x') {
        a.insertO(cellsArr[index])
        counterO.push(index)
      } else {
        a.insertX(cellsArr[index])
        counterX.push(index)
      }

      cc.push(index)
    }

    cM = !cM
    a.xoToggle()
    this.checkComb()
  }

  reset() {
    setTimeout(() => {
      cellsArr.forEach(cell => {
        cc = []
        counterX = []
        counterO = []
        this.chooseVariant()
        win = false
        uc = [0, 1, 2, 3, 4, 5, 6, 7, 8]
        let child = cell.children[0]
        if (child) cell.removeChild(child)
      })
    }, 1000)
  }

  randomDice() {
    return Math.round(Math.random())
  }

  randomize() {
    let rand = uc[Math.floor(Math.random() * uc.length)]
    let sArr

    if (userIs === 'x') {
      sArr = counterX.sort((a, b) => {return a - b})
    } else {
      sArr = counterO.sort((a, b) => {return a - b})
    }

    for(let i = 0; i < combinationArr.length; i++) {
      let val = returnComb(sArr, combinationArr[i])
      if (typeof val !== 'undefined' && uc.includes(val)) {
        rand = val
      }
    }

    if (uc.includes(rand)) {
      return rand
    } else {
      return this.randomize()
    }
  }

  removeIndex(index) {
    uc.splice(uc.indexOf(index), 1)
  }
}

export default TicTacToe
