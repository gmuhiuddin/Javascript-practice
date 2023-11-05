//Question no:1


// let months =['January','February','March','April','May','June','July','August','September','October','November','December'];
// let userDate = prompt("Enter a date mm/dd/yyyy")
// let date = new Date(userDate)
// let month = date.getMonth()
// let month1 = months[month]
// let day = date.getDay()
// day = day.toString()
// let year = date.getFullYear()
// year =year.toString()
// console.log(month1,"/",day,"/",year)


//Question no:2


// function age(){
//     let birthDate = document.getElementById("input").value;
//     let dob = new Date(birthDate)
//     let now = new Date()
//     let userAge =  now - dob
//     let ageZero = document.getElementById('ageZero')
//     let conformAge = userAge/1000/60/60/24/365.25
//     ageZero.innerText = conformAge.toFixed(1)
// }


//Question no:3


// let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
// let userDate = prompt("Enter your birth date mm/dd/yyyy")
// let now = new Date(userDate)
// let day = now.getDay()
// let ans = weekDays[day]
// alert("your birthday week day is "+ans)


//Question no:4


// function eventDay(){
//     var eventDaysInput = document.getElementById("eventDate").value;
//     var eventDaysZero = document.getElementById('eventDays')
//     var eventDate = new Date(eventDaysInput)
//     var now = new Date()
//     if(now <=eventDate){
//     let userAge =   eventDate - now 
//     let eventDays = userAge/1000/60/60/24
//     eventDaysZero.innerText = Math.round(eventDays)+" days remaining in event."
// }
// else{
//     eventDaysZero.innerText = "Please enter valid date"
// }
// }


//Question no:5

// let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
// let userDate = prompt("Enter your birth date mm/dd/yyyy")
// let now = new Date(userDate)
// let day = now.getDay()
// let ans = weekDays[day]
// if(ans === "Sunday"||ans === "Saturday"){
//     alert( ans +" is weekend please enter another date")
// }else{
// alert(ans+" is not a weekend")
// }


//Question no:6


// function countDown(){
//     let countDownZeroDay = document.getElementById('countDownZeroDay')
//     let countDownZeroHours = document.getElementById('countDownZeroHours')
//     let countDownZeroMinutes = document.getElementById('countDownZeroMinutes')
//     let countDownZeroSecond = document.getElementById('countDownZeroSecond')
//     let input = document.getElementById('evenCountDownDate').value;
//     let date = new Date()
//     let userDate = new Date(input)
// userDate = userDate.getTime()
// userDate = userDate-18000000
//     let time  =  userDate - date.getTime()
//     if(date <= userDate){
//         let countDownDay = time/1000/60/60/24;
//         let countDownHours = time/1000/60/60;
//         let countDownMinutes = time/1000/60;
//         let countDownSecond = time/1000;
//         countDownZeroDay.innerText =  Math.round(countDownDay)+" days remaining in event."
//         countDownZeroHours.innerText = Math.round(countDownHours)+" hours remaining in event"
//         countDownZeroMinutes.innerText =  Math.round(countDownMinutes)+" minutes remaining in event."
//         countDownZeroSecond.innerText = Math.round(countDownSecond)+" second remaining in event."
//     }else{
//         countDownZeroDay.innerText = "Please enter valid date"
//         countDownZeroHours.innerText ="Please enter valid date"
//         countDownZeroMinutes.innerText = "Please enter valid date"
//         countDownZeroSecond.innerText ="Please enter valid date"
//     }
// }


//Question no:7


// function findSeason (){
//     let input = document.getElementById('findSeason').value;
//     let findSeasonZero = document.getElementById('findSeasonZero')
//     let userDate = new Date(input)
//     let userDateMonth = userDate.getMonth()
//     if(userDateMonth === 2 ||  userDateMonth === 3 || userDateMonth === 4 ){
//         findSeasonZero.innerText = "Season is Spring"
//     }else if(userDateMonth === 5 ||  userDateMonth === 6 || userDateMonth === 7 ){
//         findSeasonZero.innerText = "Season is Summer"
//     }else if(userDateMonth === 8 ||  userDateMonth === 9 || userDateMonth === 10 ){
//         findSeasonZero.innerText = "Season is Autumn"
//     }else if(userDateMonth === 11 ||  userDateMonth === 0 || userDateMonth === 1 ){
//         findSeasonZero.innerText = "Season is Winter"
//     }else;
// }


//Question no:8


// let userBirthDate = prompt("Enter your birth date mm/dd/yyyy");
// let UserFutureDate = prompt("Enter a future date mm/dd/yyyy")
// let futureDate = new Date(UserFutureDate)
// let birthDate = new Date(userBirthDate)
// let finalTime =  futureDate.getTime() - birthDate.getTime() 
// alert(Math.round(finalTime/1000/60/60/24/365.25).toFixed(1),"your age in future")


//Question no:9

// function findDate (){
// let userDate1 = document.getElementById('findDate1').value;
// let userDate2 = document.getElementById('findDate2').value;
// let findDateZero = document.getElementById('findDateZero')
// let date1 = new Date(userDate1)
// let date2 = new Date(userDate2)
// let finalDate = date2.getTime() - date1.getTime() 
// findDateZero.innerText = finalDate/1000/60/60/24

// }


//Question no:10 


// function findWorkingDay (){
//     let userDate1 = document.getElementById('findDate1').value;
//     let userDate2 = document.getElementById('findDate2').value; 
//     let WorkingDays = document.getElementById('WorkingDays')
//     let date1 = new Date(userDate1)
//     let date2 = new Date(userDate2)
//     let totalWorkingDays = 0;
//     while(userDate1 <= userDate2){
//         if(date1.getDay() !== 0 && date1.getDay() !== 6) {
//         totalWorkingDays+1;
//     }
// }
// console.log(totalWorkingDays)
// }  

