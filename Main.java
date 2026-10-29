import java.util.Arrays;
import java.util.Base64;
import java.util.concurrent.CompletableFuture;
import  java.util.StringJoiner;
/**
 * Main
 */
public class Main {

    public static void main(String[] args) {
        String s="hello mummadi karthik";
        String encode=Base64.getEncoder().encodeToString(s.getBytes());
        System.out.println(encode);
         
        byte[] b=Base64.getDecoder().decode(encode);
        String d=new String(b);
        System.out.println(d);
        CompletableFuture.supplyAsync(() -> "Hello")
                 .thenAccept(System.out::println);
                 int arr[]={5,2,8,1};

Arrays.parallelSort(arr);

StringJoiner sj=new StringJoiner(",");

sj.add("Java");
sj.add("Python");

System.out.println(sj);
System.out.println(Arrays.toString(arr));
    }

}