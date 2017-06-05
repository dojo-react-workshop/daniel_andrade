//findvolume of water

//start from left to max...then right bound to max....keeping track of the water count.
 
function findvolume(arr){
     
        var left = [];
        var right = [];
        var water = 0;
      
        // Fill left array
        left[0] = arr[0];
        for (var i = 1; i < arr.length; i++){
           left[i] = Math.max(left[i-1], arr[i]);
        }
      
        console.log("left side filled" + left)

        // Fill right array
        right[arr.length-1] = arr[arr.length-1];
        for (var i = arr.length-2; i >= 0; i--){
           right[i] = Math.max(right[i+1], arr[i]);
        }
        console.log("Right side filled" + right)

        for (var i = 0; i < arr.length; i++){
           water += Math.min(left[i],right[i]) - arr[i];
           console.log("determining water " + "iteration # " + i + " water is now " + water)
        }

        return water;
    }
         
        console.log("Maximum water that can be accumulated is " + findvolume([1,3,1,1,5]));