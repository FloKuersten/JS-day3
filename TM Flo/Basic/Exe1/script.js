let arr = [1, 5, 4, 9, 8];

function largest(arr) {  

    let max = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) 
            max = arr[i]; 
    } 
    return max; 
} 


console.log(largest(arr));  