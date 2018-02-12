// Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr){
    arr.sort(function(a,b) {
        return a-b;
    });
    return [arr[0], arr[arr.length-1]];
}

// Test
// minMax([2,3,1,100,5,9,4,90]);




