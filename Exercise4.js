function maxSubArray(a) {
    let maxSum = -Infinity; // Inisialisasi maxSum dengan nilai terkecil
    let currentSum = 0;
    let start = 0; // Indeks awal subarray
    let end = 0; // Indeks akhir subarray
    let tempStart = 0; // Indeks untuk menandai awal subarray sementara

    for (let i = 0; i < a.length; i++) {
        currentSum += a[i]; // Tambahkan elemen saat ini ke currentSum

        // Jika currentSum lebih besar dari maxSum, perbarui maxSum
        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart; // Set start ke tempStart
            end = i; // Set end ke indeks saat ini
        }

        // Jika currentSum menjadi negatif, reset currentSum dan set tempStart
        if (currentSum < 0) {
            currentSum = 0;
            tempStart = i + 1; // Set awal subarray berikutnya
        }
    }

    // Mengambil subarray dengan maxSum
    const maxSubArray = a.slice(start, end + 1);
    return [maxSubArray, maxSum];
}

// Contoh penggunaan:
const a = [-2, -3, 4, -1, -2, 1, 5, -3];
const result = maxSubArray(a);
console.log(result); // Output: [[4, -1, -2, 1, 5], 7]
