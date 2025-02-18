public class Test{

    // Method to calculate the nth Fibonacci number using recursion
    public static int fibonacci(int n) {
        // Base case: if n is 0 or 1, return n
        if (n <= 1) {
            return n;
        }
        // Recursive case: fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    public static void main(String[] args) {
        int n = 10; // You can change this value to generate more terms in the Fibonacci series

        System.out.println("Fibonacci series up to " + n + " terms:");

        // Print the Fibonacci series
        for (int i = 0; i < n; i++) {
            System.out.print(fibonacci(i) + " ");
        }
    }
}