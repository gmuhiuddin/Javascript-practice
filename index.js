// Question no:1


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


// Question no:2


// function age(){
//     let birthDate = document.getElementById("input").value;
//     let dob = new Date(birthDate)
//     let now = new Date()
//     let userAge =  now - dob
//     let ageZero = document.getElementById('ageZero')
//     let conformAge = userAge/1000/60/60/24/365.25
//     ageZero.innerText = conformAge.toFixed(1)
// }


// Question no:3


// let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
// let userDate = prompt("Enter your birth date mm/dd/yyyy")
// let now = new Date(userDate)
// let day = now.getDay()
// let ans = weekDays[day]
// alert("your birthday week day is "+ans)


// Question no:4


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


// Question no:5

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


// Question no:6


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


// Question no:7


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


// Question no:8


// let userBirthDate = prompt("Enter your birth date mm/dd/yyyy");
// let UserFutureDate = prompt("Enter a future date mm/dd/yyyy")
// let futureDate = new Date(UserFutureDate)
// let birthDate = new Date(userBirthDate)
// let finalTime =  futureDate.getTime() - birthDate.getTime() 
// alert(Math.round(finalTime/1000/60/60/24/365.25).toFixed(1),"your age in future")


// Question no:9

// function findDate (){
// let userDate1 = document.getElementById('findDate1').value;
// let userDate2 = document.getElementById('findDate2').value;
// let findDateZero = document.getElementById('findDateZero')
// let date1 = new Date(userDate1)
// let date2 = new Date(userDate2)
// let finalDate = date2.getTime() - date1.getTime() 
// findDateZero.innerText = finalDate/1000/60/60/24

// }


// Question no:10 


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
// let a = document.getElementById('zero')
// console.log(a)
// let x = 10;

// function increaseByTwo(y) {
// let a = y + 2;
// return a;
// }

// let result = increaseByTwo(x);

// console.log(result);




// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
// import { getAuth , createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyDMeG-Yt8eUI3eoSEbLokIk9Fo_fCRTZ3k",
//   authDomain: "blog-app-9f834.firebaseapp.com",
//   projectId: "blog-app-9f834",
//   storageBucket: "blog-app-9f834.appspot.com",
//   messagingSenderId: "114009764949",
//   appId: "1:114009764949:web:3c7974840f125054e290dc",
//   measurementId: "G-K5QB7B6K9N"
// };


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);


// let form = document.getElementById('form');
// let userEmail = document.getElementById('userEmail');
// let userPassword = document.getElementById('userPassword');
// let container = document.getElementById('container');
// let formContainer = document.getElementById('form-container');

// form.addEventListener('submit' , (submitedForm) => {

// submitedForm.preventDefault()

// createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     // ...
//     formContainer.style.display = 'none';
//     container.style.display = 'block';
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     alert(errorMessage)
//     // ..
//   });
// })


// let arr = [10, 9, 3,19, 4, 5, 6, 7]

// let a = arr.reduce((a,b) => {
//     return a-b
// })

// // console.log(a)

// let b = arr.findIndex((age) => {
//     return age > 18;
// })
// console.log(b)

// let div = document.getElementById('abc')

// let xyz = `
// <h1>abc</h1>
// <button onClick='abc(this)'>abc</button>    
// `

// div.innerHTML = xyz

// window.abc = function (e){
//     console.log(e.parentNode)
//     alert('abc')
// }

// let password = '123456789123358';

// const a = Math.floor(password.length / 3);

// let b = 3;

// if (a) {
//     for (let i = 0; i < a; i++) {
//         const pass = password.split('');
//         pass.splice(b, 0, 'a', 'b', 'c');
//         password = pass.join('');
//         b += 6;
//     };
// };

// console.log(password);


// Swal.fire({
//     title: "The Internet?",
//     text: "That thing is still around?",
//     icon: "success"
// });


// const num = ['6', '5', 19, 11];
// let hiNum = num[0];


// for(let i = 0; i < num.length; i++){

//     if(hiNum > num[i]){
//     hiNum = num[i];

// }
// }
// console.log(hiNum);

// const a = num;

// num[8] = '18888'

// console.log(num);


// function foo(){
// var a = 1;

// setTimeout(() => {
//     console.log(a);
//     a = 2;
// }, 1000);
// };

// foo();

// console.log(0.2 + .2 == .4);

// const obj = {
//     a: 10,
//     b: {
//         c: 20,
//         d : () => {
//             console.log(this.c);
//         }
//     }
// }

// obj.b.d();

// Products add in mongodb work olx

// fetch('https://dummyjson.com/products')
//     .then(res => res.json())
//     .then(res => {

//         let pId = 4;

//         res.products.forEach(data => {

//             const obj = {
//                 ...data,
//                 date: 1707851051332,
//                 firstname: 'Ghulam',
//                 lastname: "Muhiuddin",
//                 latitude: "24.906557532647057",
//                 longitude: "67.09582844484632",
//                 productId: pId,
//                 userEmail: "muhiuddinghulam825@gmail.com",
//                 userId: "8UA4KTR8hNRUoKs95fV36X2yOEB2",
//                 userImg: ""
//             };
//             console.log(obj);

