function mergeSort(array) {
    if (array.length === 1) return array;

    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0; // pointer for left
    let j = 0; // pointer for right

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Append remaining elements
    while (i < left.length) result.push(left[i++]);
    while (j < right.length) result.push(right[j++]);

    return result;
}

// Example usage
const arr = [64, 34, 25, 12, 22, 11];
console.log(mergeSort(arr)); // Output: [11, 12, 22, 25, 34, 64]
