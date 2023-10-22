class person {
  public  name:string ;
  public  age:number;
  constructor(age:number , name:string){
    this.age=age;
    this.name=name;
  }
  public getName(){
  return this.name;
  }


}
class student extends person{
   public rollNumber :number;
 public   courses:string[]=[];
 constructor(rollNumber:number , age:number ,name:string ){
    super( age,name )
    this.rollNumber=rollNumber;
 }
    registerCourses(courses:courses){
     
       this.courses.push(courses)
     
       
    }

}

class instructor extends person {
  public salary :number;
  public coursesTech :string[]=[];
  constructor(salary:number , age:number ,name:string){
    super(age,name);
    this.salary=salary;
  }
  public assignment (course:string){
   this.coursesTech.push(course);
  }  


}

class courses{
    public id:number;
    public name:string;
    // her we  are also use student class as 
    public student :student[]=[];
    // same as student class  
    public instructor  :instructor[]=[];
    constructor(name:string , id:number ){
    this.id=id;
    this.name=name;
    }
 
    public addStudent(student: student): student[] {
        this.student.push(student);
        student.registerCourses(this.name);
        return this.student;
      }
    // public setInstructor(instructor:instructor){
    //     this.instructor.push(instructor);
        
    // }
}

//register student 
let student1=new student(12212, 3432, "Ali");
let student2=new student(12212, 3432, "Ahmad");
let student3=new student(12212, 3432, "Riaz");
student1.registerCourses("MEta ");
student2.registerCourses("web");
student1.registerCourses("blockchain");
console.log(student1);

// instructor 
let instructor1=new instructor(12121, 31, "Mehmmad");
instructor1.assignment("web3.0")
console.log(instructor1);

// courses 
let course1=new courses("meta", 747838)

console.log(course1.addStudent(student1));







