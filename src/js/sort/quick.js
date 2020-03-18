const arr = [8, 3, 4, 1, 2, 5, 6, 7];
startQuickSort(arr);

function startQuickSort(arr) {
  quickSort(arr, 0, arr.length - 1);
}

function quickSort(arr, start, end) {
  const part2 = partition(arr, start, end);
  if (start < part2 - 1) {
    quickSort(arr, start, part2 - 1);
  }

  if (part2 < end) {
    quickSort(arr, part2, end);
  }
}

function partition(arr, start, end) {
  const pivot = arr[parseInt((start + end) / 2)];
  while (start <= end) {
    while (arr[start] < pivot) start++;
    while (arr[end] > pivot) end--;
    if (start <= end) {
      swap(arr, start, end);
      start++;
      end--;
    }
  }
  return start;
}

function swap(arr, start, end) {
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
}
