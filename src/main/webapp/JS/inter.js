'use strict';

window.addEventListener("DOMContentLoaded" , function (e) {  

    console.log("Loaded from an Eventlistener");
    //Playing with the object literal
    let planet = {
        mass : {
            weight : "20Z kg",
            energy : "78P Cal"
        },
        name : "Mars",
        heat : "34M*C"
    };

    //To check the status of PROPERTIES : Writable, Configurable, Enumerable
    console.log(Object.getOwnPropertyDescriptor(planet, "name"));
    console.log('\n');

        //Writable - set to false
        Object.defineProperty(planet, 'name', {writable : false});
        console.log(Object.getOwnPropertyDescriptor(planet, "name"));
        console.log('\n');
        //planet.name = 'Jupiter';
        //Will throw an error because writable is set to false, So you can't deal with name anymore
                        // console.log(planet.name);

        //Enumerable - set to false,
        Object.defineProperty(planet, 'name' ,{enumerable : false})
        console.log(Object.getOwnPropertyDescriptor(planet, 'name'));
        console.log(planet); 
        //You can't see the name attribute as the enumerable is set to false.
        console.log('\n')

        //configurable- set to false
        Object.defineProperty(planet, 'name' ,{ configurable : false});
        console.log(Object.getOwnPropertyDescriptor(planet, "name"));
        console.log('\n')
        //You can't even change back to true, once it is false.
                        // Object.defineProperty(planet, 'name', {configurable : true});


    //PROTOTYPE PLAY - Every FUNCTION in JS has .bind, .apply, .prototype methods.
        //But it becomes undefined for any object literal, So we use __proto__
        let sqaureFunc = function(y){
            return y*y;
        };
        console.log(sqaureFunc(4));

        console.log("Function Prototype - Object instance,prototype for all objects");
        console.log(sqaureFunc.prototype);
        console.log('\n');

        //If you want to check the prototype for Object literal , then
        console.log("Object Prototype - Object instance from which the object is created");
        console.log(planet.__proto__);
        console.log('\n')

        function planetFunc(name, mass){
            this.name = name;
            this.mass = mass;
        }
        console.log(planetFunc.prototype);

        let saturn = new planetFunc('Saturn', '40Billion kg');
        console.log(saturn.__proto__);

        //The prototypes of Function constructor and object literal are same
        console.log("Checking the prototype of function and prototype of object")
        console.log(planetFunc.prototype === saturn.__proto__);

        //If I change the prototype of a function parameter or an object literal below
        //then the 'name' property changes everywhere you use them in prototype.
                planetFunc.prototype.heat = '40M *C';
                saturn.__proto__.heat = '40M *C';

        //You can see the value as 40 M deg C, because its added as prototype
        console.log(saturn.heat);

        saturn.heat = "30M *C";
        //After setting the heat property to saturn, You have two heat properties, 
        //One for saturn object and the other for its prototype.
        console.log(saturn);

        //JS looks for Object level properties, then at the prototype level.
        //You can check this using .hasOwnProperty method , its true because, we have at Object level.
        console.log(saturn.hasOwnProperty('heat'));

   //JAVASCRIPT CLASSES
   ///ECMAScript6 means the JS classes are supported by all browsers except IE

   class Lieutenant{
       
        constructor(firstName, lastName, height, weight,age){
            this.firstName = firstName;
            this.lastName = lastName;
            this.height = height;
            this.weight = weight;
            this.age = age;
            this.isFit = 
                function(){
                    var fit = (this.mybmi()<=25) ? "Person is Fit" : "Person is Unfit";
                    return fit
                }
            this.mybmi =  
                function(){
                    return this.weight/(this.height/100 * this.height/100);
                }
            }

            //Defined a getter for fetching fullName, Not in class, but in its prototype
            get fullName(){
                return this.firstName +" " + this.lastName;
            }
            //Defined a setter for setting fullName from elsewhere in code.
            set fullName(fullName){
                var parts = fullName.split(' ');
                this.firstName = parts[0];
                this.lastName = parts[1];
            }
            isOld() {
                var age = (this.age>=60)?"Old and 60+":"Young"
                return age;
            };
            
   }
   //As getters, setters are defined for fullName which is at Class's prototype level
   Object.defineProperty(Lieutenant.prototype, 'fullName', {enumerable : true});

   let Carol = new Lieutenant("Carol","ferrera",169, 70, 33);

   console.log("BMI value is " + (Carol.mybmi()).toFixed(3) + " and Fitness -> " + Carol.isFit());

   let BmiCalc = document.querySelector('#bmi');
   BmiCalc.addEventListener("click", function(e){
        
        let height = document.querySelector('#height').value;
        let weight = document.querySelector('#weight').value;
        let result = document.getElementById('result');
        let bmivalue = (weight/(height/100 * height/100)).toFixed(3);
        let isFit = function(){
            var fitP = (bmivalue<25) ? "Healthy and Fit" : "Unhealthy and Obese";
            return fitP;
        }
        result.innerHTML = "BMI value is " + bmivalue + 
        " and Fitness -> " + isFit();
        alert("BMI value is " + (weight/(height/100 * height/100)).toFixed(3) + 
        " and Fitness -> " + isFit());
   });

   //You can do this as there is a setter
   Carol.fullName = "Carol Ferrera"
   console.log(Carol.fullName + "| next to setter, isOld() function call -> " +Carol.isOld());
   console.log(Carol);

   //INHERITANCE
   //The __proto__ of FlyingOfficer Object is Lieutenant
   class FlyingOfficer extends Lieutenant{
       constructor(firstName, lastName, height, weight,age){
           super(firstName, lastName, height, weight,age);
           this._enrolledRounds = [];
       }
       //introducing a static function 
        static fromLieutenant(any){
            return new FlyingOfficer(any.firstName,any.lastName,any.age, any.height, any.weight); 

        }
       enroll(roundId){
           this._enrolledRounds.push(roundId);
       }

       getRounds(){
           return this.fullName + "'s enrolled Rounds are :" +
           this._enrolledRounds.join(', ')
       }
       
   }
        //Object instance with the inherited class
        let senthil = new FlyingOfficer("Senthil", "nath", 177, 78, 38)
        senthil.enroll('X101EE');
        console.log(senthil.getRounds());

        //Static Properties
        let CarolFlyer = FlyingOfficer.fromLieutenant(Carol);
        console.log(CarolFlyer);

   //BUILT_IN JAVASCRIPT Objects - Math, Date, Regex.
   //They are all static, use it directly

        //MATH
        console.log("Value of PI is " + Math.PI);
        console.log("Maximum value of provided number is " + Math.max(1 , 2, 10));
        console.log("Rounding off the number to " + Math.round(89.49999));

        //DATE
        //Year, month(0 - Jan to 11-Dec ), day, hours, minutes, sec, millisec
        let date = new Date(2020, 10 ,6, 18 ,55 ,59 , 59);
        console.log(date.toString());

        //REGEX PATTERNS - TEST
        //Starts with ^ and ends with $, has ?=.*[characters] which means the character can be 
        function isValidPassword(password)
        {
        //Normal way of creating instance for RegExp object
        let regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d|[0-9])(?=.*\\s).{8,}$');

        //Another way to escape \d and \s that you can't do normally as above
        let regex2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\s]).{8,}$/; 

        //test is a regex method that Returns True or false based on condition
        return regex.test(password);
        }
        let checker = isValidPassword('Strer2 231') ? "Valid, Strong password" : "Invalid, Weak password";
        console.log(checker);

        //To input value in HTML and validate it and send an console.log.
        let buttonForPassword = document.querySelector('#passVal');
        buttonForPassword.addEventListener('click', function getInputValue() {

            let passwordVal = document.getElementById('password').value;
            alert("The entered Password is : " + passwordVal);
            let passwordValidator = isValidPassword(passwordVal) ? "Valid, Strong password" : "Invalid, Weak password";
            alert("Validation : " + passwordValidator);
        });

        //REGEX METHOD - EXEC
        //To capture the error logs efficiently
        function RegexExecMethod(errorData){
            // g indicates global, (.*?) is a capture group which  will look out for SEVERE,
            // HIGH and another capture group to get the message of ERROR type
            let pattern = /ERROR(.*?):(.*?);/g;

            let looping = pattern.exec(errorData);

            while(looping !== null){
                console.log("-----------")
                console.log(looping[0]);
                console.log(looping[1])
                console.log(looping[2])
                console.log("-----------")
                looping = pattern.exec(errorData);
            }
        }
        //Returns an array with pattern msg,index, input
        let errorMsg = "INFO:Getting Started;ERROR(SEVERE):Server Crashed;ERROR(HIGH):Validation failed";
        RegexExecMethod(errorMsg);
});