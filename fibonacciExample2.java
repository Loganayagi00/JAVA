class fibonacciExample2{
    public static void main(string[] args){
        int n = 10;
        for(int i=0;i<n;i++){
            system.out.println(fibonacci(i)+" ");
        }
    }
    public static int
    fibonacci(int n){
        if(n<=1){
            return n;}
            else{
                return(n-1)+fibonacci(n-2);
            }
        }
    }