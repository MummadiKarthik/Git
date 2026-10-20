/**
 * Main
 */
public class Main extends  Thread{

    public  void run(){
        System.out.println("hello karthik");
    }
    public static void main(String[] args) {
         Main s=new Main();
         s.start();
    }
}