
function greet(name){
    if(name === "Rahul"){
        console.log("Welcome Rahul");
    }else{
        console.log("You're not Rahul");
    }
}

console.log("\nCalling no-arg greet() function to check condition");
greet();
console.log("\nCalling greet() function to check condition that sets to true");
greet("Rahul");
console.log("\nCalling greet() function to check condition that sets to false");
greet("X")

let person = {
    firstName : "Rahul",
    lastname : "KS",
    email : "rahul.ks@capgemini.com",
    Hi : function(){
        console.log("\nMy last name is " + this.lastname)
    }
};
person.Hi();
console.log("email is " +person.email);

x = [1,2,3,4];
console.log(x);

//Iterating an array using a backtick ``
let forEacharray = ["I", "Me", "Mine"];

forEacharray.forEach(function(value, index){
    console.log(`day :${value}, index :${index}`);
})

//Breakpoint check in browser
let name = "Rahul";
let initial = 'KS';
let fullname = name + initial;

//Listeners
window.addEventListener("DOMContentLoaded" , function(x){
    console.log("Page loaded and acknowledged by Listener")
})

let button = document.querySelector('#clickMe');

button.addEventListener("click", function(e){
    console.log("On click event occured" );
})

window.addEventListener("orientationchange",function(e){
    let screen = window.screen;
    let angle = screen.orientation.angle;
    let type = screen.orientation.type;

    console.log(`Angle is ${angle} and type is ${type}`);
})


function dragstart_handler(ev) {
    // Add different types of drag data
    ev.dataTransfer.setData("text/plain", ev.target.innerText);
    ev.dataTransfer.setData("text/html", ev.target.outerHTML);
    ev.dataTransfer.setData("text/uri-list", ev.target.ownerDocument.location.href);
  }

    window.addEventListener('DOMContentLoaded', () => {
        // Get the element by id
        const element = document.getElementById("p1");
        // Add the ondragstart event listener
        element.addEventListener("dragstart", dragstart_handler);
    });

           
