class Mobile {

    private brand:string ;
    private color:string ;
    private price:number ;
      // her ! indicate this value not empty every time of filling 
    owner !:string;
// optional 
    name?:string;
    // only one time use  keyword readonly 
    readonly vinNumber!:string
    
// constructor is used to initializing  the 
// call on making new object automatic 
    constructor(brand : string, color:string, price:number, vinNumber:string)
    {
        // this keyword refer to current class 
        this.brand=brand;
        this.color=color;
        this.price=price;
        this.vinNumber=vinNumber;
    }

    
}
// new keyword generate new object 
let mobile= new Mobile("hello" ,"blue", 3535, "965223as");
console.log(mobile);

class car2 {
    private color="sliver";

    start(state:boolean){
if (state===true) {
    console.log("start your car");
    
} else {
    console.log("no start");
}
    }
}
let myStart=new car2();
// accessing function 
myStart.start(true);

// ** override constructor  mens using multiple constructor in similar class The constructor method is a special method for creating and initializing an object created with a class.
// overriding method using same name of function with different  functionality or same 
// extend the constructor 
class car {
   color:string;
   location :string ;
   vicNumber : number;
constructor( color:string,  location :string ,  vicNumber : number ){

    this.vicNumber=vicNumber
    this.location=location;
    this.color=color;
}
//without overriding   function 
//    start(state:boolean){
//      if(state===true)
//      {
//         console.log("car start");
//      }
//      else {
//         console.log( "not started"  ); 
//      }
//    }
// with overriding   function
	start(state:boolean):string{
    	     if(state===true)
    	     {
    	        return("car start");
    	     }
    	     else {
    	       return( "not started"  ); 
    	     }
    	   }
    
}
class nissan extends car{
    // if we are using child class constructor then we also use super keyword 
    constructor(color:string,  location :string ,  vicNumber : number){
      super(color,location, vicNumber);  
    }
    vacum=true;
    name="nissan0" ;
    // with overriding   function
	start(state:boolean):string{
        if(state===true)
        {
           return(`${this.name} started `);
        }
        else {
          return( `${this.name} not started `  ); 
        }
      }

}

 let myCar1 =new car("blue", "pakistan"  , 3647634);
 console.log(myCar1 .start(true));
   
console.log(myCar1);
// accessing child class
let myCar=new nissan("black", "pak ", 7328);
console.log(myCar .start(true));
   
console.log(myCar);


// assignment 
class car1{
     public name:string ;

     constructor(name:string){
      this.name=name;
  
     };
 
 
    
     
}
class marsadi extends car1{
  public model?:string ;
  constructor(name:string, model:string ,mychild :string){
    super(name);
    this.model=model;
     
    
  }


  
}

// class Maserati_Ghibli extends marsadi  {
//   public brother?: string;
//   constructor(gradFather:string , father:string , brother:string){
//     super(gradFather, father , brother)
//    this.father=father;
//   this.brother=  brother;
//    }
// }


class Maserati_MC20 extends marsadi{
  public gradFather ?:string;
    public  father?:string;
     public brother?:string ;
  public me?:string;
     constructor(gradFather:string , father:string , brother:string, me:string ){
      super(gradFather, father , brother)
      this
      this.father=father;
this.brother=brother;
this.me=me;
     }
}
let myCarDream= new Maserati_MC20("car ","marsadi", "Maserati_Ghibli", "Maserati_MC20");



