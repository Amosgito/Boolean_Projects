function btnListener () {

    var btn = $("#btn");
    btn.click(getDay);
}


function getDay () {

    var input = $("input");
    var dateTxt = input.val();

    var mom = moment(dateTxt, "DD/MM/YYYY")
    var dayOfWeek = mom.format("dddd");

    var target = $("#target");
    target.text(dayOfWeek);
}


function init() {

    btnListener();
    
}


$(document).ready(init);



// Dare all'utente, attraverso un input la possibilità di inserire una data con questo formato DD/MM/YYYY. 
// Rispondere all'utente con il giorno della settimana della data specificata.