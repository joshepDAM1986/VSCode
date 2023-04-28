public class suma_cuadrados_100npar 
{
public static void main (String[]args)
    {
    int num;
    int sum=0;
    

 for (num=0;num<=200; num++)
        {
            if (num%2==0)
                {
                sum+=num;
                }
        }
        System.out.println("La suma de los cuadrados es "+sum);
    }
}