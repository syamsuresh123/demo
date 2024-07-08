// alert("hello");
// document.write("hello")
// console.log("hello")


// let n=30;
// console.log(n)

// let n=20;
// console.log(n)
// var s=30;
// console.log(s)

//  type error
// const number=30;
// number=40;
// console.log(number)/

// var n=30;
// n=50;
// console.log(n) 

// var s="syam";
// console.log(s)

// console.log("ENTER A NAME")
// var s="syam"
// console.log(s) 


// globel...

// let a=20;
// {
// console.log(a)
// }
//  var s=30;
//  {
//     console.log(s)
//  }

//  const c=10;
//  {
//     console.log(c)
//  }

// BLOCK SCOPE

// {
//     let a="syam";
//     console.log(a)
// }

// {
//     const a="syam";
//     console.log(a)
//     let c="suresh";
//     console.log(c)
// }
// {

//     var a=20;
//     console.log(a)
// }

// VAR is a not a block scope:

// {
//     var a=20;
// }
// console.log(a) 

// funcutional scope:

// function greet(){
//     var a=30;
//     console.log(a)
// }
// greet(); 

// function greet(){
//     let a=20;
//     var c=30;
//     const s=40;
//     console.log(c)
//     console.log(s)
//     console.log(a)
// }
// greet()

// console.log("10"+10);

// NUMBERS
// let num=11123;
// console.log(num)

// var n=2.333;
// console.log(n)

// let s="syam";
// console.log(s)
// var c="suresh";
// console.log(c)

// let num=10;
// num=num+20;
// console.log(num)

// let n=20;
// console.log(n)
// n=n+30;
// console.log(n)  

// let a=10;
// let b=20;
// console.log(`initial values of a and b are ${a},${b}`)
// a=a+b;
// console.log(a)
// b=a-b;
// console.log(b)
// a=a-b;
// console.log(a)
// console.log(`updated values of a and b are ${a},${b}`)
//  a=a*2;
// console.log(a)
//  b=b*2;
// console.log(b)

// let n=2;
// if (n==2);
// console.log("print is even")

// let marks=parseInt(prompt("ENTER YOUR MARKS"));
// if (marks>=40 && marks<=50){
// console.log("buy a pen ");
// }else if (marks>=50 && marks<=60){
//     console.log("buy a book");
// }else if (marks>=60 && marks<70){
//     console.log("buy a watch");
// }else if (marks>=70 && marks<=80){
//     console.log("buy a bag");
// }else if (marks>=80 && marks<=90){
//     console.log("buy a mobile");
// }else if (marks>=90 && marka<=100){
//     console.log("buy a laptop");
// }else{
//     console.log("fail");
// }


// let n = parseInt(prompt("ENTER YOUR NUM:"));
// if (n % 2 == 0) {
//     console.log("even");
//     console.log(n * 2);
// } else {
//     console.log("odd");
//     console.log(n + 2)
// }


// let n=parseInt(prompt("ENTER TOUR FIRST NUMBER"));
// let m=parseInt(prompt("ENTER YOUR LAST NUMBER"));
// if(n&&m){
//     console.log(n+m);
//     console.log(n-m);
//     console.log(n%m);
//     console.log(n/m);
// }

// let n=parseInt(prompt("ENTER YOUR FIRST NUMBER"));
// let s=prompt("ENTER A OPERATER");
// let m=parseInt(prompt("ENTER YOUR LAST NUMBER"));
//  if(s=="+"){
//  console.log(n+m);
//  }else if(s=="-"){
//     console.log(n-m);
//  }else if(s=="%"){
//     console.log(n%m);
//  }else if(s=="*"){
//     console.log(n*m);
//  }else if(s=="/"){
//     console.log(n/m);
//  }else{
//     console.log("worng operater.")
//  }


// let n=parseInt(prompt("ENTER A NUM!:"));

// if (n>0){
//    console.log("positive")
// }
// else{
//    console.log("negative")
// }


// let age=parseInt(prompt("ENTER YOUR AGE"));

// if(age<=12){ 
//    console.log("pay a ticket price of 5$");
// }else if(age>=12 && age<=18){
//    console.log("pay a ticket price of 10$ ");
// }else if(age>18 && age<=60){
// console.log("pay a ticket price of 20$");
// }else{
//    console.log("pay a ticket price of 15$");
// }


// var n1=10;
// var n2=20;
// if(n1>n2){
//    console.log("n1 is greter")
// }else{
//    console.log("n2 is greter")
// }

// let n=parseInt(prompt("ENTER YOU NAME"));
// s=(n=[0]);
// console.log(s);

// let n=(prompt("ENTER NAME:"));
// f1=n[0]
// f2=n[-1]
// length=(n.length-2)
// stars="*"*length;
// m=f1+stars+f2
// console.log(m);


// let n=parseInt(prompt("ENTER A NUM:"));
// if (n%2==0){
// console.log("even");
// }else{
// console.log("odd");
// }

// let a=parseInt(prompt("enter your marks"));
// switch(a){
// case a>40 && a<=50:
// console.log("you got a pen");
// break;
// case a>=50 && a<=60:
// console.log("you got a phone");
// break;
// default:
// console.log("fail")
// break;
// }


// var a=15;
// while(a>1){
//     console.log("a ="+a);
//     a--;
// }

// let a=0;
// while(a<10){
//     console.log("a ="+a);
//     a++;
// }


// let a=0;
// do{
//     console.log("a ="+a);
//     a++;
// }while(a<10);

// for(a=0;a<10;a++){
// console.log("a ="+a);}


// let a=0;
// n=parseInt(prompt("ENTER A NUM:"))
// while(a<n+9){
//     console.log(a,`*`,n,`=`,n*a);
//     a++
// }

// let n=parseInt(prompt("ENTER A NUM:"));
// for(i=1;i<n+9;i++){
// console.log(i,`*`,n,`=`,n*i);
// }


// for(let i=0;i<=10;i++){
//     console.log(`values:${1},${2},${3},${4},${5},${6},${7},${8},${9},${10}`)
//     console.log(i);
// // }

// let n = 10;  // You can change this value to any positive integer
// let sum = 0;
// let output = "";

// for (let i = 1; i >= n; i--) {
//     sum *= i;
//     output *= i;
//     if (i > n) {
//         output *= "*";
//     }
// }

// output *= " = " + sum;
// console.log(output);

// let n=10;
// let sum=0;
// for (let i=1; i<=n; i++){
// sum+=i
//     console.log(sum);
// }


// n=3;
// if (n%2==0){
// console.log("even");
// console.log(n*2)
// }else{
// console.log("odd")
// console.log(n+2)
// }

// let n=0;
// let s=10;
// add(n,s);
// function add(n,s){
//     if(n<=s){
// console.log(n);
// n++
// add(n,s);
//     }
// }

// let n = 10;  
// let sum = 0;
// let output = "";

// for (let i = 1; i <= n; i++) {
//     sum += i;
//     output += i;
//     if (i < n) {
//         output += "+";
//     }
// }

// output += " = " + sum;
// console.log(output);  

// let n=10;
// let sum=0;
// // output="";
// for(let i=1;i<=n;i++){
//     sum=sum+i;
// }
// console.log(sum)

// let n = 10;
// let sum = 0;
// let output = "";

// for (let i = 1; i <= n; i++) {
//     sum += i;
//     output += i;
//     if (i < n) {
//         output += "+";
//     } else {
//         output += "=";
//     }
// }

// output += sum;

// console.log(output);

