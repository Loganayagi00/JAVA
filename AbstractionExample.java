abstract class shape{
    abstract void draw();
}
class Circle extends shape{

    void draw(){
        System.out.println(
            "Drawing a Circle");
    }
}
class Rectangle extends shape{

    void draw(){
        System.out.println("Drawing a Rectangle");
    }
}
class Triangle extends shape{
    void draw(){
        System.out.println("Drawing a Triangle");
    }
}
class Square extends shape{

    void draw(){
        System.out.println("Drawing a square");
    }
}
class Cone extends shape{
        void draw(){
        System.out.println("Drawing a Cone");
    }
}
public class AbstractionExample{
    public static void main(String[]args){
        shape Circle=new Circle();
        shape Rectangle=new Rectangle();
        shape Triangle=new Triangle();
        shape Square= new Square();
        shape Cone=new Cone();
        Circle.draw();
        Rectangle.draw();
        Triangle.draw();
        
        Square.draw();
        Cone.draw();
    }
}

