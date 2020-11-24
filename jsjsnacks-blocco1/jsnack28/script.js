


function generateSelect () {

    var dayTarget = $("#day");
    var monthTarget = $("#month");
    var yearTarget = $("#year");

    var months = moment.months();



     for (var i=1; i<31; i++) {

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


function init() {

   generateSelect();
    
}


$(document).ready(init);



// Creare 3 select. In una potremo inserire i giorni da 1 a 31, nella seconda i mesi da 1 a 12, nella terza gli anni dal 1980 al 2017. 
// Generiamo le tre select con javascript / jQuery