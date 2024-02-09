function isPalindrome(palavraFrase) {
  let text = palavraFrase.replace(/\s+/g, "").toLowerCase();
  let result = text.length;

  for (let i = 0; i < result; i++) {
    if (text[i] !== text[result - 1 - i]) {
      return false;
    }
  }
  return true;
}

function arrayMaxMin(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }
  return [min, max];
}
