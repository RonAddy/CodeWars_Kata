function stockList(listOfArt, listOfCat){
    if ( typeof listOfArt === Array  && typeof listOfCat === Array) {
        console.log(true);
        return true
    }
    else {
        console.log(false);
        return false
    }
}



stockList(["hey", 1], ["cat",1])