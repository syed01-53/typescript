// when you want to export just value then we use default export  
// we can change the name of export 

export default class Welcome{
     text:string;
    constructor(text:string){
       this.text=text;
    }
    displayMassage(){
       return(this.text);
        
    }
}




// you can use only onetime default keyword in whole of program 