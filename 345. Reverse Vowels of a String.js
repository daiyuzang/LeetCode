/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    var left = 0,
        right = s.length - 1;
    while (left < right) {
        if (isVowels(s[left]) && isVowels(s[right])) {
            var flag = s[left];
            s[left] = s[right];
            s[right] = flag;
            left++;
            right--;
        } else if (isVowels(s[left]) && !isVowels(s[right])) {
            right--;
        } else {
            left++;
        }
    }

    function isVowels(char) {
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U')
            return true;
        else
            return false;
    }
    return s;
};
reverseVowels("hello");