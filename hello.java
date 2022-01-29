import java.util.Scanner; 

class MyClass {
  public static void main(String[] args) {
    int x, y, sum;
    Scanner myObj = new Scanner(System.in); 
    System.out.println("Type a number:");
    x = myObj.nextInt(); 

    sum = x * 2;  
    System.out.println(sum); 
  }
} 