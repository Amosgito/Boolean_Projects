function exStudent () {

    var students = [
        {
            "name" : "Giacomo",
            "lastname" : "Bertolli",
            "age" : "40"
        },
        {
            "name" : "Mario",
            "lastname" : "Rossi",
            "age" : "35"
        },
        {
            "name" : "Davide",
            "lastname" : "Carpani",
            "age" : "29"
        }
    ];
    
    for (var i = 0; i < students.length; i++) {
    
        var student = students[i];
        console.log(student.name + " " + student.lastname + " " + student.age);
    }
}

function exStudent2 () {

    var students = [
        {
            "name" : "Giacomo",
            "lastname" : "Bertolli",
            "age" : "40"
        },
        {
            "name" : "Mario",
            "lastname" : "Rossi",
            "age" : "35"
        },
        {
            "name" : "Davide",
            "lastname" : "Carpani",
            "age" : "29"
        }
    ];

    var name = prompt("Enter first name");
    var lastname = prompt("Enter last name");
    var age = prompt("Enter age");

    var student = {

        "name" : name,
        "lastname" : lastname,
        "age" : age
    }

    students.push(student);
    
    for (var i = 0; i < students.length; i++) {
    
        var student = students[i];
        console.log(student.name + " " + student.lastname + " " + student.age);
    }
}

function triangleArea() {

    var triangle = {

        "base": 10,
        "altezza": 20
    }

    var area = triangle["base"] * triangle["altezza"] / 2;

    console.log(area);

}

function triangleInHtml () {
        
    var triangle = {

        "base": prompt("base"),
        "altezza": prompt("altezza")
    };

    var area = triangle["base"] * triangle["altezza"] / 2;

    var template = $("#triangle-template").html(); 
    var compiled = Handlebars.compile(template);
    var target = $("#triangle");
        
        var triangleHTML = compiled({

            "base": triangle["base"],
            "altezza": triangle["altezza"],
            "area": area
        });

        target.append(triangleHTML);
    
}

   

function init() {

    // exStudent2();
    // exStudent();
    // triangleArea();
    triangleInHtml();
}


$(document).ready(init);