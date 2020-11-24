function btnListener () {

    var btn = $(".grid-item");
    btn.click(getNewNum);
    
}

function getNewNum () {

    var numberTarget = $(this);
    var isClicked = numberTarget.hasClass("clicked")
    
    if (isClicked) {
        
        $.ajax({

            url: "https://flynn.boolean.careers/exercises/api/random/int",
            method: "GET",
            success: function ( data, state) {
    
                var success = data["success"];
                var number = data["response"];
                
                // numberTarget.html("");
    
                if(success) {
    
                    numberTarget.addClass("clicked")
                    
                    if(number <= 5) {
                        
                        numberTarget.removeClass("green");
                        numberTarget.addClass("yellow");
                        numberTarget.append(number);
    
                    } else {
    
                        numberTarget.removeClass("yellow");
                        numberTarget.addClass("green");
                        numberTarget.append(number);                 
                    }
    
                }
            },
    
            error: function (request, state, error) {
    
                console.log("there was an error" + error);
                console.log("there was an error" + state);
                console.log("there was an error" + request);
            }
        
        })
    }
    

    
}






function init() {

    btnListener();
}


$(document).ready(init);
