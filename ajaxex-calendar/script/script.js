
function printMonth (currentMonth) {

    var printMonth = currentMonth.daysInMonth();
    var template = $('#calendar-template').html();
    var compiled = Handlebars.compile(template);
    var target = $('.day-container[data-id="j"]');
    target.html("");
    
    for (var i = 1; i <= printMonth; i++) {
        
        var datecomplete = moment({
            year: currentMonth.year(),
            month: currentMonth.month(),
            day: i
        });
       var printDay = compiled({
           "value": i,
           "datecomplete": datecomplete.format("YYYY-MM-DD")
       });
        
       target.append(printDay);
    }
    
}

function printHoliday(currentMonth) {

    var year = currentMonth.year();
    var month = currentMonth.month();

    $.ajax({
        url: "https://flynn.boolean.careers/exercises/api/holidays",
        method: "GET",
        data: {
            "year": year,
            "month": month
        },
        success: function(data) {

           console.log(data);
            var holiday = data["response"];

           for(var i = 0; i < holiday.length; i++) {

            var element = $(".day-container li[data-value='"+holiday[i]["date"]+"']");
            element.addClass("red");
            element.append(" " + holiday[i]["name"])
           }
        },
        error: function(err) {
            console.log("err", err);
        }
    })
}


   
 
function btnListener() {

    var nextButton = $("#next-btn");
    var prevButton = $("#prev-btn");

    nextButton.click(function () {
        nextCal();
    });    
    prevButton.click(function () {
        prevCal();
    });

    $(document).keydown(function() {
        var key = event.which;
        if (key == 39) {
            nextCal();
        }else if (key == 37) {
            prevCal();
        }
    })

}

function nextCal () {
    var calActive = $(".container.active");
        calActive.removeClass("active");


        if (calActive.hasClass("last")) {

            $(".container.last").addClass("active");
            alert("no data");
        } else {

            calActive.next().addClass("active");
        }
}

function prevCal () {

    var calActive = $(".container.active");
    calActive.removeClass("active");

    if (calActive.hasClass("first") == true) {

        $(".container.first").addClass("active");
        alert("no data");
    } else {
        
        calActive.prev().addClass("active");
    }

}




function init() {
    
    for (var j = 0; j < 11; j++) {

        var currentMonth = moment("2018-01-01");
        currentMonth.month(j);
    }
    printMonth(currentMonth);
    printHoliday(currentMonth);
    btnListener();
}


$(document).ready(init);