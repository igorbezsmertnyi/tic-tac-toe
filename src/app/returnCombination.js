const returnComb = (arr, comb) => {
  let comb1 = comb.slice(0, 2)
  let comb2 = comb.slice(1, 3)
  let comb3 = [ comb[0], comb[2] ]
  let arg = []
  let val

  arr.forEach(v => {
    if (comb.indexOf(v) >= 0) {
      arg.push(v)
      if (comb1.equals(arg)) {
        val = comb[2]
        return val
      }
      else if (comb2.equals(arg)) {
        val = comb[0]
        return val
      }
      else if (comb3.equals(arg)) {
        val = comb[1]
        return val
      }
    }
  })

  return val
}

export default returnComb
