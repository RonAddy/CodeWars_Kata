// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// It’s guaranteed that array contains more than 3 numbers.
// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
    arr.sort( (a,b) => a-b);
    
    var same = null;
    var unique = null;
    
    if (arr[0] === arr[1]) {
      same = arr[0];
    } else {
      unique = arr[0];
      return unique;
    };
    
    arr.find( function(element) {
      if (element !== same){
        unique = element;
      };
    });

    return unique;
  };

// Test
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55