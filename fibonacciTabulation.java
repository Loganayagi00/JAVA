class fibonacciTabulation{
    public static void manin(String[] args)
    int n=10;
    for(int i=0;i<n;i++){
        System.out.println(fibonacci(i)+" ");
    }
}
public static int fibonacci(int n){
    fibonacci(int n){
    if(n<=1){
        return n;}
        else{


            return(n-1)+fibonacci(n-2);
        }
    }
    int fibonacci(int n) {
        int[] table=new int[n+1]; 
        table[0]=0;
        table[1]=1;
        for (int i=2;i<n;i++){
            table[i] = table[i-1]+table[i-2];
             }
             return table[n];
    }
}