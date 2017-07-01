const containComb = (arr, comb) => {
  let arg = []
  return arr.some((v) => {
    if (comb.indexOf(v) >= 0) {
      arg.push(v)
      if (comb.equals(arg)) return true
    }
  })
}

export default containComb
