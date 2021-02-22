// "use strict";

// var msg = "About page";

// var consoleMsg = "Hello JS from console";
// alert(msg);
// console.log(consoleMsg);

// var num = 10;
// if(num === "10")
// console.log("10 is 10 and number is " + typeof(num) )
// else
// console.log("num is "+ typeof(num))

// var navChanger = document.getElementById("return");
// navChanger.innerHTML = "<p>Return to main page</p>";

// function over(text){
//     text.innerHTML = "Mind filters, abstracts, confuses and changes direction"
// }

// function out(out){
//     out.innerHTML = " Mind abstracts everything and creates concepts, stories and blocks live experience"
// }

$(document).ready(function(){

    var textchanger = $("#mind2id");
    textchanger.text("Mind has filters that analyses, blocks and abstracts the truth by creating a reality for itself");

    var hidingText = $("#buttonid");
    console.log(hidingText.text());
    
    hidingText.on("click", function(){
        textchanger.toggle(500);

    if(hidingText.text() == "Hide"){
        hidingText.text("Show");
    }else if(hidingText.text("Show")){
        hidingText.text("Hide");    
    }

    });

   
    
    $(function(){
        
            $("#selectid").on("click",function(){
                $("#selectcopy").empty();
                    $("#selectid option:selected").each(function(){
                        $("#selectcopy").append($(this).text() + " , ");
                //Here,this refers to the option value in select
                    //});
            });
        });
    });

    $("#tableid").animate({opacity : 0},{duration : 0});

    $("#showTable").on("click",function(){
        $("#innerbox").css({"background-color":"lightgreen"});
        $("#innerbox").animate({width: "400px"},{ duration: 800,
            easing: "linear",
            step: function(x) {
                $("#loader").text(Math.round(x * 100 / 400)  + "%");
                $("#loader").css({"font-weight":"bolder","font-size":"20px",
                "margin":"0px 165px"});
            }
        });

        $("#tableid").animate({opacity : 1},{duration : 800});
        
        if($("#showTable").text() == "Show Table") {
        $("#showTable").text("Hide Table");

        }

        else{
            $("#showTable").text("Show Table") 

           

            $("#innerbox").animate({border : "0px"},{margin : "0px"});
            $("#innerbox").animate({width: "0px"},{ duration: 200,
                step: function(bar) {
                    $("#loader").text(Math.round(bar * 0 / 400)  + "%");
                    $("#loader").css({"font-weight":"bolder","font-size":"20px",
                    "margin":"0px 165px"});
                }
            });
            $("#tableid").animate({opacity : 0});
            
            
        }
    });
    // $(function(){
    //     $("#copyid").on("click",function(){ 
    //         $("#areacopy").empty();
    //          $("#selectid option:selected").each(function(){
    //             $("#areacopy").append("*" + $(this).text() + "<br />");
    //         });
    //     });
    // });
    
    
      
      
    
    // var buildingArray = [{
    //     name : "Apartment",
    //     floors : "6",
    //     Landspace : "3 grounds",
    //         people: {
    //             local : '60',
    //             others : '20'
    // }
    // },{
    //     name : "PG",
    //     rooms : "4",
    //     Landspace : "2 grounds",
    //         people: {
    //             local : '40',
    //             others : '10'
    //         }
    // }];
    // for(var x=0; x<buildingArray.length ; x++){
    //     buildingArray = buildingArray[x];
    // console.log("Locals : "+buildingArray.people.local);}

    // //resultList.empty(); 
    // $.each(buildingArray, function(index, item)
    // {
    //    var buildingList = $("<div class='result'>"+
    //    "<div class='title'>" + item.name +"</div>"+
    //    "<div> Landspace :" + item.Landspace + "</div>"+
    //   // "<div> locals :" + item.people.local + "</div>"+
    //    "</div>");

    //    //resultList.append(buildingList);
       
    //     buildingList.hover(function(){
    //         $(this).css("background-color", "lightgray");
    //     },function()
    //     {
    //         $(this).css("background-color", "transparent");
    //     })
    // });

});

    