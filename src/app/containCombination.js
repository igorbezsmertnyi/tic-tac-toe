const containComb = (arr, comb) => {
  let arg = []
  let sortArr = arr.sort((a, b) => {return a - b})
  return sortArr.some((v) => {
    if (comb.indexOf(v) >= 0) {
      if (arg.length <= 3) arg.push(v)
      if (comb.equals(arg)) {
        return true
      }
    }
  })
}

export default containComb
