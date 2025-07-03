// 4 pillars of DOM
//      1.Selection of an Element
    //  2.Changing Html 
    //  3.Changing Css
 //     4.Event listener


    //  ******* 1. Selection of an Element *******
// var a = document.querySelector("h1")
// console.log(a)

// *********** 2. Changing HTML***********

//  document.querySelector("h1").innerHTML = "I love Rashmi"

//   var a = document.querySelector("h1")
//   a.innerHTML = "I love Rashmi"


// *********  3. Changing Csss**************
//   var a = document.querySelector("h1")
//     a.style.fontSize = "100px"
//     a.style.backgroundColor = "Blackmuji"

// ********** rivisin******************
// var a = document.querySelector("h1")
// a.innerHTML = " Prince Driving Center located at Galyang,Syangja."
// a.style.color = "Blue"
// a.style.backgroundColor = "yellow"




// ************** 4. Event Listner***********************


//  document.querySelector(".p1").innerHTML = "Prince Driving Center located at Galyang,Syangja."
//     var b = document.querySelector(".p1")
//     b.style.color = "red"
//    b.style.fontSize = "30px"      
//     b.style.backgroundColor = "blue"

//  var a = document.querySelector("h1")
// a.style.backgroundColor = "yellow"


// a.addEventListener("click",function(){
//     a.innerHTML = "Proprieter Surya Prasad Bhattarai age of 50"
//     a.style.color = "Blacklado"
//     a.style.backgroundColor = "Yellow"
//     a.style.fontSize = "20px"
// })



// bulb***********************************************ON OFF*************************8*******
var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")

var onoff = 0

  btn.addEventListener("click",function(){
    if(onoff ==0){
           console.log("ON")
           btn.innerHTML = "OFF"
        bulb.style.backgroundColor = "yellow"
        onoff = 1
    }else{
        btn.innerHTML = "ON"
        bulb.style.backgroundColor = "whitesmoke"
        onoff = 0
        console.log("OFF")
    }

       
  })



// ***********************selecting multiple elements is single times****************
//  var a = document.querySelectorAll("h1")
//  console.log(a) 





