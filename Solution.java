public class Solution {
    public static void nStarTriangle(int N) {
        for(int i=0; i<N; i++)
        {
            for(int j=0; j<i; j++)
            {
                System.out.print(" ");  
            }
             for(int j=0; j<2*N-(2*i+1); j++)
            {
                System.out.print("*");
                
            }
             for(int j=0; j<i; j++)
            {
                System.out.print(" ");
                
            }
            System.out.println();
        }
    }
    public static void main(String args[])
    {
        int N=3;
        nStarTriangle(N);
    }
}