//             fetch('http://localhost:3001/products/add',{
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(obj)
//             })
//             .then(res => res.json())
//             .then(res => console.log(res));

//             pId += 1;
//         });
//     })

// const a = [1,2,3,4,5];

// const bla = a.reduce((accumulator, currentValue) => {

//     console.log(accumulator);

//     return accumulator + currentValue
//     })

// let bla = 0;

// for(let i = 0; i < a.length; i++){
//     console.log(bla);
// bla = bla+a[i]
// }

//     console.log(bla);

// function bla(abc){
//     abc('G_Muhiuddin')
// }

// Is this callback function

// bla((nameee) => {
// console.log(nameee);
// })

// const arr = [1,3,45,66,542]

// function forEachCopy(thiss ,bla) {
//     for(let i = 0; i < thiss.length; i++){
//         bla(thiss[i]);
//     }
// };

// arr.forEach((element) => {
//     console.log(element);
// });

// var str = 111;

// str[0] = 0;

// console.log(parseFloat("111") +1);

// let obj = {
//     name: "Ghulam",
//     age: 14
// }

// obj.age = 15;

// console.log(obj.age);


// console.log(obj.age);

// const qr = qrcode(0, "M");
// qr.addData('https://gmuhiuddin.website');
// qr.make();

// document.getElementById("container").innerHTML = qr.createImgTag();

// debugger

// abc();

// var b = "1";

// async function abc(){
// const res = await fetch("https://dummyjson.com/products/");
// const response = await res.json();

//     console.log("response");
// }

// console.log(a);

// var a = "a";

// console.log(a);

//Make appontment for timming for car parking 

// const timeArr = [{ time: "00-00 01-00" }, { time: "01-00 02-00" }, { time: "02-00 03-00" }, { time: "03-00 04-00" }, { time: "04-00 05-00" }, { time: "05-00 06-00" }, { time: "06-00 07-00" }, { time: "07-00 08-00" }, { time: "08-00 09-00" }, { time: "9-00 10-00" }, { time: "10-00 11-00" }, { time: "11-00 12-00" }, { time: "12-00 13-00" }, { time: "13-00 14-00" }, { time: "14-00 15-00" }, { time: "15-00 16-00" }, { time: "16-00 17-00" }, { time: "17-00 18-00" }, { time: "18-00 19-00" }, { time: "19-00 20-00" }, { time: "20-00 21-00" }, { time: "21-00 22-00" }, { time: "22-00 23-00" }, { time: "23-00 24-00" }];

// const selectedTimeArr = [{ time: "00-00 01-00" }, { time: "01-00 02-00" }, { time: "02-00 03-00" }, { time: "03-00 04-00" }, { time: "04-00 05-00" }, { time: "05-00 06-00" }, { time: "06-00 07-00" }, { time: "07-00 08-00" }, { time: "08-00 09-00" }, { time: "9-00 10-00" }, { time: "10-00 11-00" }, { time: "11-00 12-00" }, { time: "12-00 13-00" }, { time: "13-00 14-00" }, { time: "14-00 15-00" }, { time: "15-00 16-00" }, { time: "16-00 17-00" }, { time: "17-00 18-00" }, { time: "18-00 19-00" }, { time: "19-00 20-00" }, { time: "20-00 21-00" }, { time: "21-00 22-00" }, { time: "21-00 22-00" }, { time: "22-00 23-00" }, { time: "23-00 24-00" }];

// timeArr.forEach(element => {
//     element.booked = 0;
// });

// selectedTimeArr.forEach(element => {
//     timeArr.forEach(selecedElement => {
//         if (selecedElement.time === element.time) {
//             selecedElement.booked = selecedElement.booked + 1;
//         }
//     })
// });

// console.log(timeArr);

// let value = 10;

// for(let i = 0; i < 10; i++){
//     document.write(`18 × ${i+1} = ${value}<br />`);

//     value += 10;
// }

// document.querySelector("#btn").addEventListener("click", (e) => {
//     console.log(e, this);
// })

// const startCountdown = () => {

    // localStorage.setItem("num", "100");

    // const countDownSpan = document.getElementById('countdown');
    
    // setInterval(() => {
    //     const countDownNum = localStorage.getItem('num');
    //     countDownSpan.innerText = countDownNum;
    //     localStorage.setItem("num", countDownNum-1);
    // }, 1000);
// };

// Add 24 hours timer

// const countDownSpan = document.getElementById('countdown');
// let deliveryTime = 1717409710959;
// const nowDate = new Date();
// let outstandingTime = deliveryTime - nowDate.getTime();

// setInterval(() => {
//     countDownSpan.innerText = `${Math.floor(outstandingTime/1000/60/60)} : ${Math.floor((outstandingTime % (1000 * 60 * 60)) / (1000 * 60))} : ${Math.floor((outstandingTime % (1000 * 60 )) / 1000)}`;
//     outstandingTime -= 1000;
// }, 1000);
