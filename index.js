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
// let a = 150;
// console.log(a);
// a++
// console.log(a);
// var num = 1; 
// console.log(num)
// num--
// var newNum = num;
// console.log(num)
// console.log(num,newNum)
// var totalCost = 1 + (3 * 4);

// var resultOfComputation = (2 * 4) * 2+4;

// console.log(resultOfComputation)

// alert("2" + "2");
// console.log('GhuLaM')
// let pets = [];
// console.log(pets)
// pets.push("fish", "ferret",1);
// pets.pop()
// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo "];
//   var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"]; 
// for(let i =0;i < firstNames.length;i++){
//     console.log(firstNames[i],lastNames[i])
// }

//     var fullNames = []; 
//     for (var i = 0; i < 5; i++) { 
//            for (var j = 0; j < 5; j++) { 
//                   document.write(i,j+"<br/>")
//                    } 
//  }
//  console.log(fullNames)

// let a = ['ghulam']
// let b = ['muhiuddin']
// a=a.concat(b)
// co  nsole.log(a)
// var a = [1,3,4,5]
// a.length= 0
// a.push('a')
// console.log(a)

// let p = fetch('https://goweather.herokuapp.com/weather');

// p.then(() =>{
//     console.log('abc')
// }).catch(() => {
//     console.log('xyz')
// })
// let weatherInfo = document.getElementById('a');
// fetch(
//       `https://api.weatherapi.com/v1/current.json?key=91b4369798474fee84b51233233010&q=lahore&aqi=no`
//     )
//       .then(a => a.json())
//       .then(data => {
//         console.log(data)
//         const weatherHtml = `<div class='weathercontainer'> 
//         <div class='row'> <h2>Temperature in ${data?.location?.name} (${data?.location?.lat} , ${data?.location?.lon})</h2>  </div>
//         <div class='row'> <span>Temperature </span> <span> ${data?.current?.temp_c} <sup>o</sup>C</span>  </div>
//         <div class='row'> <span>Feels Like </span> <span> ${data?.current?.feelslike_c} <sup>o</sup> C</span>  </div>
//         </div>`

//         weatherInfo.innerHTML = weatherHtml
//       })


// let btn = document.getElementById('btn');


// btn.addEventListener('click' , a => {
//   a.preventDefault()
//   console.log(a)
// })

// async function abc () {
//   let a = 8 
//   let c = await a
//   let b = 7 
//   let d = await b
//   return [c,d];
// }
// abc().then((vae) => {
//   console.log(vae)
// })
// .catch((error) => {
//  console.log(error) 
// })

// async function test () {
//     let a = await 'ghulam muhiuddin'

//     try{
//         return c
//     }
//     catch(error){
//         console.log('error')
//     }
// }
// test().then((value) => {
//     console.log(value)
// })

// console.log('C')


// async function abc () {
//  await fetch(
//     `https://api.weatherapi.com/v1/current.json?key=91b4369798474fee84b51233233010&q=lahore&aqi=no`
//   )
// }
// abc().then(value => console.log(value.js));


// let a = prompt('What is your name');
// console.log(a);

// let zero = document.getElementById('zero');
// let a = 0;
// let set = setInterval(() => {
//     a++
//     zero.innerText = a 
//     if (a === 599){
// clearInterval(set)
//     }
// },8)
let a = document.getElementById('zero')
console.log(a)