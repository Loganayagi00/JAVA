public class ArrayEg{
    public static void main(string[] args){
        int[] arr={4,3,1,5,6,2};
        int temp;
        int i;
        temp=arr[0];
        for(i=0;i<arr.length-1;i++){
            if(arr[i+1]<temp){
                temp=arr[i+1];
            }
        }
        system.out.println(temp);
    }
}