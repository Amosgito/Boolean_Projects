


function generateSelect () {

    var dayTarget = $("#day");
    var monthTarget = $("#month");
    var yearTarget = $("#year");

    var months = moment.months();



     for (var i=1; i<=31; i++) {

       var newOpt = $("<option value='" + i + "'>" + i + "</option>");
       dayTarget.append(newOpt);
    }

    for (var i=0; i<months.length;i++) {

        var month = months[i];
        var newOpt = $("<option value='" + (i+1) + "'>" + month + "</option>")
        monthTarget.append(newOpt);
    }

    for (var i=1980; i<=2017;i++) {

        var newOpt = $("<option value='" + i + "'>" + i + "</option>");
        yearTarget.append(newOpt);
    }
}

function btnListener() {

    var target = $("#btn");
    target.click(checkDate);
}

function checkDate() {

    var inputDay = $("#day").val();
    var inputMonth = $("#month").val();
    var inputYear = $("#year").val();

    var inputDate = (inputDay + "/" + inputMonth + "/" + inputYear);

    var mom = moment(inputDate, "D/M/YYYY")
    var isValidDate = mom.isValid();

    console.log(isValidDate);

    var target = $("#response")

    if (isValidDate) {

        target.text("VALID DATE");
    }else {
        target.text("INVALID DATE");
    }
    
}


function init() {

   generateSelect();
    btnListener();
}


$(document).ready(init);



// Dopo aver popolato le select, creare un bottone. L'utente sceglierà una data tramite le select e farà click sul bottone. 
// Al click controlliamo che la data sia valida. 31 Febbraio ad esempio non è una data valida (aiutiamoci con Moment)