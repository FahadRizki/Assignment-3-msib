function checkAB(str) {
    // Iterasi melalui string
    for (let i = 0; i < str.length; i++) {
        // Jika menemukan 'a' dan ada cukup karakter setelahnya
        if (str[i] === 'a') {
            if (str[i + 4] === 'b') {
                return true; // Pola 'a---b' ditemukan
            }
        }
        // Jika menemukan 'b' dan ada cukup karakter setelahnya
        if (str[i] === 'b') {
            if (str[i + 4] === 'a') {
                return true; // Pola 'b---a' ditemukan
            }
        }
    }
    // Jika tidak ditemukan pola yang cocok
    return false;
}

// Contoh penggunaan:
console.log(checkAB("lane borrowed"));  // Output: true (karena ada pola 'a---b')
console.log(checkAB("bastrdb"));    // Output: false (tidak ada pola 'a---b' atau 'b---a')
console.log(checkAB("badd boys"));    // Output: true (ada pola 'a---b')
console.log(checkAB("abfcvb"));             // Output: false (tidak cukup jarak antara 'a' dan 'b')
