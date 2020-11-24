
// $(".header-right > a").click(function() {
//     console.log("è lui");
//     $(".hamburger-menu").show(1000);
// })

// $(".close").click(function() {
//     console.log("è di nuovo lui");
//     $(".hamburger-menu").hide("fast");
// })

$(".header-right > a").click(function() {
    console.log("è lui");
    $(".hamburger-menu").addClass("active");
})

$(".close").click(function() {
    console.log("è di nuovo lui");
    $(".hamburger-menu").removeClass("active");
})
