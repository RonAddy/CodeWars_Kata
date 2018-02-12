function checkCoupon (enteredCode, correctCode, currentDate, expirationDate) {

  var valid = true
  const curr = new Date(currentDate)
  const exp = new Date(expirationDate)

  if (enteredCode !== correctCode) {
    valid = false
  } else if (exp < curr) {
    valid = false
  }

  return valid
}

checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014')
