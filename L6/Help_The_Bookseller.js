function stockList(listOfArt, listOfCat) {
  const bookResults = {}
  if (Array.isArray(listOfArt) && Array.isArray(listOfCat)) {
    // must find way to dynamically increment values when duplicate is found
    listOfArt.forEach(ele => {
        if(bookResults[ele[0]] === null){

        }
      bookResults[ele[0]] += parseInt(ele.substr(ele.search(/[0-9]/), ele[ele.length]))
    })
    console.log(bookResults)
  } else {
    console.log(false);
    return false
  }
}

stockList(["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B"])
