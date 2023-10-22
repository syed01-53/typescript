// Declaring Object 
 const poet={
   id:1223,
   name:"have a good day "
}
poet.name ="me have not a any name" ;
console.log(
    poet.name);

// Type define 
let poetLater : 
{
    id:number;
    name:string;   
};

 poetLater = 
 {
  id :123,
  name:"My Value "
};
poetLater.name="i have a nothing ";
console.log(poetLater.name)

// Aliased Object Types
type Student = {
    //data type that used in he object 
    id: number;
    name: string;
    //function that used in the object
    result(): number; 
  };
  
  let myStudent: Student = {
    id: 8349,
    name: "mehmmad",
    result: () => myStudent.id * Math.random(),
  };

 let resultValue:number= myStudent.result();
 console.log(resultValue);
  

//  Nested Object Types

type poemL ={
  auther:{
    id :number;
    fname:string ;
    lname:string; 
  }
  name:string;
  }

  let poem :poemL ={
name :"dafudiles ",
auther:{
  id:121,
  fname:"zain",
  lname:"sultan"
}
  }

console.log(poem.name);
console.log(poem.auther.id);

//Optional Properties
type Book = {
  author?: string;
  pages: number;
 }; 

 let BookS:Book={
    pages:1212
 }
 console.log(BookS.pages)
 

 type PoemWithPages = {
 name: string;
 pages: number;
 type: 'pages';
};
type PoemWithRhymes = {
 name: string;
 rhymes: boolean;
 type: 'rhymes';
};
type Poem = PoemWithPages | PoemWithRhymes;
const poem2: Poem = Math.random() < 0.0
 ? { name: "The Double Image", pages: 7, type: "pages" }
 : { name: "Her Kind", rhymes: true, type: "rhymes" };
if (poem2.type === "pages") {
 console.log(`It's got pages: ${poem2.pages}`); // Ok
} else {
 console.log(`It rhymes: ${poem2.type}`);
}

//Intersection Types

type book1 ={
  name:string,
  id:number;

   auther :{

    name:string;
    worldRank:number;
   }
}

type magzen ={
  name:string,
  numberOFatcal:number;

   company :{

    name:string;
    location:string;
   }
}

type collection =book1 & magzen;
