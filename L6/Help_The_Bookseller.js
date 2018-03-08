function stockList(listOfArt, listOfCat){
    function getBookNumber(ele) {
    return `( ${ele[0]} : ${parseInt(ele.substr(ele.search(/[0-9]/), ele[ele.length]))} )`
  }
  
  const bookResults = []
  listOfArt.forEach(element => {
    listOfCat.includes(element[0])? bookResults.push(getBookNumber(element)): null
  });

  console.log(bookResults);
  console.log(parseInt(listOfArt[0]));
  
  

}
stockList(["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B"])
