/**
 * Bubble Sort Algorithm Implementation in TypeScript
 *
 * Time Complexity:
 * - Worst/Average Case: O(n^2) - occurs when the array is sorted in reverse order.
 * - Best Case: O(n) - occurs when the array is already sorted, thanks to the optimization flag.
 *
 * Space Complexity: O(1) - it only requires a few temporary variables.
 */

/**
 * Sorts an array of numbers using the Bubble Sort algorithm.
 *
 * @param arr The array of numbers to be sorted.
 * @returns The sorted array.
 */
function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    let swapped: boolean;

    // We iterate from the first element up to the second-to-last element (n - 1 passes).
    // The outer loop handles the passes, ensuring that at least one more element is in its final position.
    for (let i = 0; i < n - 1; i++) {
        swapped = false; // Optimization: If no two elements are swapped in the inner loop, the array is sorted.

        // The inner loop compares adjacent elements and "bubbles up" the largest element
        // to the end of the unsorted portion of the array.
        // We only need to check up to n - 1 - i because the last 'i' elements are already in place.
        for (let j = 0; j < n - 1 - i; j++) {
            // Compare the current element with the next element
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        // If no two elements were swapped in the inner loop, the array is sorted,
        // and we can exit early. This is the O(n) optimization for the best case.
        if (!swapped) {
            break;
        }
    }

    return arr;
}

// --- Example Usage ---

const array1 = [5, 1, 4, 2, 8];
console.log("Original Array 1:", array1);
console.log("Sorted Array 1:", bubbleSort(array1)); // Expected Output: [1, 2, 4, 5, 8]

const array2 = [64, 34, 25, 12, 22, 11, 90];
console.log("\nOriginal Array 2:", array2);
console.log("Sorted Array 2:", bubbleSort(array2)); // Expected Output: [11, 12, 22, 25, 34, 64, 90]

const array3 = [3, 1, 2];
console.log("\nOriginal Array 3:", array3);
console.log("Sorted Array 3:", bubbleSort(array3)); // Expected Output: [1, 2, 3]

const array4 = [1, 2, 3, 4, 5]; // Best Case (already sorted)
console.log("\nOriginal Array 4 (Best Case):", array4);
console.log("Sorted Array 4 (Best Case):", bubbleSort(array4)); // Exits early in the first pass
