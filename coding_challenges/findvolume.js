//findvolume of water

//start from left to max...then right bound to max....keeping track of the water count.
 
function findvolume(){

    var arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
     
        // left[i] contains height of tallest bar to the
        // left of i'th bar including itself
        var left = [];
      
        // Right [i] contains height of tallest bar to
        // the right of ith bar including itself
        var right = [];
      
        // Initialize result
        var water = 0;
      
        // Fill left array
        left[0] = arr[0];
        for (var i = 1; i < arr.length; i++)
           left[i] = Math.max(left[i-1], arr[i]);
      
        // Fill right array
        right[arr.length-1] = arr[arr.length-1];
        for (var i = arr.length-2; i >= 0; i--)
           right[i] = Math.max(right[i+1], arr[i]);
      
        // Calculate the accumulated water element by element
        // consider the amount of water on i'th bar, the
        // amount of water accumulated on this particular
        // bar will be equal to min(left[i], right[i]) - arr[i] .
        for (var i = 0; i < arr.length; i++)
           water += Math.min(left[i],right[i]) - arr[i];
      
        return water;
    }
         
        console.log("Maximum water that can be accumulated is " + findvolume());