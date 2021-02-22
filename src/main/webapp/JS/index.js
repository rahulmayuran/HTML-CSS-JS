window.addEventListener("DOMContentLoaded", function(e){

    console.log("Content loaded from listener")

    //Using a const variable to get access to the data-order of buttons
    //If you don't want to use this, then you need to manually do onclick funcs with id attribute.
    const buttonOrder = document.querySelectorAll("button[data-order]")

    //use a forEach loop on the const variable to iterate through these buttons as they're a nodelist
    //This function has access to individual button
    buttonOrder.forEach(function(button){

        //For each function based on data-order, you are adding an onclick event
        button.addEventListener("click", function(e){

            //with e, you can get currentTarget, can give HTMl reference to the button
            //to get data-order and fetch its parent elements
            const button = e.currentTarget;

            //To get parentNode from the button's container(div) and fetch the title, price
            const container = button.parentNode;

            //To hold the information of which activity you selected, its title, price, desc
            //we use a Object literal 
            const order = {
                //Will either be Trekking or Boating based on data-order
                id : button.getAttribute("data-order"),
                //will fetch from the seperate containers you used for activities
                title : container.querySelector(".title").innerText,
                price : container.querySelector(".price").innerText,
                desc : container.querySelector(".desc").innerText
            };
            //you need to store this object in local storage
            //It doesn't know how to save objects as it saves only string, so we use JSON.stringify()
            localStorage.setItem("order", JSON.stringify(order));

            //after you string, make the browser url to change to booking.html
            const url = window.location.href.replace("activities.html","booking.html");
            window.location.href = url;

           

        });
    });

});

//JQueries and Sample JS
$(document).ready(function(){

 "use strict"
	
// var results = $("#resultsList");
// results.text("This is from jQuery");
// 
// var toggler = $("#toggler");
// toggler.on("click", function(){
//     results.toggle(1000);
//
// if(toggler.text() == "Hide") {toggler.text("Show");}
// else {toggler.text("Hide")};
// });
 
 var list = $("form label")
 list.css("font-weight", "bold");
 list.filter(":first").css("font-size", "20px");
 
 //- javaScripts 
 var message = "I need to be called inside a JS function"
 console.log("The first message is "+ message)
 function call(message){
     console.log("Function called message is " + message)
 }
 call("I have been called")
 function call(message, moreMessage){
     if(moreMessage){
         console.log("Two parameters are " + message + "."+ moreMessage)
     }else
     console.log("Function called message is " + message)
 }
 call("You can't avoid me", "If so, Can you avoid me?")
 var showMessage = function(message){
     console.log(message)
 }
 showMessage("ShowMessage var assigned to a function")
 function anonymous(msg, anonymouscall, weirdcall)
 {
     call(msg)
     //This refers to above call, passes it to function(msg) and prints in console
     anonymouscall()
     //defined a function and called anonymously later
     weirdcall()
 }
 anonymous("Anonymous function called ", 
 function() {
     console.log("Anonymouscall function called anonymously")
 }, 
 function(){
     console.log("weirdcall function called weirdly")
 });
 var person = {firstName:"John", lastName:"Doe", age:46};
 var cars = [{
     name : "BMW", 
     cost : 45000
 },{
     name : "Lambhorgini" ,
     cost : 30000
 }];
 person.phone = "90-231-324-24";
 console.log("Person array's first name is " + person.firstName +" Phone no is "+ person.phone )
 console.log("cars array length is " + cars.length)
 for(var x = 0 ; x < cars.length; x++){
     if(cars[x].cost > 40000){
     console.log("Printed the richest car of value " + cars[x].cost);
     }else
     console.log(cars[x]);
 }
 });