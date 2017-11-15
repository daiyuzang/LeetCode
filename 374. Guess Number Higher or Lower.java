/* The guess API is defined in the parent class GuessGame.
   @param num, your guess
   @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
      int guess(int num); */

public class Solution extends GuessGame {
    public int guessNumber(int n) {
        int left = 1;
        int right = n;
        int mid;
        int result;
        while(left < right){
            mid = left / 2+ right / 2;//两数相加之和除2 ！= 两数除2再相加！！！！！（example：1,3）
            result = guess(mid);
            if(result == -1){
                right = mid - 1;
            }else if(result == 1){
                left = mid + 1;
            }
            else{
                return mid;
            }
        }
        return left;
    }
}