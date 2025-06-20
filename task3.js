/*let student = {
    name: "dilip",
    marks: [100,100,100,100]
}
console.log(student.name);
tot_mar = student.marks.reduce((a, b) => a + b, 0);
console.log("Total Marks: " + tot_mar);
*/
//,,,,,,,,,,,,,,,,,,,,,,,,,
/*function greet(){
    console.log("hello")
}
function hari(a,b){
    console.log(a)
    b()
}
hari(10, greet)*/
//,,,,,,,,,,,,,,,,,,,,,,,,,
/*let dilip = new Set([9,7,5,0,1,3,4,7,2,1])
console.log(dilip)
 v = dilip.add(17)
console.log(v)
dilip.delete(5)
console.log(dilip)
a = dilip.has(3)
console.log(a);
s = dilip.size
console.log(s);
dilip.clear()
console.log(dilip);*/
//,,,,,,,,,,,,,,,,,,,,,,,,,
//"use strict"
/*dilip = ["don","gymboy","onnula"]
let [a, b, c] = dilip
console.log(c)
let hari = ["mental","thandasooru",...dilip]

console.log(hari)
*/
//,,,,,,,,,,,,,,,,,,,,,,,,,
/*function kalyanam(){
    let name = "dilip"
    function greet(){
        console.log("hello " + name)
    }
    return greet;
}
let greet = kalyanam();
greet(); 
*/
//,,,,,,,,,,,,,counter,,,,,,,,,,,,
/*setTimeout(()=>{
    console.log("hello")
},6000)*/
//,,,,,,,,,,interval,,,,,,,,,,,,,,,,
/*setTimeout(()=>{
    console.log("hello")
},2000)*/
//,,,,,,,,,,,task,,,,,,,,,,,,,,,
/*setInterval(()=>{
    for(let i = 1;i<6;i++){
        console.log(i)
    }
},1000)
*/
//,,,,,,,,,,,,,task2,,,,,,,,,,,,,,
let i = 1
setInterval(()=>{
    if(i>5){
        i = 1
    }
        if(i<=5){
            console.log(i)
            i++
        }
},2000)
//,,,,,,,,,,,,,task3,,,,,,,,,,,,,,