// var arrow = (name = 'a') => console.log(name)
// var a = prompt('abc')
// if(a.length === 0){
//     arrow()
//     alert('if')
// }else{
//    arrow(a)
//    alert('else')
// }
// let obj =[ {
//     fname : "ghulam muhiuddin",
//     lname : "imran"
// },
// {
//     fname : "ahmed",
//     lname : "ali"
// },
// {
//     fname : "hamza",
//     lname : "owais"
// },{
//     fname : "ali",
//     lname : "irfan"
// }
// ]
// obj.forEach(a => console.log(a.fname,a.lname))
// let r = obj.filter(a => a.lname.length <= 5)
// console.log(r)
// let nameInp = document.getElementById('nameInp');
// let updBtn = document.getElementById('updBtn');
// let nameSp = document.getElementById('name');

// updBtn.addEventListener('click',() => {
//     localStorage.setItem("User name",nameInp.value) 
//     undefinedName()
//     nameInp.value = ""; 
// })
// function undefinedName (){
//     let username = localStorage.getItem("User name")
//     nameSp.innerText = username || "--"
// }
// undefinedName()
// alert("Hello world")
// let a = setTimeout(function(){
//     alert("I am a inside a settimeout")
// },
// 1000)
// clearInterval(b)
// let b = setInterval(function (){
//     alert("
// I am a inside a setinterval")
// },4000)

// let zero = document.getElementById('zero');
// let counting = 0;
// let a = setInterval(()=>{

// counting++
// zero.innerText = counting
// counting == 100?clearInterval(a):a
// },99)

// for(let i = 0; i < 100 ;i++){
//     a++
// }

// let arr = ["ghulam","ghulam1","ghulam2"]
// arr.filter((a,b)=> a.length < )

//   console.log(a)
// let now = new Date()
// let dayNum = "b"
// switch(dayNum){
//     case "b" :
//     document.write("Sunday")    
//     break
//     ;
//     case 1 :
//     document.write("Monday") 
//     break   
//     ;
//     case 2 :
//     document.write("Tuesday")    
//     break
//     ;
//     case 3 :
//     document.write("Wednesday")   
//     break 
//     ;
//     case 4 :
//     document.write("Thursday")  
//     break  
//     ;
//     case 5 :
//     document.write("Friday")  
//     break  
//     ;
//     case 6 :
//     document.write("Saturday") 
//     break   
//     ;
//     default:
//     document.write("Enter a valid week days")    
//     ;
// }

// let a = "to be or not to be. !"
// a = a.replace("to be.","TO b")
// let b = a.charAt(a.length - 1)
// var profit = 110;
// console.log( profit.toString())
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 
//  var now = new Date(); 
//  var later = new Date(2025,11,15)
//  let a = later.getTime() - now.getTime()
//  console.log(Math.floor(a/1000/60/60/24/365.25))


// var greeting = "Hello, there." 
//  greetUser(greeting);
//  function greetUser(greeting ) { 
//       alert(greeting); 

//  }

// let fC = a.slice(0,1) 
// let fCIC = fC.toUpperCase()
// a =a.replace(fC,fCIC)

//  function b (){
//     let a = prompt("name")
//     document.write("Hello ",a+"<br />")
//  } 
//  b()
//  document.write("Hello ",a)

// dayNames.forEach((a,b) => console.log(a))
// dayNames = dayNames.filter((a,b) => a.length === 3)
// console.log(dayNames)
// let c = dayNames.filter((a,b) => a.length ==4)
// console.log(c)
// for (var i = 0; i <= 3; i++) { 
//        alert(i); 
//      }
// var i = 2; 
//  while (i <= 3) { 
//        alert(i); 
//           i++; 
//  }
// for(let i = 0; i < 9 ; i++){
//       document.write("Hello"+"<br/>")
// }
// let a = 0; 
// while(a < 9){
//       document.write("Hello"+"<br/>")
// a++
// }
// let hello = "Hello"
// let a = 0;
// while(a < 1){
//       document.write("b")
//       a++
// }
// do{
// document.write("a<br />")
// a++;
// }while(a < 10)

// let check = document.getElementById("check");
// check.addEventListener('click' , function () {
// // Redirect to a new page
// window.location.href = 'check.html'
// })

// let a = [1,7,2,3,9,4,6,8,5,10]
// a.sort((a,b) => a-b)
// console.log(a)

// let promise = new Promise((resolve,reject) => {
//     let a = 10 ;

//     if(a === 10){
//         resolve(true)
//     }else{
//         reject(false)
//     }
// })
// promise.then((a) => {
// console.log(a)
// }).catch((a) => {
//     console.log(a)
// })


// let a = 0;
// let i = 0;
// do {
//     console.log(a)
//     a++
// } while (a < 0);
// while (i < 0) {
//     console.log(i)
//     i++
// }

// let zero = document.getElementById('zero');
// let a =0  ;
// setInterval(() => {
// a++
// zero.innerText = a
// },79) 

// let obj= {
// name:'Ghulam muhiuddin',
// fname : 'Imran'
// };
// let {name : a,fname : b} = obj

// console.log(a,b)\;

let p = document.getElementById('zero');
// // console.log(p.childNodes.length)
// // console.log(p.n)


// var liElements = document.getElementsByTagName("li");
// var howManyLi = liElements.length;
//  for (var i = 0; i < howManyLi; i++) {
//        if (liElements[i].innerHTML === "") { 
//              liElements[i].innerHTML = "coming soon"; 
//                } 
// }
p.addEventListener('click', function () {
    
window.location.href = 'check.html'
})