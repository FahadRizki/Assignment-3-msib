function findPairs(arr, target) {
    let pairs = [];
    
    for (let i = 0; i < arr.length; i++) {
        
        for (let j = i + 1; j <= arr.length; j++) {
            console.log([j])
            if (arr[i] + arr[j] === target) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    
    return pairs;
}

// Contoh penggunaan:
console.log(findPairs([1, 2, 3, 4, 5], 6));  // Output: [[1, 5], [2, 4]]
  // Output: [[1, 5], [3, 3]]