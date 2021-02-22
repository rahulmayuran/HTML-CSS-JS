//Should be enforced for a cleaner javascript
//It's dynamically typed language and there's no need of checking errors in compile time
'use strict';

window.addEventListener("DOMContentLoaded", function(e){

    console.log("Content Loaded from an event listener")
    //simple innerHTML
    let id = document.querySelector('#basic');
    id.innerHTML = "Changing to a JS object";
    console.log(id.innerHTML);
    console.log("Type of simple innerHTML is " + typeof(id));
    console.log('\n')

    
    //OBJECT LITERALS - Commonly called as JSON's
    
    let person = {
        firstName : "Rahul",
        lastName : "KS",
        isMatured() {
            let adult = (this.age>18) ? "matured" : "Amateur" ;
            return adult;
        }
    };
    console.log(person);
    console.log("Type of Object literal is " + typeof(person));
    console.log('\n')

    //The speciality of this property is that we can introduce attributes outside and print.
    person.age = 19;

    //Adding a function attribute and checking in the go to print boolean values
    // that's why JS is dynamically typed language
    person.isAdult = function(){ return this.age >=18; }
    console.log(person.isAdult() );

    //Adding a conditional operator and printing the values. no need of x =function(){} but x(){} 
    //This unique feature only works inside an object literal
    console.log(person.isMatured());
    console.log('\n');

            console.log("For loops to print the keys below");
            //Using for loops to print the keys
            for(let arrayName in person){
                console.log(arrayName);   
            }
            console.log('\n')

    //OBJECT type and its functions

        //Special Object to print the KEYS only, Object provides common functionality to all JS objects.
        console.log("Object method to print keys of an object literal")
        console.log(Object.keys(person));
        console.log('\n')

        //Object.assign(target,Source) , to copy/merge properties of one object to the another
        let personCopy = {};
        Object.assign(personCopy,person);
        console.log("Copied Object literal is ");
        console.log(personCopy);
        console.log('\n')

        //Another assign() method for merging two objects
        let personStats = {
            weight : "68 kg",
            Height : "170 cm"
        };
        Object.assign(personCopy,personStats);
        console.log(personCopy);
        console.log('\n')
    
    
    //CONSTRUCTOR FUNCTIONS - PARAMETERIZED CONSTRUTOR in java
    //When you don't want to repeat the same piece of code, but to use OOP

    function constPerson(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isAdult = function(){
            let adult =  (this.age >=18) ? "matured" : "immature";
            return adult;
        }
    };
    
    let Rahul = new constPerson("rahul", "ks", 25);
    let Rajesh = new constPerson("rajesh", "kommula", 26);
    let Prasad = new constPerson("prasad" , "PV" , 33);

    for(let Arrayobjects in Rahul)
    {
        console.log("Arrays : " +Arrayobjects);
    }
    
    console.log(Rahul);
    console.log(Rajesh);
    console.log(Prasad);
    console.log('\n')

    //ENCODING and DECODING URI's
    //encodeURI() will not encode: ~!@#$&*()=:/,;?+'
    //encodeURIComponent() will not encode: ~!*()'

   

    //Passing parameters from an object literal to another function
    function objectLiteral(fName, Lname, years){
        let person = {
            firstName : fName,
            lastName : Lname,
            age : years,
        };
        console.log("Passing parameters from  object literal to function")
        console.log(person)
    }
    objectLiteral("KS","Rahul",19);
    console.log('\n')

    /*
        JAVASCIPT EQUALITY OPERATORS
        == Should be avoided, but use it rarely
        === Most common, Should be used in all cases
        Object.is(object1, object2) , is almost common like === 
    */

    //returns true for string comparisons as it compares two values
    let string1 = "I'mString";
    let string2 = "I'mString";

        console.log("true for string comparisons as it compares two values")
        console.log(string1 == string2);
        console.log(string1 === string2);
        console.log(Object.is(string1,string2));

    //Returns false because, Object will always compare memory address and not the real values
    let objectlit1 = {fName : "Woo",lName : "Boo"};
    let objectlit2 = {fName : "Woo",lName : "Boo"};

        console.log("false for Object comparisons as it compares memory addresses")
        console.log(objectlit1 == objectlit2);
        console.log(objectlit1 === objectlit2);
        console.log(Object.is(objectlit1,objectlit2));
    console.log('\n')

    //ARRAY

    let diffentPerson = ['Rahul', 'KS'];
    console.log(diffentPerson);
    console.log("Type of Array is " + typeof(diffentPerson));
    console.log('\n')

    var encodeDecoder = function myFunction(uri) {

        var encode = encodeURIComponent(uri);
        var decode = decodeURIComponent(encode);
        var escaping = escape(uri);
        var unescaping = unescape(escaping);
        var result = "Encoded URI: " + encode + "\n" + "Decoded URI: " + decode + "\n" 
        + "Escaped URI: " + escaping +"\n" + "Unescaped URI: " + unescaping;
        return result;
        
      }

    console.log(encodeDecoder("!!!%Failed to Upload! File Name too long"));
})
