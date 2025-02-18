class student {
    String name;
    int age;
    String grade;
    String studentID;
    String major;
    public student(String name, int age, String grade, String studentID, String major){
        this.name=name;
        this.age=age;
        this.grade=grade;
        this.studentID=studentID;
        this.major=major;
    }
public String getname()
{
    return name;
}
public int getage()
{
    return age;
}
public String getgrade()
{
    return grade;

}
public String getstudentId()
{
    return studentID;
}
public String getmajor()
{
    return major;
}
public void setname(){
}
public void display()
{
    System.out.println("name:"+this.name);
    System.out.println("age:"+this.age);
    System.out.println("grade:"+this.grade);
    System.out.println("studentID:"+this.studentID);
    System.out.println("major:"+this.major);
}
public static void main(String[] args){
    Student st1=new Student(name:"loga",age:20;grade:"A",StudentID:"4026",major:"computer science");
    st1.display();
}
}
