function outer()
{   
   console.log("Hey I'm a outerfucntion :");
   function inner() 
   {
       console.log("Hey I'm innder funcion :");
   } 
   inner();

} 
outer();
