class Solution {
    public List<String> readBinaryWatch(int num) {
        ArrayList<String> arr = new ArrayList<>();
        for(int i = 0;i<12;i++){
            for(int j=0;j<60;j++){
                if (Integer.bitCount(i) + Integer.bitCount(j) == num) {
                    arr.add(String.format("%d:%02d",i,j));
                }
            }
        }
        return arr;
    }
}