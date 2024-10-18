function isArithmeticProgression(arr) {
    if (arr.length <= 1) {
        return true; // Jika array memiliki 0 atau 1 elemen, dianggap sebagai deret aritmatika
    }

    // Hitung selisih tetap (common difference)
    const difference = arr[1] - arr[0];
   
    // Iterasi dari elemen kedua hingga akhir
    for (let i = 1; i < arr.length -1 ; i++) {
        console.log(arr[i])
       
        // Jika selisih antar elemen tidak konsisten, kembalikan false
        if (arr[i + 1] - arr[i] !== difference) {
           
           
            return false;
        }
    }

    // Jika semua selisih konsisten, kembalikan true
    return true;
}

// Contoh penggunaan:
// console.log(isArithmeticProgression([2])); // Output: true
console.log(isArithmeticProgression([1, 2, 3, 4])); // Output: false
