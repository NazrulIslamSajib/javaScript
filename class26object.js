function myinfo(name,id,roll,year)
{
    this.name=name;              ///eta ekta consturctor 
    this.id=id;
    this.roll=roll;
    this.year=year; 
    this.showme=function()
    {
        console.log(this.name);
        console.log(this.id);
        console.log(this.roll);
        console.log(this.year);
    }
} 
var saj=new myinfo("sajib","C221074",100,2023);  /// ekta object er modde onek gula variable raktechi. 
var kam=new myinfo("kamrul","c223",19,18);
saj.showme();
/*console.log(saj); 
console.log(kam.id);  /// ekahne shudu kam object er id tai dekha jabe 
*/
