function addDisk() {

    $.ajax({

        url: "https://flynn.boolean.careers/exercises/api/array/music",
        method: "GET",
        success: function(data) {

            var success = data["success"];
            var response = data["response"];
            
            if (success) {
                
                    var template = $('#cd-template').html();
                    var compiled = Handlebars.compile(template);
                    var target = $('#cds-container');

                for(var i=0; i<response.length;i++) {

                    var disk = compiled(response[i]);
                    
                    target.append(disk);
                }

            }
        },

        error: function(err) {

            console.log("err", err);
        }
    });
   
}





function init() {

    addDisk();
}


$(document).ready(init);





var template = $('#cd-template').html();
var compiled = Handlebars.compile(template);
var target = $('#cds-container');